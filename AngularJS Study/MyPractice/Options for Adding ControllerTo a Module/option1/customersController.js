//sample file architecture for adding controller to a module
//option 1
app.controller('CustomersController', function($scope) {
    $scope.customers = [
        {name:'Tony', city:'taipei', joined:'2012/12/02'},
        {name:'Nathan',city:'Ilan', joined:'2012/12/02'}
    ];
});