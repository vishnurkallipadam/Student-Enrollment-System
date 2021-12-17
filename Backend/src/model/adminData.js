// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb://localhost:27017/StudentEnrollmentSystem');

// schema definition
const schema = mongoose.Schema;

const adminSchema= new schema({
    username: String,
    password: String,
});

// model
var admindata = mongoose.model('admindata',adminSchema);

module.exports = admindata;