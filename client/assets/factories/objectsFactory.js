console.log('objects factory active');
app.factory('objectsFactory', ['$http', function($http){
  var factory = {}
  var users = [];
  var user = {};
  var products = [];
  var product = {};
  var orders = [];
  var order = {};
  factory.showUsers = function(callback){
    //update or set friends variable to send to controllers for displaying
    $http.get('/users').then(function(returned_data){
      console.log(returned_data.data);
      users = returned_data.data;
      callback(users);
    });
  }
  //send object created from form data to the database to create a new entry, then return an updated list of all friends
  factory.createUser = function(newobject, callback){
    console.log(newobject, 'object passed to factory to create');
    $http.post('/users', newobject).then(function(returned_data){
      console.log(returned_data.data);
      //set friend object to returned data
      user = returned_data.data;
      //push friend object to friends array containing all users
      users.push(user);
      //run function passed to this method with friends array as parameter
      console.log(users)
      callback(users);
    });
  }
  //sends friend id to server to be deleted from database, server responds with new object containing all friends, minus deleted friend to be ran with the function passed to this method
  factory.deleteUser = function(id,callback){
    console.log(id,"factory");
    $http.delete('/users/delete/' + id).then(function(returned_data){
      console.log(returned_data.data);
      callback(returned_data.data);
    })
  }
  factory.showProducts = function(callback){
    //update or set friends variable to send to controllers for displaying
    $http.get('/products').then(function(returned_data){
      console.log(returned_data.data);
      products = returned_data.data;
      callback(products);
    });
  }
  //send object created from form data to the database to create a new entry, then return an updated list of all friends
  factory.createProduct = function(newobject, callback){
    console.log(newobject, 'object passed to factory to create');
    $http.post('/products', newobject).then(function(returned_data){
      console.log(returned_data.data);
      //set friend object to returned data
      product = returned_data.data;
      //push friend object to friends array containing all users
      products.push(product);
      //run function passed to this method with friends array as parameter
      callback(products);
    });
  }
  //sends friend id to server to be deleted from database, server responds with new object containing all friends, minus deleted friend to be ran with the function passed to this method
  factory.deleteProduct = function(id,callback){
    console.log(id,"factory");
    $http.delete('/products/delete/' + id).then(function(returned_data){
      console.log(returned_data.data);
      callback(returned_data.data);
    })
  }
  factory.showOrders = function(callback){
    //update or set friends variable to send to controllers for displaying
    $http.get('/orders').then(function(returned_data){
      console.log(returned_data.data);
      orders = returned_data.data;
      callback(orders);
    });
  }
  //send object created from form data to the database to create a new entry, then return an updated list of all friends
  factory.createOrder = function(newOrder, callback){
    console.log(newOrder, 'object passed to factory to create');
    $http.post('/orders', newOrder).then(function(returned_data){
      //set friend object to returned data
      order = returned_data.data;
      //push friend object to friends array containing all users
      orders.push(product);
      //run function passed to this method with friends array as parameter
      callback(orders);
    });
  }
  //sends friend id to server to be deleted from database, server responds with new object containing all friends, minus deleted friend to be ran with the function passed to this method
  factory.deleteOrder = function(id,callback){
    console.log(id,"factory");
    $http.delete('/orders/delete/' + id).then(function(returned_data){
      console.log(returned_data.data);
      callback(returned_data.data);
    })
  }
  return factory;
}])
