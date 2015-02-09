(function() {

    angular.module('app.customers')
        .controller('Customers', Customers);
    
    Customers.$inject = ['dataservice','logger'];
    
    function Customers(dataservice, logger) {
        var vm = this;

        vm.customers = [];

        activate();

        logger.error("message","data","title");
        logger.warning("message","data","title");
        logger.info("message","data","title");
        logger.success("message","data","title");
        
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
