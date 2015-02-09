(function() {

    angular.module('app.customers')
        .controller('Customers', Customers);
    
    Customers.$inject = ['dataservice', '$log'];
    
    function Customers(dataservice, $log) {
        var vm = this;

        vm.customers = [];

        activate();

        /////////////
        function activate() {
            dataservice.getCustomers()
                .then(function(resolution) {
                        $log.info('promise then',resolution);
                        vm.customers = resolution;
                    },
                    function (reason) {
                        $log.info('promise error',reason);
                    });
        }

    };    
})();
