$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});


var animatePoints = function(){
  var waypoint = new Waypoint({
    element: document.getElementById('nav'),
    handler: function() {
      $('.team-btn').fadeIn('slow');
    }
  });
}

$(document).ready(function(){
  $(".dropdown-button").dropdown();
  
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('.modal-trigger').leanModal();
  animatePoints();
  playersFunction();

});