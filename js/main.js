    $(window).load(function() {
        // Animate loader off screen
        // $(".se-pre-con").fadeOut("slow");
    });


  var animatePoints = function(){
    var waypoint = new Waypoint({
    element: document.getElementById('slider'),
    handler: function() {
      $('#nav').toggleClass('sticky');
    }
  });
}
 $(document).ready(function(){
    
  $(".dropdown-button").dropdown();
  $(".button-collapse").sideNav();
  $('.slider').slider({full_width: true});
  animatePoints();
});
        