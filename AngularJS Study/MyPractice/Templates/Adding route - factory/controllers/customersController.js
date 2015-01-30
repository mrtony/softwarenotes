(function() {
        var CustomersController = function($scope, customersFactory) {
            $scope.customers = [];
            
            function init() {
                $scope.customers = customersFactory.getCustomers();    
            }
            
            init();
        };
        
        CustomersController.$inject = ['$scope', 'customersFactory'];

        angular.module('customersApp')
        .controller('CustomersController', CustomersController);
       
}());
