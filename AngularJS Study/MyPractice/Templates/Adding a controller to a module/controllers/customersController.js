(function() {
        var CustomersController = function($scope) {
            $scope.customers = [
                {name:'Tony', city:'taipei', joined:'2012/12/02'},
                {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
            ];
        };
        
        angular.module('customersApp').controller('CustomersController', CustomersController);
       
}());
