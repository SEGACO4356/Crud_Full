define(["jquery"],
function($){

  const apiServiceFunction = function(apiUrl){
        return{
         getUsers: function(){
            return  $.ajax({
                type: 'GET',
                url: 'http://localhost:4000/getusers',
                dataType: 'json'    
            }).fail(function(jqXHR, textStatus, errorThrown){
               console.log("Error en Get Users", errorThrown);
            })
         },
         getUsersById: function(){
            return  $.ajax({
                    type:'GET',
                    url: 'http://localhost:4000/usersid/:id',
                    datatype: 'json'
                }).fail(function(jqXHR, textStatus, errorThrown){
                  console.log('Error en Get users By Id', errorThrown);
                })
         },
         createUsers: function(){
            return   $.ajax({
                type: 'POST',
                url: 'http://localhost:4000/createusers',
                datatype: 'json'
            }).fail(function(jqXHR, textStatus, errorThrown){
               console.log('Error en Create users', errorThrown);
             })
         },
         updateUsers: function(){
            return  $.ajax({
                type: 'PUT',
                url: 'http://localhost:4000/updateusers/:id',
                datatype:'json'
            }).fail(function(jqXHR, textStatus, errorThrown){
               console.log('Error en Update users', errorThrown);
             })
         },
         deleteUsers: function(){
            return   $.ajax({
                type: 'DELETE',
                url: 'http://localhost:4000/deleteusers/:id',
                datatype: 'json'
            }).fail(function(jqXHR, textStatus, errorThrown){
               console.log('Error en Delete users', errorThrown);
             })
         }
    };
 };

 return apiServiceFunction;
 
});