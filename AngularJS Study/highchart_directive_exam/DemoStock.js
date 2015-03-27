/**
 * Created by tony on 2015/3/27.
 */

angular.module('app', []);

angular.module('app').controller('DemoStock', function($scope, limitToFilter){
    $scope.ideas = [
        ['ideas1', 2],
        ['ideas2', 8],
        ['ideas3', 5]
    ];
    console.log("stock chart controller is instained");
    $scope.limitedIdeas = limitToFilter($scope.ideas, 2);
});


angular.module('app')
    .directive('hcPie', function () {
        return {
            restrict: 'C',
            replace: true,
            scope: {
                items: '='
            },
            controller: function ($scope, $element, $attrs) {
                console.log(2);

            },
            template: '<div id="container" style="margin: 0 auto">not working</div>',
            link: function (scope, element, attrs) {
                console.log(3);
                chart = new Highcharts.StockChart({
                    chart: {
                        renderTo: 'container'
                    },
                    rangeSelector: {
                        enabled: false,
                        selected: 1
                    },
                    series: [{
                        name: 'USD to EUR',
                        data: scope.items // predefined JavaScript array
                    }]
                });
                //scope.$watch("items", function (newValue) {
                //    chart.series[0].setData(newValue, true);
                //}, true);

            }
        }
    });