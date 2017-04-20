//initializing the controller that takes care of new friend creation
app.controller('newUserController', ['$scope', '$routeParams', 'objectsFactory', function($scope, $routeParams, objectsFactory){
  console.log('newUserController')
  //method that grabs all friends from the factory
  var showUsers= function(){
    //sends a callback to friendsFactory.index that puts all friends in $scope.friends
    objectsFactory.showUsers(function(data){
      console.log(data);
      $scope.users = data;
    })
  }
  //invoking index function to populate $scope.friends and display friends
  showUsers();
  console.log('index function invocation newObjectController')
  //sends form data contained in $scope.friend to friendsFactory
  //returns and adds created friend to $scope.friends
  $scope.createUser = function(){
    console.log($scope.user, 'Submitted Form newUser');
    objectsFactory.createUser($scope.user, function(data){
      $scope.users = data;
    });
  }
  //sends a specific user id to the factory, returns and invokes index method to update $scope.friends to display all friends, minus deleted friend
  $scope.deleteUser = function(id){
    console.log(id, 'delete')
    objectsFactory.deleteUser(id, function(data){
      showUsers();
    })
  }

}]);
