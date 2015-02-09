(function() {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log','toaster'];

    function logger($log, toaster) {
        var service = {
            showToasts: true,

            error   : error,
            info    : info,
            success : success,
            warning : warning,
            wait : wait,

            // straight to console; bypass toastr
            log     : $log.log
        };

        return service;
        /////////////////////

        function error(message, data, title) {
            toaster.pop('error', title, message);
            $log.error('Error: ' + message, data);
        }

        function info(message, data, title) {
            toaster.pop('info', title, message);
            $log.info('Info: ' + message, data);
        }

        function success(message, data, title) {
            toaster.pop('success', title, message);
            $log.info('Success: ' + message, data);
        }

        function warning(message, data, title) {
            toaster.pop('warning', title, message);
            $log.warn('Warning: ' + message, data);
        }
        
        function wait(message, data, title) {
            toaster.pop('wait', title, message);
            $log.warn('Warning: ' + message, data);
        }
    }
}());
