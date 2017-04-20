//actual database manipulation occurs here. instantiate mongoose variable and friends collection in mongodb
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Order = mongoose.model('Order');
console.log('users server controller');
//export this file so others may call upon these functions
module.exports = {
  //retrieves all customers from database and returns as json object
  showUsers: function(req,res){
    User.find({}, function(err,users){
      if (err){
        console.log('error finding users');
      }
      else{
        res.json(users);
      }
    })
  },
  //receive http request from customersFactory and create a new entry in database with information retrieved from the request body, returns json object
  createUser: function(req,res){
    console.log(req.body);
    User.create(req.body, function(err, result){
      if (err){
        console.log('error creating new user');
      }
      else {
        console.log('added new user')
        res.json(result);
      }
    })
  },
  //deletes the friend with matching id from req.params.id from the database and returns an amended list of all friends via json object
  deleteUser: function(req,res){
    console.log(req.params.id, 'server controller delete')
    Order.remove({_user: req.params.id}, function(err){
      if(err){
        console.log('error removing user orders');
      }
      else {
        User.remove({_id: req.params.id}, function(err,users){
          if (err){
            console.log('error removing user')
          }
          else{
            res.json(users);
          }
        })
      }
    })

  },
  //finds the friend with id matching req.params.id and returns info via json object
  show: function(req,res){
    console.log(req.params.id)
    User.findOne({_id: req.params.id}, function(err, users){
      console.log(users);
      res.json(users);
    })
  }
}
