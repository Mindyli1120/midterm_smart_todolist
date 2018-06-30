$(document).ready(function () {
  loadItems();

  function loadItems(list) {
    $.ajax({
      method: "GET",
      url: "/api/users",
      success: function (list) {
        renderLists(list);
      }
    })
  }

  function renderLists(list) {
      list.forEach(function (item) {
      console.log("item:", item)
      let $span = createToDoItem(item, item.id);
      $('.list-group').append($span);
    })
  };


  function createToDoItem(key) {
    let $span = $('<span>', {ondrop:"drop(event)", ondragover:"allowDrop(event)"})
    let check = $('<input>', {type:'checkbox', class:'form-check-input', id:'exampleCheck1'});
    let item = $('<tt>').text(key.name)
    let deleteButton = $('<button>', {text: 'DELETE', id:"delete", class:'btn btn-info btn-sm', data:(item.id)});
    let icon1 = $('<i>', {id:"icons", class:"fas fa-utensils"});
    let icon2 = $('<i>', {id:"icons", class:"fas fa-book-open"});
    let icon3 = $('<i>', {id:"icons", class:"fas fa-box-open"});
    let icon4 = $('<i>', {id:"icons", class:"fas fa-video"});
    let $liItem = $('<li>', {id: "list-group-item", class:"list-group-item", draggable:'true', ondragstart:"drag(event)"});
    $liItem.append(check, item, deleteButton, icon1, icon2, icon3, icon4);
    $span.append($liItem);
    let $category = $('#' + key.category);
    $category.append($span); //if restaurants, books, products, movies is passed in it will add it here

    return $category;
  }

});;

 function deleteItems(list) {
   $.ajax({
     method: "POST",
     url: "/",
     success: function (list) {
       loadItems(list);
     }
   })
 }

 function totallyDeleteSomethingForRealsies(item){
   return new Promise(function(resolve) {
     setTimeout(resolve, 2000);
   });
 }
//DELETE BUTTON
  $(document).on('click', '#delete.btn', function() {
    totallyDeleteSomethingForRealsies($(this).data('delete-id'))
      .then(function(){
        $(this).parent().remove();
      })


});

//CHANGE CATEGORY

$(document).on('click', '#icons.fa-utensils', function() {
  updateRestaurantItem()
  $.ajax({
    method: "GET",
    url: "/",
    success: function (){
      return;
    }
  });
  $('<li>').attr('id', 'restaurants');
})

$(document).on('click', '#icons.fa-book-open', function() {
  updateBookItem()
  $.ajax({
    method: "GET",
    url: "/",
    success: function (){
      loadItems();
    }
  });
  $('<li>').attr('id', 'books');
})

$(document).on('click', '#icons.fa-box-open', function() {
  updateProductItem()
  $.ajax({
    method: "GET",
    url: "/",
    success: function (){
      loadItems();
    }
  });
  $(this).attr('id', 'products');
})

$(document).on('click', '#icons.fa-video', function() {
  updateMovieItem()
    $.ajax({
      method: "GET",
      url: "/",
      success: function (){
        loadItems();
      }
    });
})

function updateMovieItem(){
  console.log("THIS", $(this));
  console.log("LINE ITEM", $(this).closest('li'));
  console.log("ID", $(this).closest('li').id);
  $(this).closest('li').attr('id', 'movie');
  console.log("MOVIE ID", $(this).closest('li').attr('id', 'movie'));
  }

function updateRestaurantItem(){
  $(this).closest('li').attr('id', 'restaurants');
  console.log("RESTAURANT ID", $(this).closest('li').attr('id', 'restaurants'));
  }

function updateBookItem(){
  $(this).closest('li').attr('id', 'books');
  console.log("BOOK ID", $('<li>').attr('id', 'books'));
  }

function updateProductItem(){
  $(this).closest('li').attr('id', 'products');
  console.log("PRODUCT ID", $(this).closest('li').attr('id', 'products'));
  }







