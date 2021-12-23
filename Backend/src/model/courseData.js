// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb://localhost:27017/StudentEnrollmentSystem');

// schema definition
const schema = mongoose.Schema;

const courseSchema= new schema({
    name: String,
    certification: String,
    details: String,
    price:String,
    eligibility:String,
    count:Number,
    code:String

});

// model
var coursedata = mongoose.model('coursedata',courseSchema);
module.exports = coursedata;