$(document).ready(function() { 
  
 $("#owl-deals").owlCarousel({
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
            400:{
                items:1
            },
		        600:{
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

function initialize() {
  var myLatlng = new google.maps.LatLng(43.159267, -70.622215);
  var mapOptions = {
    zoom: 15,
    center: myLatlng,
    scaleControl: false,
    scrollwheel: false
  };
  map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  map.setCenter(new google.maps.LatLng(43.159511, -70.622113));
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: '/images/icons/marker.png',
    title: 'Anchorage Inn'
  });
  
}

google.maps.event.addDomListener(window, 'load', initialize);
/// eof map ////

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

function initialize1() {
    var markers = []; // makers array
  
    var myOptions = { // map settings
        zoom: 12,
        center: new google.maps.LatLng(43.171115, -70.613723),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        sensor: 'true', 
        scaleControl: false,
        scrollwheel: false
    }
    var map = new google.maps.Map(document.getElementById("canvas-map"), myOptions);
  
    var data = [ // map data
      {
        'id':1,
        'content':'<strong>SHORT SANDS BEACH</strong> <br> 32 ocean ave york ME 03909',
        'position': {
          'lat':43.173779,
          'lng':-70.608589
         }
      },
      {
        'id':2,
        'content':'<strong>LONG SANDS BEACH</strong> <br> 266 long beach ave york beach me 03909',
        'position': {
          'lat':43.158896,
          'lng':-70.621104
         }
      },
      {
        'id':3,
        'content':'<strong>YORK’S WILD KINGDOM</strong> <br>1 Animal Park Rd, York, ME 03909',
        'position': {
          'lat':43.174933,
          'lng':-70.613862
         }
      },
      {
        'id':4,
        'content':'<strong>GOLDENROD</strong> <br>2 Railroad Ave, York Beach, ME 03910',
        'position': {
          'lat':43.175389,
          'lng':-70.610415
         }
      },
      {
        'id':5,
        'content':'<strong>LIQUID DREAMS SURF SHOP</strong> <br>171 Long Beach Ave, York, ME 03909',
        'position': {
          'lat':43.164633,
          'lng': -70.618446
         }
      },
      {
        'id':6,
        'content':'<strong>NUBBLE LIGHT (CAPE NEDDICK LIGHT)</strong> <br>Sohier Park Rd, York, ME 03909',
        'position': {
          'lat':43.165695,
          'lng': -70.593902
         }
      },
      {
        'id':7,
        'content':'<strong>FUN O’RAMA</strong> <br>13 Beach St, York, ME 03909',
        'position': {
          'lat': 43.175802,
          'lng': -70.609542
         }
      },
      {
        'id':8,
        'content':'<strong>BOWLING</strong> <br>13 Beach St, York, ME 03909',
        'position': {
          'lat': 43.175691,
          'lng': -70.609862
         }
      },
      {
        'id':9,
        'content':'<strong>TAKE FLIGHT</strong> <br>506 Blue Star Memorial Highway, Kittery, ME 03904',
        'position': {
          'lat': 43.115663,
          'lng': -70.728742
         }
      },
      {
        'id':10,
        'content':'<strong>SOME BREWERY</strong> <br>1 York St Unit 3, York, ME 03909',
        'position': {
          'lat': 43.150193,
          'lng': -70.665592
         }
      },
      {
        'id':11,
        'content':'<strong>WIGGLY BRIDGE DISTILLERY</strong> <br>19 Railroad Avenue, York, ME 03909',
        'position': {
          'lat': 43.175008,
          'lng': -70.611707
         }
      },
      {
        'id':12,
        'content':'<strong>TRIBUTARY BREWING</strong> <br>10 Shapleigh Rd, Kittery, ME 03904',
        'position': {
          'lat': 43.090399,
          'lng': -70.735469
         }
      },
      {
        'id':13,
        'content':'<strong>MOUNT AGAMENTICUS</strong> <br> Mt Agamenticus, York, ME 03902',
        'position': {
          'lat': 43.222463,
          'lng': -70.692365
         }
      },
      {
        'id':14,
        'content':'<strong>RACHEL CARSON WILDLIFE RESERVE</strong> <br> 321 Port Rd, Wells, ME 04090',
        'position': {
          'lat': 43.347463,
          'lng': -70.548077
         }
      },
      {
        'id':15,
        'content':'<strong>CLIFF WALK/FISHERMAN’S WALK </strong> <br> 491 York St, York, ME 03909',
        'position': {
          'lat': 43.133998,
          'lng': -70.636941
         }
      },
      {
        'id':16,
        'content':'<strong>Anchorage Inn</strong> <br>  265 Long Beach Ave York Beach ME',
        'position': {
          'lat': 43.159179,
          'lng': -70.622571
         }
      },
      {
        'id':17,
        'content':'<strong>KITTERY OUTLETS</strong> <br>  The Maine Outlet Shopping Center, 375 US-1, Kittery, ME 03904',
        'position': {
          'lat': 43.097966,
          'lng': -70.748368
         }
      },
    ]
      
    for (var i = 0; i < data.length; i++) {
      var current = data[i];
  
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(current.position.lat, current.position.lng),
        map: map,
        icon: '/images/icons/marker.png',
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
    google.maps.event.addDomListener(window, 'load', initialize1);
});
