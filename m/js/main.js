$(function(){
	function owl(){
		var mySwiper = new Swiper('.main-swiper-container',{
		    	autoplay:2000,
		    	loop : true,
		    	speed:1000,			
				pagination : '.swiper-pagination',
		    	autoplayDisableOnInteraction : false,
			})
	}

	owl();
})