$(document).ready(function() {
  $('.flexslider').flexslider({
    animation: "slide"
  });
  $('.flip').hover(
       function(){ $(this).find('.card').addClass('flipped') },
       function(){ $(this).find('.card').removeClass('flipped') }
	)
});
