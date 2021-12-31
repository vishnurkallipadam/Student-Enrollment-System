// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.uq40y.mongodb.net/STUDENTENROLLSYSTEM?retryWrites=true&w=majority');


// schema definition
const schema = mongoose.Schema;
const employeeSchema= new schema({   
    name: String,
    role:String,
    email:String,
    password:String,
    status:String
});

// model
var employeedata = mongoose.model('employeedata',employeeSchema);
module.exports = employeedata;