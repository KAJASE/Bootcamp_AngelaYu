$(document).keydown(function(e) {
  $("button").text(e.key);
});

$("h1").addClass("big-size");

$("button").on("click", function() {
  $("h1").animate({opacity: 0.5});
});