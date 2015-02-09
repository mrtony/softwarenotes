(function() {

        var dataservice = function($http, $log, $location) {
            var services = {
                getCustomers : getCustomers,
                getCustomer : getCustomer,
                getWeather : getWeather
            };
            
            return services;
            
            ///////
            
//            function getCustomers() {
//                return $http.get('/customers');
//            }
            
            function getCustomers() {
                return $http.get('/customers')
                .then(getCustomersComplete)
                .catch(function(message) {
                    $log.info('data service promise catch:', message);
                    $location.url('/');
                });
                
             function getCustomersComplete(data, status, headers, config) {
                            $log.info('data service getCustomersComplete:', data);
                            return data.data;
                        }
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
    
        dataservice.$inject = ['$http', '$log', '$location'];
    
})();