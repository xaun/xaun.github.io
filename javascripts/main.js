(function() {
  $(document).ready(function() {
    var windowHeight;
    windowHeight = $(window).height();
    $('#about').css('height', windowHeight);
    $('#projects-link').off('click').on('click', function(e) {
      return $("body").finish().animate({
        scrollTop: $('#projects').offset().top - 90
      }, 1000);
    });
    return $('#contact-link').off('click').on('click', function(e) {
      return $("body").finish().animate({
        scrollTop: $('footer').offset().top
      }, 1000);
    });
  });

}).call(this);
