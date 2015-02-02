(function() {

    
        function CustomersController() {
            var vm = this;
            
            vm.customers = [
                {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
                {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
            ];
        };

        angular.module('customers.controllers')
        .controller('CustomersController', CustomersController);
       
}());
