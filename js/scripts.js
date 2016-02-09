$(document).ready(function()  {

  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });

  $(".clickable").click(function() {
    $(".meow").toggle();
    $(".nomeow").toggle();
  });

  $("#inverted").click(function() {
    $("img").removeClass("invert");
    $("img").addClass("invert");
  });

});
