define([
  'Services/apiServices',
  'knockout'
], function (apiService, ko) {

  function GetUserViewModel(){

    var self = this;

    self.users = ko.observableArray([]);
    self.allUserData = ko.observableArray([])


    self.connected = function(){
      apiService().getUsers()
      .then(function(res){
        console.log(res);
        self.users(res);
        self.allUserData(res)
      })
      .catch(function(err){
        console.log(err); 
      });
    };

    document.addEventListener('DOMContentLoaded', function(){

      document.getElementById('btnGetUsers').addEventListener('click', self.connected());
      console.log(self.allUserData());

    })


  }
  return GetUserViewModel;
});
