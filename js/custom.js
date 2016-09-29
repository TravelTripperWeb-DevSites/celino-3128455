 
$(document).ready(function() { 
  $("#roomslide").carousel();
 $("#owl-deals, #owl-rooms").owlCarousel({
            items : 3,
            loop: true,
            nav:true,
            navText: [  "<span class='gold-arrow-left'> <img src='/images/arrow-gold-left.png'> </span> ", " <span class='gold-arrow-right'><img src='/images/arrow-gold-right.png'> </span>" ], 
            lazyLoad : true, 
            autoplay:false,
             responsive:{
		        0:{
		            items:1
		        }, 
		        668:{
		            items:2
		        },
		        1000:{
		            items:3
		        }
		    }
    });

  
    // Hide all the room elements in the DOM that have a class of "box"
    $('.box').hide(); 
    // Make sure all the elements with a class of "about-building" are visible and bound
    // with a click event to toggle the "box" state
    $('.about-building').each(function() {
        $(this).show(0).on('click', function(e) {
            // This is only needed if your using an anchor to target the "box" elements
            e.preventDefault(); 
            // Find the next "box" element in the DOM 
            $(this).find('i').toggleClass('fa-long-arrow-down').toggleClass('fa-long-arrow-up');
             
             $(this).closest('.whiteBg').find('.box').slideToggle('fast');
        });
    });
 
  
  
}); //end of jquery ready state
 
var map;
var mapstyle = [
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "weight": "3.36"
            },
            {
                "color": "#898989"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "gamma": "1.03"
            },
            {
                "weight": "0.81"
            },
            {
                "color": "#009414"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#FBFCF4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "2.51"
            },
            {
                "hue": "#00ff03"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E60003"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#FFED00"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#D41C1D"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#002FA7"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#BF0000"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#2c2840"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "invert_lightness": true
            },
            {
                "gamma": "9.50"
            },
            {
                "lightness": "1"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station.bus",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#E4F7F7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]

    }
];
function initialize() {
  var myLatlng = new google.maps.LatLng(25.814141, -80.122839);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    scrollwheel: false,
    disableDefaultUI: true,
     styles: mapstyle 
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  map.setCenter(new google.maps.LatLng(25.814141, -80.122839));
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: '/images/loc.png',
    title: 'Celino South Beach'
  });
  
}
function initializehome() {
  var myLatlng = new google.maps.LatLng(25.814141, -80.122839);
  var mapOptions = {
    zoom: 16,
    center: myLatlng,
    scrollwheel: false,
    disableDefaultUI: true,
     styles: mapstyle 
  };
  map1 = new google.maps.Map(document.getElementById('map-home'),
      mapOptions);
  map.setCenter(new google.maps.LatLng(25.814141, -80.122839));
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map1, 
    title: 'Celino South Beach'
  });
  
}
google.maps.event.addDomListener(window, 'load', initialize);
google.maps.event.addDomListener(window, 'load', initializehome);
/// eof map //// 
 
    $('.loc-link').click(function(){ 
      var mapPanel = $('#right-panel');
      mapPanel.html('');
      var directionsDisplay = new google.maps.DirectionsRenderer;
      var directionsService = new google.maps.DirectionsService;
      var start = $(this).attr('data-start');
      var end =   $(this).attr('data-end'); 
      directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
       setTimeout(function(){
              var map = new google.maps.Map(document.getElementById('map-location'), {
                zoom: 12,
                center: {lat: 25.814141, lng: -80.122839}
              });

              directionsDisplay.setMap(map);
              
              directionsDisplay.setPanel(document.getElementById('right-panel'));
             
              var control = document.getElementById('floating-panel');
              control.style.display = 'block';
              map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
         }, 1000);
    }) ; 
//end direction

 smoothScroll.init({
            offset:100,
  });
        
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}



$(window).load(function() {
        function resizeImage(){
          img.css({'height': el.height(), 'width': el.width()/2});
        }
        
        if (window.matchMedia('(min-width: 992px) and (max-width: 1520px)').matches) {
            $(window).resize(function() {
              resizeImage();
            });
            
            var el = $(".col-2-equal");
            var img = $(".col-2-equal .img-responsive");
            resizeImage();
        } 

    var hash = location.hash.replace('#',''); 
        if(hash != ''){  
        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 89 +"px"
        },500, 'swing'); 
       } 
        
});

$(function(){
  var prev;    

  $('.amenlist p').hover(function(){
  prev = $(this).text();
      $(this).text("VIEW MORE INFO");
  }, function(){
      $(this).text(prev)
  });
});

 
 