(function() {
  $(document).ready(function() {
    var windowHeight;
    (function() {
      var Carousel;
      Carousel = {
        init: function() {
          this.image = 'img';
          this.transitionTime = 800;
          $(this.image + "[class~='active']").fadeIn(this.transitionTime);
          this.$nextButton = $('.carousel-arrow');
          return this.eventRouter();
        },
        eventRouter: function() {
          return this.$nextButton.on("click", $.proxy(this.event, this));
        },
        event: function(event) {
          var $i;
          event.preventDefault();
          this.dataObject = $(event.target).data();
          this.$carousel = this.dataObject['carousel'];
          $i = $(this.$carousel).find(this.image + '.active').index();
          this.images().eq($i).removeClass('active');
          this.images().eq($i).fadeOut(this.transitionTime);
          if (this.images().length === $i + 1) {
            $i = -1;
          }
          this.images().eq($i + 1).fadeIn(this.transitionTime);
          return this.images().eq($i + 1).addClass('active');
        },
        images: function() {
          return $(this.$carousel).find(this.image);
        }
      };
      return Carousel.init();
    })();
    windowHeight = $(window).height();
    $('#about').css('height', windowHeight);
    $('#projects-link').off('click').on('click', function() {
      return $("body").finish().animate({
        scrollTop: $('#projects').offset().top - 90
      }, 1000);
    });
    return $('#contact-link').off('click').on('click', function() {
      return $("body").finish().animate({
        scrollTop: $('footer').offset().top
      }, 1000);
    });
  });

}).call(this);
