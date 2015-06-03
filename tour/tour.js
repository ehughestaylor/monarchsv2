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
var playersFunction =function(){
    // $('#player-container').hide();

}

$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  animatePoints();
  playersFunction();

});