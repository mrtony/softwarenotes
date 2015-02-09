(function() {

    angular.module('app')
        .controller('Test', Test);
    
    Test.$inject = ['logger'];
    
    function Test(logger) {
        logger.info('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.error('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.warning('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.success('message:Test View is displayed','data:only can see in console','title:TEST');
        logger.wait('message:Test View is displayed','data:only can see in console','title:TEST');

    };    
})();