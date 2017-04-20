//import path to allow joining of file paths
var path = require('path');
//import server controller methods
var users = require('../controllers/users.js');
var products = require('../controllers/products.js');
var orders = require('../controllers/orders.js');
console.log('routes');
//export routes so others can use these methods
module.exports = function(app) {
  app.get('/', function(req, res) {
    //process.env['APPROOT'] is simply the path of the root directory as defined in server.js, This line sends the main index.html file
    res.sendFile(path.join(process.env['APPROOT'],'client/index.html'))
  })
  //sends to http request to .index method in server connectionroller
  app.get('/users', function(req, res) {
    users.showUsers(req, res);
  });
  //sends to http request to .create method in server controller
  app.post('/users', function(req, res) {
    users.createUser(req, res);
  });
  //sends to http request to .delete method in server controller
  app.delete('/users/delete/:id', function(req, res) {
    users.deleteUser(req, res);
  });
  //sends to http request to .index method in server products controller
  app.get('/products', function(req, res) {
    products.showProducts(req, res);
  });
  //sends to http request to .create method in server conroller
  app.post('/products', function(req, res) {
    console.log('hit route')
    products.createProduct(req, res);
  });
  //sends to http request to .delete method in server conroller
  app.delete('/products/delete/:id', function(req, res) {
    products.deleteProduct(req, res);
  });
  //sends to http request to .index method in server conroller
  app.get('/orders', function(req, res) {
    orders.showOrders(req, res);
  });
  //sends to http request to .create method in server conroller
  app.post('/orders', function(req, res) {
    orders.createOrder(req, res);
  });
  //sends to http request to .delete method in server conroller
  app.delete('/orders/delete/:id', function(req, res) {
    orders.deleteOrder(req, res);
  });
}
