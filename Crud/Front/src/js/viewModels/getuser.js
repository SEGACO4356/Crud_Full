define([
  'Services/apiServices',
  'knockout'
], function (apiService, ko) {

  function GetUserViewModel(){

    var self = this;

    self.users = ko.observableArray([])

    self.connected = function(){
      apiService().res
      .then(function(res){
        console.log(res);
        self.users(res  )

      }).catch(function(err){
        console.log(err); 
      });
    }


  }
  return GetUserViewModel;
});