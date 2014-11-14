 //public/js/controllers/FormCtrl.js
 angular.module('FormCtrl', [])
  .controller('FormController',
    function($scope, form){

      // react to added package
      var package_added = function (data, status, headers, config) {
        // TODO: update current package data
      };

      // NOTE: access variables defined here with $scope.variable_here
      angular.extend($scope, {

        // TODO: variable to contain current package data

        // use package service to upload package data to server
        addPackage: function (recipient, carrier) {
          console.log('seding to ', recipient, ' via ', carrier);
          
          var sdata = {
            recipient: recipient,
            carrier: carrier
          };
          form.create(sdata).success(package_added);
        }
      });
    
      $scope.$on('$viewContentLoaded', function() {
        // TODO: get package data from the server
        
        // TODO: in callback, update the current package data
      });
    });