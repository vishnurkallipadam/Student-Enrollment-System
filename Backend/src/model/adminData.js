// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.uq40y.mongodb.net/STUDENTENROLLSYSTEM?retryWrites=true&w=majority');

// schema definition
const schema = mongoose.Schema;

const adminSchema= new schema({
    username: String,
    password: String,
});

// model
var admindata = mongoose.model('admindata',adminSchema);

module.exports = admindata;