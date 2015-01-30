(function() {
        var customersService = function() {
            var customers = [
                    {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
                    {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
                ];
            
            
            this.getCustomers = function() {
                return customers;
            }
            
            this.getCustomer = function(customerId) {
                
                for (var i=0, len=customers.length; i < len; i++) {
                    if (customers[i].id == customerId) {
                        console.log(customerId);        
                        return customers[i];
                    }
                }
                
                return {};
            }
            
        }
        
        angular.module('customersApp').service('customersService', customersService);
})();