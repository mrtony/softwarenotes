(function() {
    angular.module('app.weathers')
        .controller('Weathers', Weathers);

    var Weathers = function(dataservice) {
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
