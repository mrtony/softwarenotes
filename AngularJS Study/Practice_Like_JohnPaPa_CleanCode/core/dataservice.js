(function() {

        var dataservice = function($http) {
            var services = {
                getCustomers : getCustomers,
                getCustomer : getCustomer,
                getWeather : getWeather
            };
            
            return services;
            
            ///////
            function getCustomers() {
                return $http.get('/customers');
            }
            
            function getCustomer() {
                return $http.get('/customers' + '/' + customerId);
            }
            
            function getWeather() {
                //return $http.get("http://api.openweathermap.org/data/2.5/weather"
                 //                ,{params : {q: "Taipei,Taiwan"}});
                return $http({url:'http://api.openweathermap.org/data/2.5/weather', method:'GET', headers:{'Content-Type' : 'json'}, params:{q: "Taipei,Taiwan"}});
            }
        }

        angular
            .module('app.core')
            .factory('dataservice', dataservice);
    
        dataservice.$inject = ['$http'];
    
})();