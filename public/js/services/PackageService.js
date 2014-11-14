//public/js/services/PackageService.js
angular.module('PackageService', [])
 .factory('form', ['$http', function($http) {
    return {
      //call to get all nerds
      get : function() {
        return $http.get('/api/packages/get_all');
      },
      // these will work when more API routes are defined on the Node side of 
      // things call to POST and create a new nerd
      create : function(pkgData) {
        return $http.post('/api/packages/add', pkgData);
      }
    }
 }]);