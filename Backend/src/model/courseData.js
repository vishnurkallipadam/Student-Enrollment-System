// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.uq40y.mongodb.net/STUDENTENROLLSYSTEM?retryWrites=true&w=majority');


// schema definition
const schema = mongoose.Schema;

const courseSchema= new schema({
    name: String,
    certification: String,
    details: String,
    price:String,
    eligibility:String,
    count:Number,
    code:String,
    image:String

});

// model
var coursedata = mongoose.model('coursedata',courseSchema);
module.exports = coursedata;