$(function() {
  var body = $('body');
  var sidebar = $('.booking-widget');
  var closeButton = $('.booking-widget_close');
  var showButtons = $('a[show-booking-widget]');
  var isselect=true;
 
  //$('.-first').find('.booking-widget_accord_toggler').addClass('-show');
  //$('.-first').find('.booking-widget_accord_content').css('display','block');
  
  $('.-first').click(function(){
   $('.-second').find('.booking-widget_accord_content').slideUp('slow'); 
   $('.-second').find('.booking-widget_accord_toggler').removeClass('-show');
       $('.-third').find('.booking-widget_accord_content').slideUp('slow');
       $('.-third').find('.booking-widget_accord_toggler').removeClass('-show'); 
  });
  
  $('.-second').click(function(){
       $('.-first').find('.booking-widget_accord_content').slideUp('slow'); 
       $('.-first').find('.booking-widget_accord_toggler').removeClass('-show');
       $('.-third').find('.booking-widget_accord_content').slideUp('slow');
       $('.-third').find('.booking-widget_accord_toggler').removeClass('-show'); 
  });
  
  $('.-third').click(function(){
   $('.-first').find('.booking-widget_accord_content').slideUp('slow'); 
       $('.-first').find('.booking-widget_accord_toggler').removeClass('-show');
       $('.-second').find('.booking-widget_accord_content').slideUp('slow'); 
       $('.-second').find('.booking-widget_accord_toggler').removeClass('-show');
  });

  // Show booking sidebar events
  $.each(showButtons, function(i, item) {
    $(item).on('click', function(e) {
      e.preventDefault();

      if (!sidebar.hasClass('-show')) {
        body.addClass('overflow');
        sidebar.addClass('-show');
      }
    });
  });

  // Close sidebar event
  closeButton.on('click', function() {
    body.removeClass('overflow');
    sidebar.removeClass('-show');
  });

  // View Special Rates
  var specialRates = $('.booking-widget_special-rates');
  var specialRatesTitle = specialRates.find('.booking-widget_special-rates_title');
  var specialRatesContent = specialRates.find('.booking-widget_special-rates_content');

  specialRatesTitle.on('click', function() {

    $(this).toggleClass('-show');
    specialRatesContent.stop().slideToggle(400);
  });



  // TODO
  $(document).on('click.acord', '.booking-widget_accord_toggler', function() {

    var $this = $(this);
$this.toggleClass('-show'); 
 //jQuery(this).datepicker();

$this.siblings('.booking-widget_accord_content').stop().slideToggle(200);
/*
if(isselect)
{
$(".booking-widget_calendar_icon-checkin").html("CHECK IN");
isselect=false;
}
else
{
  $(".booking-widget_calendar_icon-checkin").html("SELECT CHECK IN");
  isselect=true;
}
*/
  });
});