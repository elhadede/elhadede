$(document).ready(function() {
  $('form').on('submit', function(e){
    e.preventDefault();
    var values = {};
    $.each($(this).serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    console.log(values);
  });
});