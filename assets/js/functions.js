!function(){$(".hamburger-menu").on("click",function(){$(".bar").toggleClass("animate")})}(),function(){$(".hamburger-menu").on("click",function(){$(".overlay").toggleClass("open")})}(),function(){$(".overlay-text").on("click",function(){$(".overlay").toggleClass("open")})}(),function(){$(".overlay-text").on("click",function(){$(".bar").toggleClass("animate")})}();


var pContainerHeight = $('section.top').height();

$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

		$('.mock-up').css({
			'transform' : 'translate(0px, -'+wScroll /40 +'vh)'
		});

}

	var wScroll = $(this).scrollTop();

	if(wScroll > $('.move').offset().top -
	$(window).height()){

		$('.move').addClass('slideInUp');
	}

	if(wScroll > $('.fade').offset().top -
	$(window).height()){

		$('.fade').addClass('fadeIn');
	}

	if(wScroll > $('section.sides').offset().top -
	$(window).height()){

		$('.grow').addClass('pulse');
	}

	if(wScroll > $('section.responsive').offset().top -
	$(window).height()){

		$('.center-box').addClass('growUp');
		$('.text-box').addClass('fadeInLeftBig');
		$('.right-side').addClass('fadeInRightBig');
		}


});
