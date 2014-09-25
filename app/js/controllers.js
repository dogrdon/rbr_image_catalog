'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('imageBrowseCtrl', ['$scope', '$http', function($scope, $http) {
      $http.get('metadata/dummy.json').success (function(data){
          $scope.imageData = data;
      });
  }])

  .controller('imageUploadCtrl', ['$scope', '$http', 
  	function($scope, $http) {
    	
		$scope.data = {
			title: "image title",
			file: "image_file.png" 
			
		};
		
    	$scope.imageSubmit = function(form){

        	//add image upload logic for submit, still needs 'backend', this obviously doesn't submit diddly
        	console.log(Object.getOwnPropertyNames(form)[1] + ' for upload. thanks for adding.');
        
      	};
  }])
  
  .controller('imageDetailCtrl', ['$scope', '$http', '$routeParams', '$filter', 
  	function($scope, $http, $routeParams, $filter){
		$http.get('metadata/dummy.json').success (function(data){
			
			$scope.thisImage = $filter('filter')(data, function(d){return d._id === $routeParams.imageId;})[0];
			
			
			
			console.log('I am ' + $scope.thisImage.title); //item.title
			
		});
		
  
  }]);

