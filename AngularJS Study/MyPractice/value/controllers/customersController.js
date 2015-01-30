(function() {
        var CustomersController = function($scope, customersFactory, appSettings) {
            $scope.customers = [];
            $scope.appSettings = appSettings;
            
            function init() {
                $scope.customers = customersFactory.getCustomers();    
            }
            
            init();
        };
        
        CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

        angular.module('customersApp')
        .controller('CustomersController', CustomersController);
       
}());
