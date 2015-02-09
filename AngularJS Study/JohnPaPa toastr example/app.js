//option3
(function() {
    var app = angular.module('app', [
        'ngRoute',
        
        'app.core',
        
        'app.customers'
    ]);
    
    app
    .config(function($routeProvider,$locationProvider){
        $routeProvider
          .when('/',
              {
                  controller: 'Customers',
                  controllerAs: 'vm',
                  templateUrl: './customers/customers.html'
              })
          .otherwise({redirectTo: '/'});
        
        $locationProvider.html5Mode(true);
    });

}());

