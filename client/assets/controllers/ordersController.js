//initializing the controller that takes care of new friend creation
app.controller('ordersController', ['$scope', '$routeParams', 'objectsFactory', function($scope, $routeParams, objectsFactory){
  console.log('ordersController')
  //method that grabs all friends from the factory
  var showOrders= function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    objectsFactory.showOrders(function(data){
      console.log(data);
      $scope.orders = data;
    })
  }
  var showProducts= function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    objectsFactory.showProducts(function(data){
      console.log(data);
      $scope.products = data;
    })
  }
  var showUsers= function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    objectsFactory.showUsers(function(data){
      console.log(data);
      $scope.users = data;
    })
  }
  showProducts();
  //invoking index function to populate $scope.friends and display friends
  showUsers();
  //sends form data contained in $scope.friend to friendsFactory
  //returns and adds created friend to $scope.friends
  showOrders();
  $scope.createOrder = function(){
    console.log($scope.newOrder._product, 'Submitted Form newUser');
    objectsFactory.createOrder($scope.newOrder, function(data){
      $scope.order = data;
      showOrders();
    });
  }
  //sends a specific user id to the factory, returns and invokes index method to update $scope.friends to display all friends, minus deleted friend
  $scope.deleteOrder = function(id){
    console.log(id, 'delete')
    objectsFactory.deleteOrder(id, function(data){
      showOrders();
    })
  }

}]);
