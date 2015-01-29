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
          .when('/Orders/:customerId',
              {
                  controller: 'OrdersController',
                  templateUrl: './views/orders.html'
              })
          .otherwise({redirectTo: '/'});
    });
}());

