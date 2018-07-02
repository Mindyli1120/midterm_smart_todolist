
$(document).ready(function () {

  //creating new item to the to-do lists
  function createToDoItem(key) {
    let $span = $('<span>')
    let check = $('<input>', { type: 'checkbox', class: 'form-check-input', id: 'exampleCheck1' });
    let item = $('<tt>').text(key.name)
    let deleteBtn = $('<button>').text('DELETE').addClass("btn btn-info-del btn-sm").attr("id", "delbtn");
    let icon1 = $('<i>', { id: "icons", class: "fas fa-utensils my-icon", });
    let icon2 = $('<i>', { id: "icons", class: "fas fa-book-open my-icon" });
    let icon3 = $('<i>', { id: "icons", class: "fas fa-box-open my-icon" });
    let icon4 = $('<i>', { id: "icons", class: "fas fa-video my-icon" });
    let $liItem = $('<li>', { id: key.id, class: "list-group-item" });
    $liItem.append(check, item, deleteBtn, icon1, icon2, icon3, icon4);
    $span.append($liItem);
    let $category = $('#' + key.category);
    $category.append($span); //if restaurants, books, products, movies is passed in it will add it here

    //move the item to a category by click the category icon
    $(`#${key.id} > #icons.fa-utensils`).click(function () {
      $(this).parent("id")

      $.ajax({
        method: "PUT",
        url:"/api/editRest",
        data: {id: key.list_id},
        success: function() {
          console.log('click 2')
          location.reload(true);
          renderLists();
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
            renderLists();     
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
            renderLists();
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
            renderLists();
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
            renderLists();
          }
        })
        console.log(key.list_id);
      });
    return $category;
  };

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
    list.forEach(function (item) {
      console.log("item:", item)
      let $span = createToDoItem(item, item.id);
      $('.list-group').append($span);
    })
  };
  
  loadItems();

});










