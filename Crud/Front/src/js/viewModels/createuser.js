define(["Services/apiServices", "knockout"], function (apiService, ko) {
  function CreateUserViewModel() {
    var self = this;

    self.users = ko.observableArray([]);
    self.allUserData = ko.observableArray([]);

    self.connected = function () {
      apiService.createUsers()
        .then(function (res) {
          console.log(res);
          self.users(res);
          self.allUserData(res);
        })
        .catch(function (err) {
          console.log(err);
        });
    };

    document.addEventListener("DOMContentLoaded", function () {
      document
        .getElementById("btnCreateUsers")
        .addEventListener("click", self.connected);

      document
        .getElementById("createUserForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          var name = document.getElementById("name").value;
          var email = document.getElementById("email").value;

          var user = {
            name: name,
            email: email,
          };

          self.connected(user);
        });
    });
  }

  var createUserViewModel = new CreateUserViewModel();
  ko.applyBindings(createUserViewModel);

  return CreateUserViewModel;
});
