
$(document).ready(function () {
  loadItems();
  
  function loadItems(list) {
    $.ajax({
      method: "GET",
      url: "/api/to_dos",
      success: function (list) {
        renderLists(list);
      }
    })
  }

  function renderLists(list) {
    //$('#category-block').empty();
    list.forEach(function (item) {
      console.log("item:", item)
      let $span = createToDoItem(item, item.id);
      $('.list-group').append($span);
    })
  };

  // function createToDoItem(key) {
  //   let $span = $('<span>', { ondrop: "drop(event)", ondragover: "allowDrop(event)" })
  //   let check = $('<input>', { type: 'checkbox', class: 'form-check-input', id: 'exampleCheck1' });
  //   let item = $('<tt>').text(key.name)
  //   let icon1 = $('<i>', { id: "icons", class: "fas fa-utensils my-icon", });
  //   let icon2 = $('<i>', { id: "icons", class: "fas fa-book-open my-icon" });
  //   let icon3 = $('<i>', { id: "icons", class: "fas fa-box-open my-icon" });
  //   let icon4 = $('<i>', { id: "icons", class: "fas fa-video my-icon" });
  //   let $liItem = $('<li>', { id: key.id, class: "list-group-item" });
  //   let deleteBtn = $('<button>').addClass("btn btn-info btn-sm");
  //   $liItem.append(check, item, icon1, icon2, icon3, icon4, deleteBtn);
  //   $span.append($liItem);
  //   let $category = $('#' + key.category);
  //   $category.append($span); //if restaurants, books, products, movies is passed in it will add it here

  function createToDoItem(key) {
    let $span = $('<span>')
    let check = $('<input>', { type: 'checkbox', class: 'form-check-input', id: 'exampleCheck1' });
    let item = $('<tt>').text(key.name)
    let deleteBtn = $('<button>').text('DELETE').addClass("btn btn-info btn-sm").attr("id", "delbtn");
    let icon1 = $('<i>', { id: "icons", class: "fas fa-utensils my-icon", });
    let icon2 = $('<i>', { id: "icons", class: "fas fa-book-open my-icon" });
    let icon3 = $('<i>', { id: "icons", class: "fas fa-box-open my-icon" });
    let icon4 = $('<i>', { id: "icons", class: "fas fa-video my-icon" });
    let $liItem = $('<li>', { id: key.id, class: "list-group-item" });
    $liItem.append(check, item, deleteBtn, icon1, icon2, icon3, icon4);
    $span.append($liItem);
    let $category = $('#' + key.category);
    $category.append($span); //if restaurants, books, products, movies is passed in it will add it here

    $(`#${key.id} > #icons.fa-utensils`).click(function () {
      $(this).parent("id")

      $.ajax({
        method: "PUT",
        url:"/api/editRest",
        data: {id: key.list_id},
        success: function() {
          console.log('click 2')
          location.reload(true);
          loadItems();
        }
      })
      console.log(key.list_id);
    });

      $(`#${key.id} > #icons.fa-book-open`).click(function () {
        $(this).parent("id")
        $.ajax({
          method: "PUT",
          url:"/api/editBook",
          data: {id: key.list_id},
          success: function() {
            location.reload(true);
            loadItems();      
          }
        })
      });

      $(`#${key.id} > #icons.fa-box-open`).click(function () {
        $(this).parent("id")
        $.ajax({
          method: "PUT",
          url:"/api/editProd",
          data: {id: key.list_id},
          success: function() {
            location.reload(true);
            loadItems();
            console.log('click 3')
            
          }
        })
      });

      $(`#${key.id} > #icons.fa-video`).click(function () {
        $(this).parent("id")
        $.ajax({
          method: "PUT",
          url:"/api/editMov",
          data: {id: key.list_id},
          success: function() {
            location.reload(true);
            loadItems();
          }
        })
      });

      $(`#${key.id} > #delbtn`).click(function () {
        $(this).parent("id")
  
        $.ajax({
          method: "PUT",
          url:"/api/delete",
          data: {id: key.id},
          success: function() {
            console.log('click 5')
            location.reload(true);
            loadItems();
          }
        })
        console.log(key.list_id);
      });
    return $category;
  };
});

//  function deleteItems(list) {
//    $.ajax({
//      method: "POST",
//      url: "/",
//      success: function (list) {
//        loadItems(list);
//      }
//    })
//  }

//  function totallyDeleteSomethingForRealsies(item){
//    return new Promise(function(resolve) {
//      setTimeout(resolve, 2000);
//    });
//  }
// //DELETE BUTTON
//   $(document).on('click', '#delete.btn', function() {
//     totallyDeleteSomethingForRealsies($(this).data('delete-id'))
//       .then(function(){
//         $(this).parent().remove();
//       })


// });

//CHANGE CATEGORY

// function updateRestaurantItem(item) {
//   var value = $('#list-group-item').find('attributes.value.value');
//   console.log(value.value);


// }



// $('#icons').click('.fa-utensils', function() {
//   console.log('clicked');
//  updateRestaurantItem()
// //  $.ajax({
// //    method: "POST",
// //    url: "/api/edit",
// //    success: function (){
// //      loaditems();
// //    }
// //  });
// })


//$(document).on('click', '#icons.fa-book-open', function() {
//  updateBookItem()
//  $.ajax({
//    method: "GET",
//    url: "/",
//    success: function (){
//      loadItems();
//    }
//  });
//  $('<li>').attr('id', 'books');
//})
//
//$(document).on('click', '#icons.fa-box-open', function() {
//  updateProductItem()
//  $.ajax({
//    method: "GET",
//    url: "/",
//    success: function (){
//      loadItems();
//    }
//  });
//  $(this).attr('id', 'products');
//})








