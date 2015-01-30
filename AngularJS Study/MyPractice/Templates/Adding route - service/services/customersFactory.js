(function() {
        var customersFactory = function() {
            var customers = [
                    {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
                    {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
                ];
            
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