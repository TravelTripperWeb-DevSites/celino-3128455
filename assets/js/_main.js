/*
   Settings and other scripts
   ========================================================================== */
//scroll change header style
$(function() {

  $('#rooms-tab a').click(function (e) {
       e.preventDefault();
       $(this).tab('show');
   });

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
    setTimeout(function(){
      $(".offers-slider.included-offer").show();
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
    },3000);

    //instagram gallery in footer
  var instaurl = 'https://instafeed.traveltripper.io/u/thecelinohotel';
	$.ajax({
		url: instaurl,
		jsonpCallback: 'callback',
		dataType: "json",
		success: function (response) {
			setTimeout(function () {
				$.each(response.medias, function (i, item) {
          var imageIG = item.thumbnail;
          var urlIG = 'https://www.instagram.com/p/' + item.shortcode;

					if (i > 6) return false;
          $('#instagram-photos').append('<div class="instagram-gallery__photo">'+
            '<a href="'+ urlIG +'" target="_blank" rel="nofollow">'+
              '<div class="instagram-gallery__photo__bg" style="background-image: url(\''+ imageIG + '\');"></div><img src="/assets/images/image-holder.png" alt="placeholder image">'+
            '</a>'+
          '</div>');
				});
			}, 1500);
		}
	}); //eof IG


  //booking widget

  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];
var date = new Date('2018-12-31');
var dd = date.getDate();
var mm = date.getMonth() + 1;
var yyyy = date.getFullYear();
var date2 = new Date(date.setDate(date.getDate() + 1));
var dd2 = date2.getDate();
var mm2 = date2.getMonth() + 1;
var yyyy2 = date2.getFullYear();

var FromDate =  yyyy+ '-'+mm+'-'+dd;
var ToDate = yyyy2+ '-'+mm2+'-'+dd2;
$('#arrival_date').val(FromDate);
$('#departure_date').val(ToDate);

 setTimeout(function() {
   var dateArrival = new Date($("#arrival_date").val());
   var dateDeparture = new Date($("#departure_date").val());
   $('#arrival_holder').val(monthNames[dateArrival.getMonth()]+' '+dateArrival.getDate());
   $('#departure_holder').val(monthNames[dateDeparture.getMonth()]+' '+dateDeparture.getDate());
 },200);

  $("#arrival_date").datepicker({
    dateFormat: "yy-mm-dd",
    setDate: 0,
    minDate: 0,
    onSelect: function (date) {
      var dateselected = $(this).datepicker('getDate');
       $('#arrival_holder').val(monthNames[dateselected.getMonth()]+' '+dateselected.getDate());
       var minDate = new Date(dateselected);
       minDate.setDate(minDate.getDate() + 1);
       $('#departure_date').datepicker('setDate',minDate);
       setTimeout(function(){
         var dateselectedDepart = $("#departure_date").datepicker('getDate');
         $('#departure_holder').val(monthNames[dateselectedDepart.getMonth()]+' '+dateselectedDepart.getDate());
       },100);
       //sets minDate to dt1 date + 1
       $('#departure_date').datepicker('option', 'minDate' , minDate);
    }
  });
  $('#departure_date').datepicker({
    dateFormat: "yy-mm-dd",
    minDate: 1,
    setDate: 1,
    onSelect: function (date) {
       var dt1 = $('#arrival_date').datepicker('getDate');
       var dt2 = $(this).datepicker('getDate');
       var dateselectedDepart2 = dt2;
       console.log( dateselectedDepart2.getMonth());
       $('#departure_holder').val(monthNames[dateselectedDepart2.getMonth()]+' '+dateselectedDepart2.getDate());

    }
  });

  //show / hide booking widget
  $("#toggle-booking").click(function(e){
    e.preventDefault();
    $("#bookingWidget").css("display", "flex").hide().fadeIn();
  });
  $("#closeBooking").click(function(e){
    e.preventDefault();
    $("#bookingWidget").fadeOut();
  });

  //map configuration

  // Map
  if ($("#map").length > 0) {
    var mapOptions = {
      hotelTitle: 'CELINO HOTEL',
      hotelAddress: '<p><a href="https://goo.gl/maps/8m8a43AbMz82" rel="nofollow" target="_blank">640 Ocean Drive, Miami Beach, Florida 33139.</a></p>',
      hotelLat: 25.776360,
      hotelLong: -80.131820,
      hotelMarker: '/assets/images/leaflet/marker.png',
      markerSize: [44, 50],
      zoom: 15,
      maxZoom: 19,
      showPopup: true,
      getDirectionBtn: true
    };
    if(attractions.length > 0) {
  	   mapOptions.attractionsList =  attractions
  	}
    $('#map').leafletMap(mapOptions);
    $("[data-category='attractions']").trigger('click');
  }

  //galery lightbox
  $("#lightgallery").lightGallery({
    selector: ".item",
    thumbnail:true
  });
  // Gallery Filter Function
  $(".filter-nav li a").on("click", function() {

    // Remove active class from everything
    $(".filter-nav li a").each(function() {
      $(this).removeClass('active');
    });

    // Add active class to selected option
    $(this).addClass('active');

    // Assign filter variable
    var $filter = $(this).attr("data-filter");

    // If we select "All," show all
    if ($filter == 'all') {
      $(".fancybox").attr("data-fancybox-group", "gallery").not(":visible").fadeIn();
    } else {
      $(".fancybox").fadeOut(0).filter(function() {
        // set data-filter value as the data-rel value of selected
        return $(this).data("filter") == $filter;
      }).attr("data-fancybox-group", $filter).fadeIn(1000); // set data-fancybox-group and show filtered elements
    }

  });


});

$(document).ready(function() {

  $(".room-images-gallery").lightGallery({
    selector: ".item",
    thumbnail:true
  });
  if(window.innerWidth < 768) {
    $(document).on("click", ".rooms-listing__main-filter__filter-items .nav-item.active", function() {
      $(".rooms-listing__main-filter__filter-items .nav-item").not('.active').slideToggle();
    });
    $(document).on("click", ".rooms-listing__main-filter__filter-items .nav-item:not(.active)", function() {
      $(".rooms-listing__main-filter__filter-items .nav-item").removeClass("active");
      $(this).addClass("active");
      $(".rooms-listing__main-filter__filter-items .nav-item:not(.active)").slideUp();
    });
  }

});
