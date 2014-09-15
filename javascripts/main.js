(function() {
  $(document).ready(function() {
    var $carouselContainer, $carouselImages, $carousels, $windowHeight, $windowWidth;
    (function() {
      var Carousel;
      Carousel = {
        init: function() {
          this.image = 'img';
          this.transitionTime = 500;
          $(this.image + "[class~='active']").fadeIn(this.transitionTime);
          this.$nextButton = $('.carousel').children('img');
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
    $windowHeight = $(window).height();
    $windowWidth = $(window).width();
    $carouselImages = $('.carousel').children('img');
    $carouselContainer = $('.carousel-container');
    $carousels = $('.carousel');
    $carouselImages.mousedown(function() {
      return false;
    });
    $('#about').css('height', $windowHeight);
    $('#projects-link').on('mouseover', function() {
      $('#storebuilder-link').fadeIn();
      $('#threedee-link').fadeIn();
      $('#cloudchaser-link').fadeIn();
      return $('#projects-link > li').css('border-bottom', '3px solid black');
    });
    $('nav').on('mouseleave', function() {
      $('#storebuilder-link').fadeOut();
      $('#threedee-link').fadeOut();
      $('#cloudchaser-link').fadeOut();
      return $('#projects-link > li').css('border-bottom', '');
    });
    $('.btn-5').on('click', function(event) {
      var $divReveal, dataObject;
      event.preventDefault();
      debugger;
      if ($(event.target).text() === 'More Info') {
        dataObject = $(event.target).data();
        $divReveal = dataObject['divReveal'];
        $($divReveal).show();
        return $(event.target).text('Less Info');
      } else {
        dataObject = $(event.target).data();
        $divReveal = dataObject['divReveal'];
        $($divReveal).hide();
        return $(event.target).text('More Info');
      }
    });
    $('#storebuilder-link').off('click').on('click', function() {
      return $("body").finish().animate({
        scrollTop: $('#storebuilder-description').offset().top - 90
      }, 1000);
    });
    $('#threedee-link').off('click').on('click', function() {
      return $("body").finish().animate({
        scrollTop: $('#threedee-description').offset().top - 90
      }, 1000);
    });
    $('#cloudchaser-link').off('click').on('click', function() {
      return $("body").finish().animate({
        scrollTop: $('#cloudchaser-description').offset().top - 90
      }, 1000);
    });
    $('#contact-link').off('click').on('click', function() {
      return $("body").finish().animate({
        scrollTop: $('footer').offset().top
      }, 1000);
    });
    $('#phone-icon').on('click', function(event) {
      event.preventDefault();
      return alert('Feel free to contact me on 0410 345 171!');
    });
    if ($windowWidth < 770) {
      $carouselImages.css('width', $windowWidth - 10);
      $carouselContainer.css('width', $carouselImages.width());
      $carousels.css('width', $carouselImages.width());
    } else if ($windowWidth > 700) {
      $carouselImages.css('width', '750px');
    }
    if ($windowWidth < 770) {
      $carouselContainer.css('height', $carouselImages.height() - 3);
      $carousels.css('height', $carouselImages.height() - 3);
    } else if ($windowWidth > 770) {
      $carouselContainer.css('height', '400px');
      $carousels.css('height', '400px');
    }
    return $(window).on('resize', function() {
      $windowWidth = $(window).width();
      if ($windowWidth < 770) {
        $carouselImages.css('width', $(window).width() - 10);
        $carouselContainer.css('height', $carouselImages.height() - 3);
        $carouselContainer.css('width', $carouselImages.width());
        $carousels.css('height', $carouselImages.height() - 3);
        return $carousels.css('width', $carouselImages.width());
      } else if ($windowWidth > 770) {
        $carouselContainer.css('width', '750px');
        $carouselContainer.css('height', '400px');
        $carouselContainer.css('margin', 'auto');
        $carousels.css('width', '750px');
        $carousels.css('height', '400px');
        return $carouselImages.css('width', '750px');
      }
    });
  });

}).call(this);
