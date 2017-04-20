//actual database manipulation occurs here. instantiate mongoose variable and friends collection in mongodb
var mongoose = require('mongoose');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');
console.log('orders server controller');
//export this file so others may call upon these functions
module.exports = {
  //retrieves all customers from database and returns as json object
  showOrders: function(req,res){
    Order.find({}).populate('_user _product').exec( function(err,orders){
      if (err){
        console.log('error finding orders');
      }
      else{
        res.json(orders);
      }
    });
  },
  //receive http request from customersFactory and create a new entry in database with information retrieved from the request body, returns json object
  createOrder: function(req,res){
    var qtyOrdered = req.body.quantity
    var productQty = req.body._product.qty
    console.log(req.body._product.qty)
    console.log(req.body._product._id, 'userId from Object, orders.js');
    //make sure quantity entered is above 0
    if(qtyOrdered <= 0 || productQty - qtyOrdered < 0) {
      return res.json(false);
    }
    if (productQty >= qtyOrdered ){
      console.log(req.body._product)
      Product.findOneAndUpdate({_id: req.body._product._id}, {$set: {qty: (productQty - qtyOrdered)}}, function(err,product){
        console.log(product.qty, 'hopefully modified');
        req.body._product = product;
        console.log(req.body._product.qty, 'after thing');
        Order.create(req.body, function(err, result){
          if (err){
            console.log('error creating new order');
          }
          else {
            console.log(req.body._product.qty)
            console.log('added new order')
            res.json(result);
          }
        })
      })
    }
    else {
      return res.json(false);
    }
  },
  //deletes the friend with matching id from req.params.id from the database and returns an amended list of all friends via json object
  deleteOrder: function(req,res){
    console.log(req.params.id, 'server controller delete')
    Order.remove({_id: req.params.id}, function(err,users){
      if (err){
        console.log('error removing user')
      }
      else{
        res.json(users);
      }
    })
  },
}
