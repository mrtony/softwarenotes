(function() {

    angular.module('app.customers')
        .controller('Customers', Customers);
    
    Customers.$inject = ['dataservice'];
    
    function Customers(dataservice) {
        var vm = this;

        vm.customers = [];

        activate();

        /////////////
        function activate() {
            dataservice.getCustomers()
                .then(function(customers) {
                    vm.customers = customers.data;
                });
/*
            dataservice.getCustomers()
                            .success(function(customers) {
                                vm.customers = customers;
                            });
*/
        }

    };    
})();
