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
        details : req.body.course.details,
        price : req.body.course.price,
        eligibility : req.body.course.eligibility
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








app.listen(port,()=>{console.log("server Ready at"+port)});