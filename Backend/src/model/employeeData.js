// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb://localhost:27017/StudentEnrollmentSystem');

// schema definition
const schema = mongoose.Schema;
const employeeSchema= new schema({   
    name: String,
    role:String,
    email:String,
    password:String
});

// model
var employeedata = mongoose.model('employeedata',employeeSchema);
module.exports = employeedata;