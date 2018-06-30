$(document).ready(function () {
  loadItems();

  function loadItems(list) {
    $.ajax({
      method: "GET",
      url: "/api/users",
      success: function (list) {
        renderLists(list);
        console.log("list 1", list)
      }
    })
  }

  function renderLists(list) {
    console.log('render lists', list);
      list.forEach(function (item) {
      console.log("item:", item)
      let $span = createToDoItem(item, item.id);
      $('.list-group').append($span);
    })
  };


  function createToDoItem(key, id) {
    console.log('createToDoItem', key);
    let $span = $('<span>')
    let check = $('<input>', {type:'checkbox', class:'form-check-input', id:'exampleCheck1'});
    let item = $('<tt>').text(key.name)
    let edit = $('<button>').text('EDIT').addClass('btn btn-info btn-sm');
    let deleteButton = $('<button>').text('DELETE').addClass('btn btn-info btn-sm');
    let $liItem = $('<li>').addClass('list-group-item');
    $liItem.append(check, item, edit, deleteButton);
    $span.append($liItem);
    let $category = $('#movie');
    $category.append($span); //if restaurants, books, products, movies is passed in it will add it here

    return $category;
  }

});;

// $('button').click(function(e) {

// })


// What should we do to read the two tables together???
$.ajax({
method: "GET",
url: "/api/to_dos" //look into the toDoList.js for the database as supposed
}).done((to_dos) => {
for (to_do of to_dos) {
$("<li>").text(to_dos.name).appendTo($("body"));
}
})


