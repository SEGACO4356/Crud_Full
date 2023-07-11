define(["jquery"],
function($){

  const apiService = function(){
        return{
         getUsers: function(){
            return  $.ajax({
                type: 'GET',
                url: 'http://localhost:4000/getusers',
                dataType: 'json'    
            })
         },
         getUsersById: function(){
            return  $.ajax({
                    type:'GET',
                    url: 'http://localhost:4000/usersid/:id',
                    datatype: 'json'
                })
         },
         createUsers: function(){
            return   $.ajax({
                type: 'POST',
                url: 'http://localhost:4000/createusers',
                datatype: 'json'
            })
         },
         updateUsers: function(){
            return  $.ajax({
                type: 'PUT',
                url: 'http://localhost:4000/updateusers/:id',
                datatype:'json'
            })
         },
         deleteUsers: function(){
            return   $.ajax({
                type: 'DELETE',
                url: 'http://localhost:4000/deleteusers/:id',
                datatype: 'json'
            })
         }
    };
 };

 return apiService;
 
});