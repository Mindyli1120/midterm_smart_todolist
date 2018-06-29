$(document).ready(function () {

   $('#navbar button.createitem').on('click', function () {
       console.log("clicked")
    $('#create-form.container').slideToggle('slow', function () {
        console.log("clicked");
    })
})
});