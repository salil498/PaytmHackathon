	(function() {
	    'use strict';

	    angular
	        .module('minotaur')
	        .controller('SignupController', SignupController);

	    /** @ngInject */
	    function SignupController($http, $window, Base64, BaseUrl, $timeout, CheckSession, $rootScope, $cookies, alertify, $state, ResponseCheck) {
	        var vm = this;
	        vm.school_drop = ["K V School","Baal Vidhya Niketan"];
	        vm.submit = function() {

	        	vm.data1 = {		'username': vm.username,
	        					'password':vm.pass,
	        					'mobile':vm.mob,
	        					'name': vm.type,
	        					'email': vm.mail
	        					};
	        					console.log(vm.data1);
	           // var Send = Base64.encode(vm.username + ':' + vm.password);
	            $http({
				method:'POST',
				data: vm.data1,
				url:BaseUrl.RetBaseUrl()+'jyot/Signup/',
				headers: {
					'Cookie': $cookies.get('sessionid')
				},
				withCredentials: false
				}).then(function(response){
					ResponseCheck.ResponseStatus(response);
				}).catch(function(response){
					ResponseCheck.ResponseStatus(response);
				});

	        };
	    }

	})();