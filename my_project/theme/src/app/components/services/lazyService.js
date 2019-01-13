angular
    .module('minotaur').factory('lazyService', function($http) {
    var jsPath = 'assets/js/controller/${ name }.js';
    var promisesCache = {};

    return {
        loadScript: function(name) {
            var path = jsPath.replace('${ name }', name);
            var promise = promisesCache[name];
            if (!promise) {
                promise = $http.get(path);
                promisesCache[name] = promise;

                return promise.then(function(result) {
				
                    eval(result.data);
                    //console.info('Loaded: ' + path);
                });
            }

            return promise;
        }
    }
});