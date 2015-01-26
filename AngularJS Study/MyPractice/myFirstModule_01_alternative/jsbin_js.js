//另一種較簡易的寫法
angular.module("myApp", []).controller("FirstController", function($scope) {
  
  $scope.name = 'Tony';
  $scope.salary = 0;
  $scope.percentage = 0;
  $scope.result = function() {
    return $scope.salary * $scope.percentage * 0.01;
  };
});



