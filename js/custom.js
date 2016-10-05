 
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

 
var markers = [];
/* An InfoBox is like an info window, but it displays
 * under the marker, opens quicker, and has flexible styling.
 * @param {GLatLng} latlng Point to place bar at
 * @param {Map} map The map on which to display this InfoBox.
 * @param {Object} opts Passes configuration options - content,
 * offsetVertical, offsetHorizontal, className, height, width
 */

function InfoBox(opts) {
    google.maps.OverlayView.call(this);
    this.latlng_ = opts.latlng;
    this.map_ = opts.map;
    this.content = opts.content;
    this.offsetVertical_ = -135;
    this.offsetHorizontal_ = 5;
    this.height_ = 100;
    this.width_ = 186;
    var me = this;
    this.boundsChangedListener_ =
        google.maps.event.addListener(this.map_, "bounds_changed", function () {
            return me.panMap.apply(me);
        });
    // Once the properties of this OverlayView are initialized, set its map so
    // that we can display it. This will trigger calls to panes_changed and
    // draw.
    this.setMap(this.map_);
}
/* InfoBox extends GOverlay class from the Google Maps API
 */
InfoBox.prototype = new google.maps.OverlayView();
/* Creates the DIV representing this InfoBox
 */
InfoBox.prototype.remove = function () {
    if (this.div_) {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};
/* Redraw the Bar based on the current projection and zoom level
 */
InfoBox.prototype.draw = function () {
    // Creates the element if it doesn't exist already.
    this.createElement();
    if (!this.div_) return;
    // Calculate the DIV coordinates of two opposite corners of our bounds to
    // get the size and position of our Bar
    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.latlng_);
    if (!pixPosition) return;
    // Now position our DIV based on the DIV coordinates of our bounds
    this.div_.style.width = this.width_ + "px";
    this.div_.style.left = (pixPosition.x + this.offsetHorizontal_) + "px";
    this.div_.style.height = this.height_ + "px";
    this.div_.style.top = (pixPosition.y + this.offsetVertical_) + "px";
    this.div_.style.display = 'block';
};
/* Creates the DIV representing this InfoBox in the floatPane. If the panes
 * object, retrieved by calling getPanes, is null, remove the element from the
 * DOM. If the div exists, but its parent is not the floatPane, move the div
 * to the new pane.
 * Called from within draw. Alternatively, this can be called specifically on
 * a panes_changed event.
 */
InfoBox.prototype.createElement = function () {
    var panes = this.getPanes();
    var div = this.div_;
    if (!div) {
        // This does not handle changing panes. You can set the map to be null and
        // then reset the map to move the div.
        div = this.div_ = document.createElement("div");
            div.className = "infobox"
        var contentDiv = document.createElement("div");
            contentDiv.className = "content"
            contentDiv.innerHTML = this.content;
        var closeBox = document.createElement("div");
            closeBox.className = "close";
            closeBox.innerHTML = "x";
        div.appendChild(closeBox);

        function removeInfoBox(ib) {
            return function () {
                ib.setMap(null);
            };
        }
        google.maps.event.addDomListener(closeBox, 'click', removeInfoBox(this));
        div.appendChild(contentDiv);
        div.style.display = 'none';
        panes.floatPane.appendChild(div);
        this.panMap();
    } else if (div.parentNode != panes.floatPane) {
        // The panes have changed. Move the div.
        div.parentNode.removeChild(div);
        panes.floatPane.appendChild(div);
    } else {
        // The panes have not changed, so no need to create or move the div.
    }
}
/* Pan the map to fit the InfoBox.
 */
InfoBox.prototype.panMap = function () {
    // if we go beyond map, pan map
    var map = this.map_;
    var bounds = map.getBounds();
    if (!bounds) return;
    // The position of the infowindow
    var position = this.latlng_;
    // The dimension of the infowindow
    var iwWidth = this.width_ ;
    var iwHeight = this.height_ ; 
    // The offset position of the infowindow
    var iwOffsetX = this.offsetHorizontal_;
    var iwOffsetY = this.offsetVertical_;
    // Padding on the infowindow
    var padX = 40;
    var padY = 40;
    // The degrees per pixel
    var mapDiv = map.getDiv();
    var mapWidth = mapDiv.offsetWidth;
    var mapHeight = mapDiv.offsetHeight;
    var boundsSpan = bounds.toSpan();
    var longSpan = boundsSpan.lng();
    var latSpan = boundsSpan.lat();
    var degPixelX = longSpan / mapWidth;
    var degPixelY = latSpan / mapHeight;
    // The bounds of the map
    var mapWestLng = bounds.getSouthWest().lng();
    var mapEastLng = bounds.getNorthEast().lng();
    var mapNorthLat = bounds.getNorthEast().lat();
    var mapSouthLat = bounds.getSouthWest().lat();
    // The bounds of the infowindow
    var iwWestLng = position.lng() + (iwOffsetX - padX) * degPixelX;
    var iwEastLng = position.lng() + (iwOffsetX + iwWidth + padX) * degPixelX;
    var iwNorthLat = position.lat() - (iwOffsetY - padY) * degPixelY;
    var iwSouthLat = position.lat() - (iwOffsetY + iwHeight + padY) * degPixelY;
    // calculate center shift
    var shiftLng =
        (iwWestLng < mapWestLng ? mapWestLng - iwWestLng : 0) +
        (iwEastLng > mapEastLng ? mapEastLng - iwEastLng : 0);
    var shiftLat =
        (iwNorthLat > mapNorthLat ? mapNorthLat - iwNorthLat : 0) +
        (iwSouthLat < mapSouthLat ? mapSouthLat - iwSouthLat : 0);
    // The center of the map
    var center = map.getCenter();
    // The new map center
    var centerX = center.lng() - shiftLng;
    var centerY = center.lat() - shiftLat;
    // center the map to the new shifted center
    map.setCenter(new google.maps.LatLng(centerY, centerX));
    // Remove the listener after panning is complete.
    google.maps.event.removeListener(this.boundsChangedListener_);
    this.boundsChangedListener_ = null;
};
 var markers = []; // makers array
function initialize1() {
   
  
    var myOptions = { // map settings
        zoom: 13,
        center: new google.maps.LatLng(25.814141, -80.122839),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        sensor: 'true', 
        scaleControl: false,
        scrollwheel: false,
        styles: mapstyle 
    }
    var map = new google.maps.Map(document.getElementById("map-locations"), myOptions);
  
    var data = [ // map data
      {
        'id':1,
        'content':'<strong>EL TUCÁN</strong><p>1111 SW 1st Ave Miami, FL 33130</p>',
        'position': {
          'lat':25.7536953,
          'lng':-80.20520239999996
         },
         'pointmrkr': '/images/icons/marker1.png'
      },
      {
        'id':2,
        'content':'<strong>WYNWOOD</strong> ',
        'position': {
          'lat':25.8042441,
          'lng':-80.19891860000001
         },
         'pointmrkr': '/images/icons/marker2.png'
      },
      {
        'id':3,
        'content':'<strong>JOE’S STONE CRAB</strong> <p>11 Washington Ave Miami Beach, FL 33139</p>',
        'position': {
          'lat':25.7820438,
          'lng':-80.13261990000001
         },
         'pointmrkr': '/images/icons/marker3.png'
      },
      {
        'id':4,
        'content':'<strong>BAYFRONT PARK</strong>',
        'position': {
          'lat':25.773099,
          'lng':-80.18732299999999
         },
         'pointmrkr': '/images/icons/marker4.png'
      },
      {
        'id':5,
        'content':'<strong>LITTLE HAVANA</strong>',
        'position': {
          'lat': 25.7776438,
          'lng': -80.23770780000001
         },
         'pointmrkr': '/images/icons/marker5.png'
      },
      {
        'id':6,
        'content':'<strong>MIAMI DESIGN DISTRICT</strong>  ',
        'position': {
          'lat': 25.8134218,
          'lng': -80.19342849999998
         },
         'pointmrkr': '/images/icons/marker6.png'
      },
       {
        'id':7,
        'content':'<strong>Celino South Beach</strong>  ',
        'position': {
          'lat': 25.814141,
          'lng': -80.122839
         },
         'pointmrkr': '/images/loc.png'
      },
    ]
      
    for (var i = 0; i < data.length; i++) { 
      var current = data[i];
  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(current.position.lat, current.position.lng),
        map: map,
        icon: current.pointmrkr,
        content: current.content
      });
  
      markers.push(marker);
  
      google.maps.event.addListener(markers[i], "click", function (e) {
        var infoBox = new InfoBox({
            latlng: this.getPosition(),
            map: map,
            content: this.content
        });
      });
    }
 
}

jQuery(document).ready(function(){
    google.maps.event.addDomListener(window, 'load', initialize);
    google.maps.event.addDomListener(window, 'load', initializehome);
    google.maps.event.addDomListener(window, 'load', initialize1);
});


/// eof map ////  
function myMap(id){ 
        google.maps.event.trigger(markers[id], 'click');
    }



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

 
$(function() { 
    var lat = 25.814141;
    var lon = -80.122839;

    
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?city=Miami Beach, FL&lat=" + lat + "&lon=" + lon + "&appid=8b70e4f5b31a7365e98298fafc182121", function(data) {

      // Our Data
      var icon = data.weather[0].icon;
      var icon_replace = $(".weather-app_main__information--icon").attr("src");
      $(".weather-app_main__information--city").html(data.name);
      var toCels =Math.round(((data.main.temp) - 273.15));
      var toFar = Math.round((data.main.temp)* (9 / 5) - 459.67);
      var description = data.weather[0].description;
      var cDescription = description.charAt(0).toUpperCase() + description.slice(1);

      // Apply Data To Page
      //$(".weather-app_main__information--icon").attr("src", icon_replace.replace("#", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/217538/" + icon + ".png"));
      $(".cel").html(toCels + "°C");
      $(".fahr").html(toFar + "°F");
    }) 
});