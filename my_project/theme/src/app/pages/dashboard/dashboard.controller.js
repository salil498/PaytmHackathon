(function(){
  'use strict';

  angular
  .module('minotaur')
  .controller('DashboardController',DashboardController);

  function DashboardController(BaseUrl,ResponseCheck,$http, $scope,NgTableParams, $window,BaseUrl_Files,toastr,toastrConfig)
  {
     var vm=this;
     console.log(vm.material)
     vm.SSize = [{'sno':'1' , 'value':'Small'},{'sno':'2' , 'value':'Medium'},{'sno':'3' , 'value':'Large'}];
     vm.materialdropdwon = [{'sno':'Books' , 'value':'Books'},{'sno':'Cloths' , 'value':'Cloths'}]; 
     vm.categorydropdwon = [{'sno':'Academic' , 'value':'Academic'},{'sno':'Normal' , 'value':'Normal'}]; 
     console.log(vm.SSize);
    
     vm.show_view = false;
     vm.date_valid = false; 
     vm.show_view =false;
     vm.value= 0;
     var data = {} ;
     vm.data ={};
     
    toastrConfig.timeOut = parseInt(3000, 10);
    toastrConfig.closeButton = true;
    toastrConfig.progressBar = false;
    toastrConfig.newestOnTop = true;
    toastrConfig.autoDismiss= false;
    toastrConfig.maxOpened= 0;
    toastrConfig.containerId= 'toast-container';
    toastrConfig.preventDuplicates = false;
    toastrConfig.preventOpenDuplicates = false;     


  
        

     vm.get__material = function() 
      {

            // $http({
            //         method: 'GET',
            //         url: BaseUrl.RetBaseUrl() + 'Ticketing/getComponents/',
            //         params: { 'request_type': 'category' },
            //         headers: {
            //             'Cookie': $cookies.get('sessionid')
            //         },
            //         withCredentials: true
            //     }).then(function(response) {
            //         vm.category = response.data.data;
            //     }).catch(function(response) {
            //         ResponseCheck.ResponseStatus(response);
            //     });
                $http({
                    method: 'GET',
                    url: BaseUrl.RetBaseUrl() + 'jyot/user_data/',
                    params: { 'request_type': 'material' },
                    // headers: {
                    //     'Cookie': $cookies.get('sessionid')
                    // },
                    withCredentials: false  
                }).then(function(response) {
                    console.log(response)
                    vm.materialdropdwon = response.data;
                    console.log(vm.materialdropdwon);
                }).catch(function(response) {
                    ResponseCheck.ResponseStatus(response);
                });



        // console.log("jai ho");
        // console.log("params_material")
        // var params_material={};
        // params_material[REQUEST_KEY.REQUEST_TYPE] = "material";
        // var k = constApi.getRequest(params_material, "jyot/user_data");
        // k.then(function(response) 
        //  {
        //    console.log(response)
        //    vm.activity = response.data;
        //    console.log(vm.activity)
        //  });
      }

      vm.get__material(); 

     vm.Submit = function()
      { 
        console.log(type);


                  swal('Success', "Submitted", 'success');  
                  vm.get_activity = [];
                  vm.date = [];
                  vm.Qrganized_By = [];
                  vm.Address = [];
                  vm.City = [];
                  vm.State =[];
                  vm.c =[];
                  vm.file = [];
                  vm.message= [];
                  data ={};
                  vm.value= 0;
          vm.data = 
            {
              "Date_of_event": vm.date,
              "Organized_by": vm.Qrganized_By,
              "venue_address": vm.Address,
              "venue_city": vm.City,
              "venue_state": vm.State,
              "Description": vm.message,
              "Document":  vm.doc  ,
              "activity_type":vm.get_activity,
              "venue_country":vm.c
            }

          // vm.data['Date_of_event']=vm.date;
          // vm.data['Organized_by']=vm.Qrganized_By;
          // vm.data['venue_address']=vm.Address;
          // vm.data['venue_city']=vm.City;
          // vm.data['venue_state']=vm.State;
          // vm.data['Description']=vm.message;
          // vm.data['Document']=vm.doc;
          // vm.data['activity_type']=vm.get_activity;
          // vm.data['venue_country']=vm.c;

     
            
            
            console.log(vm.data)
            var k = constApi.postRequest(vm.data,SMM_URLS.FILL_ACTIVITIES);
            k.then(function(response) 
             {
               if (response.status == code.SUCCESS) 
                {
                  swal('Success', response.data.msg, 'success');  
                  vm.get_activity = [];
                  vm.date = [];
                  vm.Qrganized_By = [];
                  vm.Address = [];
                  vm.City = [];
                  vm.State =[];
                  vm.c =[];
                  vm.file = [];
                  vm.message= [];
                  data ={};
                  vm.value= 0;
                }
             });
         }
        
      }

      // vm.view_previous = function() 
      // {
      //   // params_viewpre[REQUEST_KEY.REQUEST_TYPE] = REQUEST_KEY.VIEW_PRV;
      //   console.log(SMM_URLS.FILL_ACTIVITIES);
      //   var k = constApi.getRequest(" ",SMM_URLS.FILL_ACTIVITIES);
      //   k.then(function(response) 
      //   {
      //      console.log(response)
      //      vm.date_valid = false;
      //      vm.view = response.data;
      //      console.log(vm.view)

             
      //      vm.tableParams = new NgTableParams({}, 
      //        {
      //          counts: [50, 100, 250, 500, 1000],
      //          dataset: vm.view
      //        });
      //    });
      //         vm.show_view = true;
      // }


        
      // vm.callforview = function(row) 
      // {
      //   document.getElementById("focus").focus();
      //     vm.get_activity = [];
      //     vm.date = [];
      //     vm.Qrganized_By = [];
      //     vm.Address = [];
      //     vm.City = [];
      //     vm.State =[];
      //     vm.c =[];
      //     vm.file = [];
      //     vm.message= [];
      //     vm.get__activity();
      //     vm.get_activity =row.Activities_detail__activity_type;
      //     vm.date = new Date(row.Activities_detail__date_of_event);
      //     vm.Qrganized_By = row.Activities_detail__organised_by;
      //     vm.Address = row.Activities_detail__venue_address;
      //     vm.City = row.Activities_detail__venue_city;
      //     vm.State = row.Activities_detail__venue_state;
      //     vm.c = row.Activities_detail__venue_country;
      //     vm.message = row.Activities_detail__description;
      //     vm.date_valid = true;
      //     // vm.data.splice(0, 0, {
      //     //           'id':row.Activities_detail__id 
      //     //       });
      //     vm.data['id'] =row.Activities_detail__id ;
      //     // {
      //     //   'id': row.Activities_detail__id 
      //     // }
      //     console.log( vm.data)
      //     // data.push(row.Activities_detail__id);
      //     vm.value = 1 ;
      //     console.log(vm.value)
      // }

      // vm.callfordelete = function(row) 
      // {
      //      var de= 
      //      {
      //        "id" : row.Activities_detail__id 
      //      };
      //     console.log(de)


      //    swal({
      //         title: "Are you sure?",
      //         text: "All selected attributes will be deleted !!",
      //         type: "warning",
      //         showCancelButton: true,
      //         confirmButtonClass: "btn-danger",
      //         confirmButtonText: "Yes, Delete it!",
      //         cancelButtonText: "No, cancel !",
      //         closeOnConfirm: true,
      //         closeOnCancel: true
      //       },
      //       function(isConfirm) {
      //         if (isConfirm) {
      //            var de= 
      //             {
      //               "id" : row.Activities_detail__id 
      //               };
      //           var k = constApi.deleteRequest(de,SMM_URLS.FILL_ACTIVITIES);
      //            k.then(function(response) 
      //             {
      //              if (response.status == code.SUCCESS)
      //               {
      //                 var toast = toastr['success'](response.data.msg , '', {
      //                    iconClass: 'toast-' + 'success' + ' ' + 'bg-' + 'success'
      //                 });
      //               vm.view_previous();
      //                }
      //             });

      //         }
      //          else {
      //           // swal("Attributes Not Deleted");
      //           var toast = toastr['error']("Attributes Not Deleted" , '', {
      //                   iconClass: 'toast-' + 'error' + ' ' + 'bg-' + 'error'
      //               });
      //              }
      //          });
      // }    
     
  // }
})();
