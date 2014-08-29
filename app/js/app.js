'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/images', {templateUrl: 'partials/images.html', controller: 'imageBrowseCtrl'});
  $routeProvider.when('/add_image', {templateUrl: 'partials/add_image.html', controller: 'imageUploadCtrl'});
  $routeProvider.otherwise({redirectTo: '/images'});
}]);
