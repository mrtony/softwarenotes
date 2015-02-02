(function() {
        function OrdersController($routeParams) {
            var vm = this;
            var customerId = $routeParams.customerId;
            vm.orders = null;
            vm.customers = [
                {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
                {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
            ];
            
            function init () {
                for (var i=0, len=vm.customers.length; i < len; i++) {
                    if (vm.customers[i].id == customerId) {
                        vm.orders = vm.customers[i].orders;
                        break;
                    }
                }

            }
            
            init();
        };
        
        OrdersController.$inject = ['$routeParams'];
        
        angular.module('customers.controllers')
        .controller('OrdersController', OrdersController);
       
}());
