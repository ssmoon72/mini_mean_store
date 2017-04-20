//actual database manipulation occurs here. instantiate mongoose variable and friends collection in mongodb
var mongoose = require('mongoose');
var Product = mongoose.model('Product');
console.log('products server controller');
//export this file so others may call upon these functions
module.exports = {
  //retrieves all customers from database and returns as json object
  showProducts: function(req,res){
    Product.find({}, function(err,users){
      if (err){
        console.log('error finding users');
      }
      else{
        res.json(users);
      }
    })
  },
  //receive http request from customersFactory and create a new entry in database with information retrieved from the request body, returns json object
  createProduct: function(req,res){
    console.log(req.body);
    Product.create(req.body, function(err, result){
      if (err){
        console.log(err);
        console.log('error creating new product');
      }
      else {
        console.log('added new product')
        res.json(result);
      }
    })
  },
  //deletes the friend with matching id from req.params.id from the database and returns an amended list of all friends via json object
  deleteProduct: function(req,res){
    console.log(req.params.id, 'server controller delete')
    Product.remove({_id: req.params.id}, function(err,users){
      if (err){
        console.log('error removing user')
      }
      else{
        res.json(users);
      }
    })
  }
}
