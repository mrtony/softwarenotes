(function() {
        var MoviesController = function(moviesFactory) {
            var vm = this;
            vm.movies = [];
            
            function init() {
                //var rc = moviesFactory.getMovies();
                /* update example
                moviesFactory.getMovies().get({id:3034},function(resp){
                                    vm.movies.push(resp);
                                    resp.releaseYear = "1933"
                                    resp.$update();
                                  },
                                  function(err){
                                  });
                                  */
                //get single
                moviesFactory.getMovies().get({id:3034},function(resp){
                                    vm.movies.push(resp);
                                  },
                                  function(err){
                                  });

                /*  //get all
                moviesFactory.getMovies().query(function(resp){
                                    vm.movies = resp;
                                  },
                                  function(err){
                                  });
                                  */

            }

            init();
        };
        
        MoviesController.$inject = ['moviesFactory'];

        angular.module('moviesApp')
        .controller('MoviesController', MoviesController);

}());
