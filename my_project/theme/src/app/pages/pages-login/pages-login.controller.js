	(function() {
	'use strict';

	angular
	.module('minotaur')
	.controller('LoginController', LoginController);

	/** @ngInject */
	function LoginController($http,$location,$window,Base64,BaseUrl,$timeout, $uibModal,$log, $document,UserService,CheckSession,$rootScope,$cookies,alertify,$state,ResponseCheck) {
	var vm=this;
	vm.dash = 0;
	vm.login=function(){
	vm.data = { 'username': vm.username,
				'password':vm.password
				};
 			$http({
				method:'POST',
				data: vm.data,
				url:BaseUrl.RetBaseUrl()+'jyot/login/',
				headers: {
					'Cookie': $cookies.get('sessionid')
				},
				withCredentials: false
				}).then(function(response){
					console.log(response.data);
					vm.dash = response.data.message;
					if(vm.dash == "invalid credentials")
					{
						alertify.error('Wrong Credentials');
					}
					else 
						document.getElementById('jump').click();
					ResponseCheck.ResponseStatus(response);
				}).catch(function(response){
					ResponseCheck.ResponseStatus(response);
				});


	};
	}

	})();
