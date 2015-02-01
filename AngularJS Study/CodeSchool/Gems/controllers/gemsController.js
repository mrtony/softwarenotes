(function() {
        var GemController = function($scope, GemsFactory) {
            $scope.gems = [];
            
            function init() {
                $scope.gems = GemsFactory.getGems();    
            }
            
            init();
        };
        
        GemController.$inject = ['$scope', 'GemsFactory'];

        angular.module('gemsApp')
        .controller('GemsController', GemController);
       
}());
