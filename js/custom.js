 $(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});

$(document).ready(function() {
  // Restrict Form Submission by disbling Submit button untill all required fields are filled (W.r.t GDPR Guidelines)

  function checkForm() {
    // here, "this" is an input element
    var isValidForm = true;
    $(this.form)
      .find(':input[required]:visible')
      .each(function () {
        if (!this.value.trim()) {
          isValidForm = false;
        }
      });
    $(this.form)
      .find('input[type="checkbox"]:required')
      .each(function () {
        if (!$(this)
          .is(':checked')) {
          isValidForm = false;
        }
      });
    $(this.form)
      .find('select:required')
      .each(function () {
        if (!$(this)
          .find('option:selected')
          .val()
          .trim()) {
          isValidForm = false;
        }
      });

    $(this.form)
      .find('#signUpBtn, #contactBtn') // Button class names should be unique for every form
      .prop('disabled', !isValidForm);
    return isValidForm;
  }

  $('#signUpBtn, #contactBtn') // Button class names should be unique for every form
    .closest('form')
    // indirectly bind the handler to form
    .submit(function () {
      return checkForm.apply($(this)
        .find(':input')[0]);
    })
    // look for input elements
    .find(':input[required]:visible')
    // bind the handler to input elements
    .on('change keyup', checkForm)
    // immediately fire it to initialize buttons state
    .keyup();

     $('.galleria-info-text').css('display','block');
$('.close-button').click(function(){
    $('.galleria-container').css('display','none');
});
$('#gallery, #gallery-footer').click(function(){
    $('.galleria-container').css('display','block');
});

Galleria.ready(function() {
    this.attachKeyboard({
        left: this.prev,
        right: this.next
    });
});

if ($('.galleria').length) {
            $('.galleria').galleria({
                transition: 'fade',
                data_source: data,
                 wait: true,
                _toggleInfo: false,

                });
            }

jQuery('#slideShow h3').fitText(1.2, { maxFontSize: '129px' });
jQuery('#slideShow h2').fitText(2.6, {   maxFontSize: '70px' });

    jQuery('#slideShow').on('slid.bs.carousel', function () {
        jQuery('.carousel-caption').find('h3').fitText(1.2, {  maxFontSize: '129px' });
        jQuery('.carousel-caption').find('h2').fitText(2.6, { maxFontSize: '70px' });
    });

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
        var hashOffset = $(window.location.hash).offset();
        if(hashOffset) {
          $('html, body').animate({
              scrollTop: hashOffset.top - 89 +"px"
          },500, 'swing');
        }
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

$(document).ready(function(){
        $('.alert').css('display','none');
            function getParameterByName(name, url) {
                    if (!url) url = window.location.href;
                    name = name.replace(/[\[\]]/g, "\\$&");
                    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                        results = regex.exec(url);
                    if (!results) return null;
                    if (!results[2]) return '';
                    return decodeURIComponent(results[2].replace(/\+/g, " "));
             }
           if(getParameterByName('submit')=='success'){
                $('.alert').css('display','block');
             }
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

$("#downClick").click(function() {
    $('html,body').animate({
        scrollTop: $(".margin-top").offset().top-107},
        'slow');
});


 $('#celinoVideo').on('hide.bs.modal', function(e) {
    var $if = $(e.delegateTarget).find('iframe');
    var src = $if.attr("src");
    $if.attr("src", '/empty.html');
    $if.attr("src", src);
});
