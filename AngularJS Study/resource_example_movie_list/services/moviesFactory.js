(function() {
    var moviesFactory = function($resource) {
        var resource_ = $resource;
        var services = {
            getMovies : getMovies
        };
        
        return services;
        
        //note:取得$resource,且擴充一個update method
        function getMovies() {
            return resource_("http://movieapp-sitepointdemos.rhcloud.com/api/movies/:id"
                             ,{ id: '@_id' }
                             ,{update: {
                                            method: 'PUT' // this method issues a PUT request
                                       }
                              });
        };
        
        

    }

    moviesFactory.$inject = ['$resource'];

    angular.module('moviesApp').factory('moviesFactory', moviesFactory);
})();