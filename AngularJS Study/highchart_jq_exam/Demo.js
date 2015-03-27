/**
 * Created by tony on 2015/3/17.
 */
(function() {

    angular.module('app')
        .controller('Demo', Demo);

    function Demo($scope){

        $scope.addPoints = function () {
            var seriesArray = $scope.chartConfig2.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
            //$window.resize();
        };

        $scope.addSeries = function () {
            var rnd = []
            for (var i = 0; i < 10; i++) {
                rnd.push(Math.floor(Math.random() * 20) + 1)
            }
            $scope.chartConfig2.series.push({
                data: rnd
            })
            //$window.alert("test");
            //$window.width("800px");
        }

        $scope.removeRandomSeries = function () {
            var seriesArray = $scope.chartConfig.series
            var rndIdx = Math.floor(Math.random() * seriesArray.length);
            seriesArray.splice(rndIdx, 1)
        }

        $scope.swapChartType = function () {
            if (this.chartConfig.options.chart.type === 'line') {
                this.chartConfig.options.chart.type = 'bar'
            } else {
                this.chartConfig.options.chart.type = 'line'
                this.chartConfig.options.chart.zoomType = 'x'
            }
        }

        $scope.toggleLoading = function () {
            this.chartConfig.loading = !this.chartConfig.loading
        }

        $scope.setTab = function(tab) {
            console.log(tab);
            //$scope.chartConfig.getHighcharts().refresh();
            //console.log($scope.chartConfig.getHighcharts());
            //var chartObj = $scope.chartConfig2.getHighcharts();
            //chartObj.setSize(window.innerWidth, chartObj.chartHeight, doAnimation = false);

            //if (tab === 1) {
            //    $scope.chartConfig.getHighcharts().refresh();
            //}
            //else {
            //
            //}

        }
        //
        //$(window).resize(function(){
        //    alert(window.innerWidth);
        //
        //    $scope.$apply(function(){
        //        //do something to update current scope based on the new innerWidth and let angular update the view.
        //    });
        //});

        //$scope.$watch(function(){
        //    return $window.innerWidth;
        //}, function(value) {
        //    console.log(value);
        //});

        $scope.chartConfig = {
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
        };

        $scope.chartConfig2 = {
            options: {
                chart: {
                    type: 'line'
                }
            },
            series: [{
                data: [1, 5, 2, 18, 17]
            }],
            title: {
                text: 'Hello3'
            },
            rangeSelector:{
                enabled:true
            },
            loading: false,
            useHighStocks: true
        };

        console.log($scope.chartConfig);

    };


    //angular.module('app')
    //.controller('Demo', function ($scope) {
    //    $scope.addPoints = function () {
    //        var seriesArray = $scope.chartConfig.series
    //        var rndIdx = Math.floor(Math.random() * seriesArray.length);
    //        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    //    };
    //
    //    $scope.addSeries = function () {
    //        var rnd = []
    //        for (var i = 0; i < 10; i++) {
    //            rnd.push(Math.floor(Math.random() * 20) + 1)
    //        }
    //        $scope.chartConfig.series.push({
    //            data: rnd
    //        })
    //    }
    //
    //    $scope.removeRandomSeries = function () {
    //        var seriesArray = $scope.chartConfig.series
    //        var rndIdx = Math.floor(Math.random() * seriesArray.length);
    //        seriesArray.splice(rndIdx, 1)
    //    }
    //
    //    $scope.swapChartType = function () {
    //        if (this.chartConfig.options.chart.type === 'line') {
    //            this.chartConfig.options.chart.type = 'bar'
    //        } else {
    //            this.chartConfig.options.chart.type = 'line'
    //            this.chartConfig.options.chart.zoomType = 'x'
    //        }
    //    }
    //
    //    $scope.toggleLoading = function () {
    //        this.chartConfig.loading = !this.chartConfig.loading
    //    }
    //
    //    $scope.chartConfig = {
    //        options: {
    //            chart: {
    //                type: 'bar'
    //            }
    //        },
    //        series: [{
    //            data: [10, 15, 12, 8, 7]
    //        }],
    //        title: {
    //            text: 'Hello'
    //        },
    //
    //        loading: false
    //    };
    //
    //    console.log($scope.chartConfig);
    //
    //});
})();
