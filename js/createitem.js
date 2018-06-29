$(document).ready(function () {
    loadItems();
    
    function createToDoItem(item) {
        let $span = $('<span>')
        let check = $('<input>').attr('id', 'exampleCheck1').addClass('form-check-input');
        let item = $('<tt>').text(user.list.item)
        let edit = $('<button>').text('EDIT').addClass('btn btn-info btn-sm');
        let deleteButton = $('<button>').text('DELETE').addClass('btn btn-info btn-sm');
        let $liItem = $('<li>').addClass('list-group-item');
        $liItem.append(check, item, edit, deleteButton);
        $span.append($liItem);

        return $span;
    }

    function renderLists(list) {
        $('.list-group').empty()
        list.forEach(function (item) {
            let $span = createToDoItem(item);
            $('list-group').append($span);
        })
    };

    function loadItems() {
        $.ajax({
            url: '/',
            method: 'GET',
            success: function (lists) {
                renderLists(list);
            }
        })
    }
})