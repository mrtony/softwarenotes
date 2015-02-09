(function() {

    angular.module('app')
        .controller('Main', Main);
    
    Main.$inject = ['logger', '$interval', '$q'];
    
    function Main(logger, $interval, $q) {
        var vm = this;
        vm.cancelRequested = false;
        
        function getPromise() {
            var i = 0;
            var deferred = $q.defer(); //creates a new deferred object
            var timer = $interval(function() {
                    if ( !! vm.cancelRequested) { //if cancellation is requested from UI, reject the Promise
                        deferred.reject('Promise Rejected due to cancellation.');
                        $interval.cancel(timer);
                    }
                    i = i + 1; //increment i each time
                    if (i == 5) {
                        deferred.resolve('Counter has reached 5'); //once the value of i=5, resolve the promise
                        $interval.cancel(timer); //make sure to cancel timer
                    } else {
                        deferred.notify('Counter has reached ' + i); //else notify the client about the progress
                    }
                }, 1000); //run the task every 1 second
            return deferred.promise; //finally, return the Promise instance
        }

        vm.testTimer = function() {
            var i = 0;
            var timer = $interval(function() {
                  $log.info("123",{});
                }, 1000); //run the task every 1 second
        }
        
        vm.getAsyncMessage = function() {
            var promise = getPromise(); //get hold of the Promise instance
            promise
              .then(
                function(message) {
                    logger.info('Promise resolved!');
                    vm.status = 'Resolved : ' + message;
                }, 
                function(message) {
                    logger.warning('Cancel by requested by user!');
                    vm.status = 'Rejected : ' + message;
                }, 
                function(message) {
                    logger.info('notify:'+message,message,'display count');
                    vm.status = 'Notifying : ' + message;
            });
        }
//        logger.info('message:Test View is displayed','data:only can see in console','title:TEST');
//        logger.error('message:Test View is displayed','data:only can see in console','title:TEST');
//        logger.warning('message:Test View is displayed','data:only can see in console','title:TEST');
//        logger.success('message:Test View is displayed','data:only can see in console','title:TEST');
//        logger.wait('message:Test View is displayed','data:only can see in console','title:TEST');

    };    
})();