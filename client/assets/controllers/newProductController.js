//initializing the controller that takes care of new friend creation
app.controller('newProductController', ['$scope', '$routeParams', 'objectsFactory', function($scope, $routeParams, objectsFactory){
  console.log('newProductController')
  //method that grabs all friends from the factory
  var showProducts= function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    objectsFactory.showProducts(function(data){
      console.log(data);
      $scope.products = data;
    })
  }
  //invoking index function to populate $scope.friends and display friends
  showProducts();
  console.log('index function invocation newProductController')
  //sends form data contained in $scope.friend to friendsFactory
  //returns and adds created friend to $scope.friends
  $scope.createProduct = function(){
    console.log($scope.product, 'Submitted Form');
    objectsFactory.createProduct($scope.product, function(data){
      $scope.products = data;
    });
  }
  //sends a specific user id to the factory, returns and invokes index method to update $scope.friends to display all friends, minus deleted friend
  $scope.deleteProduct = function(id){
    console.log(id, 'delete')
    objectsFactory.delete(id, function(data){
      showProducts();
    })
  }

}]);
