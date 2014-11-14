angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider
    // home page
    .when('/', {
        templateUrl: 'views/form.html',
        controller: 'FormController'
    });

$locationProvider.html5Mode(true);

}]);