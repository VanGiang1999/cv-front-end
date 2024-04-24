$(document).ready(function () {
    $('.cv-list-skill').addClass('owl-carousel').owlCarousel({
        items: 20,
        loop: true,
        autoplay: true,
        margin:20,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navigation: true,
        responsiveClass: true,
        responsiveRefreshRate: true,
        responsive: {
          0: {
            items: 1
          },
          536: {
            items: 2.5
          },
          1170: {
            items: 5.5
          }
        }
      });
});