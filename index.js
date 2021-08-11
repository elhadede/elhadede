$(document).ready(function() {
  var light="#3E2C41";
  var dark="white";
  $("#darkmode").on('click',function(){
    dark = [light, light = dark][0];
    $("body").css("--color1",dark);
  });
  $('form').on('submit', function(e){
    e.preventDefault();
    var values = {};
    $.each($(this).serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
  });
});
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('#up').css("opacity","1");
  } else {
    $('#up').css("opacity","0");
  }
});