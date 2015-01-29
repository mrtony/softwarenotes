//Adding a controller to a module dealing with minification
//A Note on Minification - AngularJS - https://docs.angularjs.org/tutorial/step_05
//option1
var demoApp = angular.module('demoApp', []);

angular.module('demoApp').controller('SimpleController', ['$scope',function($scope) {
    $scope.customers = [
        {name:'Tony', city:'taipei', joined:'2012/12/02'},
        {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
    ];
}]);

//==============================================================================

//option2
var demoApp = angular.module('demoApp', []);

(function() {
    angular.module('demoApp').controller('SimpleController', function($scope) {
        var SimpleController = function($scope) {
            $scope.customers = [
                {name:'Tony', city:'taipei', joined:'2012/12/02'},
                {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
            ];
        };
        
        SimpleController.$inject = ['$scope'];
        
        angular.module('demoApp').controller('SimpleController', SimpleController);

}());

//option2 - more parameters
var demoApp = angular.module('demoApp', []);

(function() {
    angular.module('demoApp').controller('SimpleController', function($scope, $http) {
        var SimpleController = function($scope) {
            $scope.customers = [
                {name:'Tony', city:'taipei', joined:'2012/12/02'},
                {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
            ];
        };
        
        SimpleController.$inject = ['$scope', '$http'];
        
        angular.module('demoApp').controller('SimpleController', SimpleController);

}());