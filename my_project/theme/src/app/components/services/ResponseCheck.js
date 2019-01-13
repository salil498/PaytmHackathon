(function() {
  'use strict';
angular
    .module('minotaur').factory('ResponseCheck',function($state,$cookies){
	return {
		ResponseStatus:function(response){
		
		 if(response.status == 200)
		 	return;
		 	else
		 	{
		 		if($cookies.get('sessionid') == undefined){
		 			swal("Session Expired","You Are Unauthenticated","error");
		 			$state.go('pages.login');
		 			return;
		 		}		 		
		 		if(response.status == 400)
		 		swal("Error","Kindly Check The Data You Entered","error");
		 		if(response.status == 401){	
		 			swal("Session Expired","You Are Unauthenticated","error");
		 			$state.go('pages.login');
		 		}
                if(response.status == 403){
		 		swal("Error","You Don't Have Permission to access this","error");
		 		$state.go('dashboard');
		 	   }
		 	    if(response.status == 202){
		 	    	console.log(response);
		 	    	if(response.data.msg!=undefined)
		 	    		swal("Warning",response.data.msg,"warning");
		 	    	return false;
		 	    }
		 		if(response.status == 405)
		 		swal("Error","Kindly Contact the Developers","error");
		 		if(response.status == 408)
		 		swal("Error","Time Limit Exceeded...","error");
		 		if(response.status == 404)
		 		swal("Error","URL Not Found...","error");
		 		if(response.status == 415)
		 		swal("Error","This File Is Not Supported...","error");
		 		if(response.status == 429)
		 		swal("Error","You Made Too Many Attempts Kindly Wait For Some Time...","error");
		 		if(response.status == 500)
		 		swal("Error","Your Request Could Not Be Processed At The Moment...","error");
		 		if(response.status == 502)
		 		swal("Error","No Response","error");
		 		if(response.status == 503)
		 		swal("Error","This Service Is Currently Unavailable...","error");
		 		if(response.status == 511)
		 		swal("Error","Kindly Login To Your Captive Portal To Access This...","error");
		 		if(response.status == 409)
		 		swal("Conflict","Entry Already Found","warning");
		 		if(response.status == 204)
		 		swal("Conflict","Data Requested Could Not Be Found","error");
		 		return false;
		 	}
		}
	};
}
);
})();
