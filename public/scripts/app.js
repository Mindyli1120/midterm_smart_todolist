$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;

  // $('button').click(function(e) {

  // })


  // What should we do to read the two tables together???
  $.ajax({
    method: "GET",
    url:"/api/to_dos" //look into the toDoList.js for the database as supposed
  }).done((to_dos) => {
    for (to_do of to_dos) {
      $("<li>").text(to_dos.name).appendTo($("body"));
    }
  })
  


});

