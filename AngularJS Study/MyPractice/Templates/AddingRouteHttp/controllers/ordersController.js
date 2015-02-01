(function() {
        var OrdersController = function($scope, $routeParams, customersFactory) {
            var customerId = $routeParams.customerId;
            $scope.orders = null;

            function init () {
                customersFactory.getCustomer(customerId)
                    .success(function(customer) {
                        $scope.customer = customer;
                    })
            }
            
            init();
        };
        
        OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
        
        angular.module('customersApp')
        .controller('OrdersController', OrdersController);
       
}());
