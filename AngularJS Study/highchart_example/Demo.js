/**
 * Created by tony on 2015/3/17.
 */
(function() {

    angular.module('app')
        .controller('Demo', Demo);


    
    function Demo() {
        vm = this;

        vm.message = {data:"I'm Demo"};
        
        vm.chartConfig = {
            options: {
                chart: {
                    type: 'bar'
                }
            },
            series: [{
                data: [10, 15, 12, 8, 7]
            }],
            title: {
                text: 'Hello'
            },

            loading: false
        }
/*
        $scope.chartConfig = {
            options: {
              chart: {
                type: 'areaspline'
              },
              plotOptions: {
                series: {
                  stacking: ''
                }
              }
            },
            series: $scope.chartSeries,
            title: {
              text: 'Hello'
            },
            credits: {
              enabled: true
            },
            loading: false,
            size: {}
        }
        */
        
        activate();

        /////////////
        function activate() {
            console.log("test");

        }

    };
})();
