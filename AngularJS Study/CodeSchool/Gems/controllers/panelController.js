(function() {
    var PanelController = function ($scope) {
        $scope.tab = 1;
        $scope.review= {};
        
        $scope.selectTab = function(setTab) {
            $scope.tab = setTab;
        }

        $scope.isSelected = function(checkTab) {
            return $scope.tab === checkTab;
        }
        
        $scope.addReview = function (gem) {
            gem.reviews.push($scope.review);
            $scope.review = {};
        }
    }
    
    PanelController.$inject = ['$scope'];

    angular.module('gemsApp')
    .controller('PanelController', PanelController);
}());