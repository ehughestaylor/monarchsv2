  var animatePoints = function(){
    var waypoint = new Waypoint({
      element: document.getElementById('anderson'),
      handler: function() {
        $('#philly').fadeIn('slow');
      }
    });
    var waypoint = new Waypoint({
      element: document.getElementById('nav'),
      handler: function() {
        $('#est').fadeIn('slow');
      }
    });
}



  $(window).load(function() {
      // Animate loader off screen
      $(".se-pre-con").fadeOut("slow");
  });

 $(document).ready(function(){
  
  $(".dropdown-button").dropdown();

  animatePoints();
  $(".button-collapse").sideNav();
  $('.parallax').parallax();
});
        