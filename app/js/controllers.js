'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('imageBrowseCtrl', ['$scope', function($scope) {

  }])
  .controller('imageUploadCtrl', ['$scope', function($scope) {
    this.imageSubmit = function(image){

        //add image upload logic for submit, still needs 'backend', this obviously doesn't submit diddly
        alert(image + ': thanks for adding.')
        
      };
  }]);

 