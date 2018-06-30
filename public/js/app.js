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


  function createToDoItem(key) {
    console.log('createToDoItem', key);
    let $span = $('<span>', {ondrop:"drop(event)", ondragover:"allowDrop(event)"})
    let check = $('<input>', {type:'checkbox', class:'form-check-input', id:'exampleCheck1'});
    let item = $('<tt>').text(key.name)
    let edit = $('<button>').text('EDIT').addClass('btn btn-info btn-sm');
    let deleteButton = $('<button>', {text: 'DELETE', id:"delete", class:'btn btn-info btn-sm'});
    let $liItem = $('<li>', {class:"list-group-item", draggable:'true', ondragstart:"drag(event)"});
    $liItem.append(check, item, edit, deleteButton);
    $span.append($liItem);
    let $category = $('#restaurants');
    $category.append($span); //if restaurants, books, products, movies is passed in it will add it here

    return $category;
  }

});;


//DELETE BUTTON

  $(document).on('click', '#delete.btn', function() {
    $(this).parent().remove();
});



// DRAG AND DROP FUNCTIONALITY
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}





