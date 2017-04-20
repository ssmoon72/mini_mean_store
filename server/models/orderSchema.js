//import mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema
console.log('order model');
//set up blueprint for db
var orderSchema = new mongoose.Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    quantity: {type: Number},
}, {timestamps: true}
);

//get schema
var Order = mongoose.model('Order', orderSchema);
