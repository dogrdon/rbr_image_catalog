'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('imageBrowseCtrl', ['$scope', '$http', function($scope, $http) {
      $http.get('metadata/dummy.json').success (function(data){
          $scope.imageData = data;
      });
  }])

  .controller('imageUploadCtrl', ['$scope', 
  	function($scope) {
    
    	$scope.imageSubmit = function(image){

        	//add image upload logic for submit, still needs 'backend', this obviously doesn't submit diddly
        	alert(image + ': thanks for adding.')
        
      	};
  }])
  
  .controller('imageDetailCtrl', ['$scope', '$http', '$routeParams', 
  	function($scope, $http, $routeParams){
		$http.get('metadata/dummy.json').success (function(data){
			$scope.imageVar = data;
			$scope.thisImage = $routeParams.imageId;
			
			console.log('hi i am ' + $scope.imageVar);
			console.log('and my name is ' + $scope.thisImage); //item._id
			
		});
		
  
  }]);

