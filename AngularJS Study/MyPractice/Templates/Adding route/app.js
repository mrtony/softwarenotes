//option3
(function() {
    var app = angular.module('customersApp', ['ngRoute']);
    
    app
    .config(function($routeProvider){
        $routeProvider
          .when('/',
              {
                  controller: 'CustomersController',
                  templateUrl: './views/customers.html'
              })
          .otherwise({redirectTo: '/'});
    });
}());

