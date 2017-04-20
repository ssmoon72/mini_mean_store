//import mongoose
var mongoose = require('mongoose');
console.log('user model');
//set up blueprint for db
var userSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2},
    last_name: {type: String, required: true, minlength: 2},
}, {timestamps: true}
);

//get schema
var User = mongoose.model('User', userSchema);
