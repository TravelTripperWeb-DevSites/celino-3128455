/*
   Settings and other scripts
   ========================================================================== */
//scroll change header style
$(function() {

    var header = $("#home-nav");
    $(window).on("load resize scroll",function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 170) {
          header.removeClass('top-nav--flower').addClass("top-nav--gradient");
          header.css({'top':'','bottom':''});
        } else {
          var scrollTopPx = $(window).scrollTop();
          header.css({'top': '-'+scrollTopPx+'px'});
          header.removeClass("top-nav--gradient").addClass('top-nav--flower');
        }
    });

    //show / hide menu items on hamburger click
    $("#toggle-menu").click(function(e){
      e.preventDefault();
      $("#menuItems").css("display", "flex").hide().fadeIn();
    });
    $("#closeMenu").click(function(e){
      e.preventDefault();
      $("#menuItems").fadeOut();
    });

    //offers slick slider
    $("#deals-offers").slick({
      slidesToShow: 3,
      responsive: [{
        breakpoint: 1024,
          settings: {
            slidesToShow: 2
          }
        },
        {
        breakpoint: 600,
        settings: {
          slidesToShow: 1
        }
      }]
    });


});

$(document).ready(function() {
  // Map
  if ($("#map").length > 0) {
    var mapOptions = {
      hotelTitle: '<h4>CELINO HOTEL</h4>',
      hotelAddress: '<p><a href="#" rel="nofollow" target="_blank">640 Ocean Drive, Miami Beach, Florida 33139.</a></p>',
      hotelLat: 25.776360,
      hotelLong: -80.131820,
      hotelMarker: '/assets/images/leaflet/marker.png',
      markerSize: [88, 99],
      zoom: 16,
      maxZoom: 20,
      showPopup: true,
      fitBounds: true,
      getDirectionBtn: true,
      TileStyle: 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png'
    };
    $('#map').leafMap(mapOptions);
  }
});
