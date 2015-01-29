(function() {
        var OrdersController = function($scope, $routeParams) {
            var customerId = $routeParams.customerId;
            $scope.orders = null;
            $scope.customers = [
                {id:1, name:'Tony', city:'taipei', joined:'2012/12/02', orders: [{odate:'2015/01/10'}]},
                {id:2, name:'Nathan',city:'Ilan', joined:'2012/12/02', orders: [{odate:'2015/01/20'}]}
            ];
            
            function init () {
                for (var i=0, len=$scope.customers.length; i < len; i++) {
                    if ($scope.customers[i].id == customerId) {
                        $scope.orders = $scope.customers[i].orders;
                        break;
                    }
                }

            }
            
            init();
        };
        
        OrdersController.$inject = ['$scope', '$routeParams'];
        
        angular.module('customersApp')
        .controller('OrdersController', OrdersController);
       
}());
