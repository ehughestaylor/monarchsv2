    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").fadeOut("slow");
    });


  var animatePoints = function(){
    var waypoint = new Waypoint({
    element: document.getElementById('nav'),
    handler: function() {
      $('#nav').toggleClass('sticky');
    }
  });
}
 $(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.slider').slider({full_width: true});
  animatePoints();
});
        