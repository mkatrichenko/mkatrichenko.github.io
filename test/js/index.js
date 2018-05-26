jQuery(document).ready(function($){
 
//menu
	
 $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu-container').toggleClass('menu_state_open');
    });
  });
	
	
	
// "go top" button
	
$(document).ready(function(){
  $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});
	

	
//slider
	
var works = $(".works-slider");
	
	works.slick({
		dots: true,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true
	});
});



//map connection
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }




