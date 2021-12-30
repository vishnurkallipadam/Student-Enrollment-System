// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb://localhost:27017/StudentEnrollmentSystem');

// schema definition
const schema = mongoose.Schema;
const studentSchema= new schema({   
    name:String,
    email:String,
    password:String,
    phone:String,
    address:String,
    district:String,
    state:String,
    qualification:String,
    passout:String,
    skillset:String,
    employmentStatus:String,
    technologyTraining:String,
    course:String,
    payment:String,
    id:String,
    image:String


});

// model
var studentdata = mongoose.model('studentdata',studentSchema);
module.exports = studentdata;