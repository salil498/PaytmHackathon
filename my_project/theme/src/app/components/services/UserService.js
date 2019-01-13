(function() {
  'use strict';
angular
    .module('minotaur').factory('UserService',function(){
	return {
		isLogged:false,
		username:''
	};
});
})();
