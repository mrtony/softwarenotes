(function() {

        var dataservice = function($http) {
            var services = {
                getCustomers : getCustomers,
                getCustomer : getCustomer
            };
            
            return services;
            
            ///////
            function getCustomers() {
                return $http.get('/customers');
            };
            
            function getCustomer() {
                return $http.get('/customers' + '/' + customerId);
            };

        }

        angular
            .module('app.core')
            .factory('dataservice', dataservice);
    
        dataservice.$inject = ['$http'];
    
})();