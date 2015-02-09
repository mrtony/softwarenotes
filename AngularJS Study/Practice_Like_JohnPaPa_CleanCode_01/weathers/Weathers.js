(function() {
    angular.module('app.weathers')
        .controller('Weathers', Weathers);

    Weather.$inject = ['dataservice'];
    
    function Weathers(dataservice) {
        var vm = this;

        vm.weathers = {};

        activate();

        /////////////
        function activate() {
            dataservice.getWeather()
                            .success(function(weathers) {
                                vm.weathers = weathers;
                            });
        }

    };

}());
