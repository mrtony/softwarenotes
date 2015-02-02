//option3
(function() {
    var app = angular.module('customersApp', ['ngRoute','customers.controllers']);
    
    app
    .config(function($routeProvider){
        $routeProvider
          .when('/',
              {
                  controller: 'CustomersController',
                  controllerAs: 'vm',
                  templateUrl: './customers/customers.html'
              })
          .when('/Orders/:customerId',
              {
                  controller: 'OrdersController',
                  controllerAs: 'vm',
                  templateUrl: './customers/orders.html'
              })
          .otherwise({redirectTo: '/'});
    });
}());

