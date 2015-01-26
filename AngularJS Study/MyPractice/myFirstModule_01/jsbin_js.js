var myApp = angular.module("myApp", []);

myApp.controller("FirstController", function($scope) {
  
  $scope.name = 'Tony';
  $scope.salary = 0;
  $scope.percentage = 0;
  $scope.result = function() {
    return $scope.salary * $scope.percentage * 0.01;
  };
});

myApp.controller("SecondController", function($scope) {
  
  $scope.name = 'Candy';
  $scope.salary = 0;
  $scope.percentage = 0;
  $scope.result = function() {
    return $scope.salary * $scope.percentage * 0.02;
  };
});
