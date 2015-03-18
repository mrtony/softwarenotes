//option3
(function() {
    var app = angular.module('customersApp', ['ngRoute']);
    
    app
    .config(function($routeProvider, $locationProvider){
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
        
        /*
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        */
    });
    
    
}());

