(function($){

	$(document).ready(function() {

		$('.portfolio-slider').owlCarousel({
			navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			navigation: true,
			pagination: false,
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem: true
		});

		$('a[href*=#]').bind("click", function(e){
			$.magnificPopup.instance.close();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});
	});

})(jQuery);