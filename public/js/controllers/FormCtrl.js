 //public/js/controllers/FormCtrl.js
 angular.module('FormCtrl', [])
  .controller('FormController',
    function($scope, form){

    // get data from form view input elements (recipient and carrier)
    // perform an xhr post request to the server's add package endpoint with the data from above
    // basically, see if you can utilize packageservice in here.
    form.create({
      test: 1
    });
  });

//look into binding event in angular for form submission