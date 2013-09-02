$(document).ready(function() {
  var count = 1;
    $("#search").keydown(function(key) {
       if (key.keyCode == 13 && count == 1) {
         count += 1;
         $(".jumbotron").append('<div class = "alert"><h3>Sorry!</h3><p>Help us get on our feet, fund us at....</p></div>');
       }
		});
  $(document).click(function() {
    count = 1;
    $(".alert").remove();
  });
});