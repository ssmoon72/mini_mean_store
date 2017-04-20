//import mongoose
var mongoose = require('mongoose');
console.log('product model');
//set up blueprint for db
var productSchema = new mongoose.Schema({
    product_name: {type: String, required: true, minlength: 2},
    qty: {type: Number, required: true},
    description: {type: String},
    img_url: {type: String}
}, {timestamps: true}
);

//get schema
var Product = mongoose.model('Product', productSchema);
