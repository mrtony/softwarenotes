(function() {
        var customersFactory = function() {
            
            var factory = {};
            
            factory.getCustomers = function() {
                return customers;
            }
            
            factory.getCustomer = function(customerId) {
                
                for (var i=0, len=customers.length; i < len; i++) {
                    if (customers[i].id == customerId) {
                        console.log(customerId);        
                        return customers[i];
                    }
                }
                
                return {};
            }
            
            return factory;
        }
        
        angular.module('customersApp').factory('customersFactory', customersFactory);
})();