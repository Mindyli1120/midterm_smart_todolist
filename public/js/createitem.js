$(document).ready(function () {
  loadItems();

  function createToDoItem(item) {
      console.log('createToDoItem', item);
    let $span = $('<span>')
    let check = $('<input>').attr('id', 'exampleCheck1').addClass('form-check-input');
    let item = $('<tt>').text(item.name)
    let edit = $('<button>').text('EDIT').attr('id, edit').addClass('btn btn-info btn-sm');
    let deleteButton = $('<button>').text('DELETE').addClass('btn btn-info btn-sm');
    let $liItem = $('<li>').addClass('list-group-item');
    $liItem.append(check, item, edit, deleteButton);
    $span.append($liItem);
    let $category = $('#restaurants');
    $category.append($span); //if restaurants, books, products, movies is passed in it will add it here
    return $span;
  }

  function renderLists(list) {
      console.log('render lists', list);
    $('.list-group').empty()
    list.forEach(function (item) {
      let $span = createToDoItem(item);
      $('list-group').append($span);
    })
  };

  function loadItems(list) {
      console.log('load items', list);
    $.ajax({
      url: '/',
      method: 'GET',
      success: function (lists) {
        renderLists(list);
      }
    })
  }

//   function deleteItem(item) {
//   $('#edit.btn').click(function() {
//       $('li').remove();
//   })
//   }

});
