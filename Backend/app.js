const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const path = require('path');
const razorpay=require('razorpay')
const adminData = require('./src/model/adminData');
const courseData= require('./src/model/courseData');
const employeeData=require('./src/model/employeeData');
const studentData = require('./src/model/studentData')
app.use(express.static('./dist/LibraryApp'));
let instance=new razorpay({
    key_id:'rzp_test_ZGATXfSKdjDjl0',
    key_secret:'JlpCgDzCSpxdvfKUIofLPs6w'
})
app.use(cors());
app.use(express.json())

// get all courses
app.get('/courses',function(req,res){
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD");
    courseData.find()
                .then(function(courses){
                    res.send(courses);
                });
});

// get single course using _id
app.get('/course/:id',function(req,res){  
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    let id=req.params.id;
    courseData.findOne({_id:id},function(err,course){ 
        res.send(course)
    })
});

// add course
app.post('/add-course',(req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    console.log(req.body);
    var item={
        name : req.body.course.name,
        certification : req.body.course.certification,
        details : req.body.course.details,
        price : req.body.course.price,
        eligibility : req.body.course.eligibility,
        code:req.body.course.code,
        count:0
    }
    let course = new courseData(item);
    course.save();
    res.send();
});

// delete course
app.delete('/remove-course/:id',(req,res)=>{  
    id = req.params.id;
    courseData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('success')
        res.send();
    })
});

app.post('/register-student',async (req,res)=>{
    res.header("Acces-Control-Allow-Origin","*");
    res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
    courseData.updateOne(
        { 
            _id:req.body.student.course  
        },
        {
            $inc: { count: 1 } 
        }).then((res)=>{
            console.log(res);
        })
    courseData.findOne({_id:req.body.student.course}, async function(err,course){ 
        console.log(course.code);
        console.log(course.count);
        var item={
            name:req.body.student.name,
            email:req.body.student.email,
            phone:req.body.student.phone,
            address:req.body.student.address,
            district:req.body.student.district,
            state:req.body.student.state,
            password:req.body.student.password,
            qualification:req.body.student.qualification,
            passout:req.body.student.passout,
            skillset:req.body.student.skillset,
            employmentStatus:req.body.student.employmentStatus,
            technologyTraining:req.body.student.technologyTraining,
            course:req.body.student.course,
            payment:"pending",
            id:`${course.code}${course.count}`
        }
        item.password=await bcrypt.hash(item.password,10)
        var fees=req.body.fees
        console.log(fees);
        let student = new studentData(item);
        student.save((err,data)=>{
            let orderid=data._id
            console.log(orderid);
            var options = {
                amount: fees*100,  // amount in the smallest currency unit
                currency: "INR",
                receipt: ""+orderid
              };
              instance.orders.create(options, function(err, order) {
                
                if(err){
                    console.log(err);
                }else{
                    console.log('order',order);
                    res.send(order)
                }
              });
    
    
        });
        
    })
});


app.post("/verify-payment",(req,res)=>{

    let body=req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;
   
     var crypto = require("crypto");
     var expectedSignature = crypto.createHmac('sha256', 'JlpCgDzCSpxdvfKUIofLPs6w')
                                     .update(body.toString())
                                     .digest('hex');
                                     console.log("sig received " ,req.body.response.razorpay_signature);
                                     console.log("sig generated " ,expectedSignature);
     var response = {"signatureIsValid":"false"}
     if(expectedSignature === req.body.response.razorpay_signature)
      response={"signatureIsValid":"true"}
        console.log(req.body.id);
        studentData.updateOne(
            { 
                _id: req.body.id 
            },
            {
                $set: { 'payment': 'Success'} 
            }).then((data)=>{

                res.send(response);
            })
     });



app.listen(port,()=>{console.log("server Ready at"+port)});