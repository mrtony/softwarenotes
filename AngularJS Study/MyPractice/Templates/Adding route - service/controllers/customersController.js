(function() {
        var CustomersController = function($scope, customersService) {
            $scope.customers = [];
            
            function init() {
                $scope.customers = customersService.getCustomers();    
            }
            
            init();
        };
        
        CustomersController.$inject = ['$scope', 'customersService'];

        angular.module('customersApp')
        .controller('CustomersController', CustomersController);
       
}());
