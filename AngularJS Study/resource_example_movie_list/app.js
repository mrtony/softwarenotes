//option3
(function() {
    var app = angular.module('moviesApp', ['ngRoute', 'ngResource']);
    
    app
    .config(function($routeProvider){
        $routeProvider
          .when('/',
              {
                  controller: 'MoviesController',
                  controllerAs: 'vm',
                  templateUrl: './views/movies.html'
              })
          .otherwise({redirectTo: '/'});
    });
}());

