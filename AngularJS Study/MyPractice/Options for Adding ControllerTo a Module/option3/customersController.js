//sample file architecture for adding controller to a module
//option 3
(function() {
    angular.module('customersApp').controller('CustomersController', function($scope) {
        $scope.customers = [
            {name:'Tony', city:'taipei', joined:'2012/12/02'},
            {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
        ];
    });
}());


(function() {
        var CustomersController = function($scope) {
            $scope.customers = [
                {name:'Tony', city:'taipei', joined:'2012/12/02'},
                {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
            ];
        };
        
        angular.module('customersApp').controller('CustomersController', CustomersController);
}());

//if add more parameter
(function() {
        var CustomersController = function($scope, $http, foo) {
            $scope.customers = [
                {name:'Tony', city:'taipei', joined:'2012/12/02'},
                {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
            ];
        };
        
        CustomersController.$inject = ['$scope', '$http', 'foo'];
        
        angular.module('customersApp')
          .controller('CustomersController', CustomersController);
}());