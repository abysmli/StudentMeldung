var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/student');

var StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    department: String,
    type: String,
    activit: String
});


module.exports = mongoose.model('Student', StudentSchema);