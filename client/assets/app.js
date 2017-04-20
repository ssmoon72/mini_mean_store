//This file sets the routes used to determine which partial is displayed for which url
var app = angular.module('app', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/users', {
      templateUrl: 'partials/newUser.html',
      controller: 'newUserController'
    })
    .when('/products', {
      templateUrl: 'partials/newProduct.html',
      controller: 'newProductController'
    })
    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: 'ordersController'
    })
    .otherwise('/')
});
