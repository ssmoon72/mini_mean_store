app.controller('dashboardController', ['$scope', '$routeParams', 'objectsFactory', function($scope, $routeParams, objectsFactory){
  console.log('dashboardController');
  console.log($routeParams._id);
  //finds a single friend by passing the id through the url to the factory, returns the object and adds to $scope.friend
  var findAll = function(){
    objectsFactory.showUsers(function(data){
      $scope.users = data;
    })
    objectsFactory.showProducts(function(data){
      $scope.products = data;
    })
    objectsFactory.showOrders(function(data){
      $scope.orders = data;
    })
  }
  //invokes findFriend method to find a single user and display details
  findAll();

}])
