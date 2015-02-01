(function() {
        var CustomersController = function($scope, customersFactory) {
            $scope.customers = [];
            
            function init() {
                customersFactory.getCustomers()
                                .success(function(customers) {
                                    $scope.customers = customers;
                                });
            }
            
            init();
        };
        
        CustomersController.$inject = ['$scope', 'customersFactory'];

        angular.module('customersApp')
        .controller('CustomersController', CustomersController);
       
}());
