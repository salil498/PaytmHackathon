(function() {
  'use strict';
angular
    .module('minotaur').factory('BaseUrl_Files',function(){
    var base_str = 	window.location.hostname;

	//var Str='http://192.168.1.2:8080/';
 	//var Str='https://www.kiet.edu';
 	 var Str='http://10.0.0.12';


	console.log("Files base url: "+Str);
	return {
		RetBaseUrl:function(){ return Str; }
	};
});
})();
