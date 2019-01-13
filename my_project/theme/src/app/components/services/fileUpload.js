angular
.module('minotaur').service('fileUpload', function ($http,$log) {
	this.uploadFileToUrl = function(file, uploadUrl,type){

		var fd = new FormData();
		fd.append('file',file);
		fd.append('param',type);

		if(file != undefined){	
		var validExts = ['application/pdf','image/png','image/jpeg','image/jpg']; // Allowed Extensions
		if(validExts.indexOf(file.type)==-1){
			swal('Check File Type','Allowed files are pdf,jpg,jpeg and png.','warning');
			return;
		}
		if(file.size >= 2*1024*1024 ){  // Max Upload Size is 2MB
			swal('Check File Size','Max Upload size is 2 Mb','warning');
			return;
		}
	 }
 
		var ret = $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               }).then(function(response){
               	if(response.data.error == true)
               	swal('Problem in Upoading file',response.data.msg,'warning');
				 return response; 	
               }).catch(function(response){  
				swal('Error','File Could Not Be Uploaded..','error');
               });
		return ret;

       }
	
});