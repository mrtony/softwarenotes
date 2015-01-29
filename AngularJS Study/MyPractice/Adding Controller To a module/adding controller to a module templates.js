//Adding controller to module option1
var demoApp = angular.module('demoApp', []);

demoApp.controller('SimpleController', function($scope) {
    $scope.customers = [
        {name:'Tony', city:'taipei', joined:'2012/12/02'},
        {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
    ];
});
//==============================================================================

//Adding controller to module option2
var demoApp = angular.module('demoApp', []);

angular.module('demoApp').controller('SimpleController', function($scope) {
    $scope.customers = [
        {name:'Tony', city:'taipei', joined:'2012/12/02'},
        {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
    ];
});

//==============================================================================
//Adding controller to module option3
var demoApp = angular.module('demoApp', []);


(function() {

})()

angular.module('demoApp').controller('SimpleController', function($scope) {
    var SimpleController = function($scope) {
        $scope.customers = [
            {name:'Tony', city:'taipei', joined:'2012/12/02'},
            {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
        ];
    };
    
    angular.module('demoApp').controller('SimpleController', SimpleController)
    
});