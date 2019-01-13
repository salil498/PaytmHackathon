angular
    .module('minotaur').factory('CheckSession', function($cookies) {
        return {
            coo: function() {
                return $cookies.get('sessionid');
            }
        }
    }); 
