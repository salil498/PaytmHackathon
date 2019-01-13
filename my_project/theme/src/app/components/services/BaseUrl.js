(function() {
  'use strict';
angular
    .module('minotaur').factory('BaseUrl',function(){
    var base_str = 	window.location.hostname;

 	//var Str='https://'+base_str+ '/api/hrms/';
 	 var Str='http://192.168.137.4:8000/';
 	//var Str='https://'+base_str+ '/api/hrms/';
 	
 	// var Str='http://'+'10.0.0.12'+ ':8000/';

	console.log(Str);
	return {
		RetBaseUrl:function(){ return Str; }

	};
});
})();
