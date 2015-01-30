(function() {
        var CustomersController = function($scope) {
            $scope.customers = [
                {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
                {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
            ];
        };
        
        CustomersController.$inject = ['$scope'];

        angular.module('customersApp')
        .controller('CustomersController', CustomersController);
       
}());
