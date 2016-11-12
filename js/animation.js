$(function(){
	var screenHeight = $(window).height();
	var produces_left = $(".produces-left");
	var produces_right = $(".produces-right");
	var cases = $(".cases");
	var ad =$(".ad");
	var security = $(".security");
	var totop = $(".totop");
	var scrollTop = $(window).scrollTop();
	var addAnimationUp = function(element){
		if(element.length>0){			
			var element_top = element.offset().top;
			if(scrollTop+screenHeight>element_top) {
				element.addClass("animation-up");
			}
		}
	}

	var addAnimationLeft = function(element){
		if(element.length>0){			
			var element_top = element.offset().top;
			if(scrollTop+screenHeight>element_top) {
				element.addClass("animation-left");
			}
		}
	}

	var addAnimationRight= function(element){
		if(element.length>0){			
			var element_top = element.offset().top;		
			if(scrollTop+screenHeight>element_top) {
				element.addClass("animation-right");
			}
		}
	}

	$(window).on("scroll",function(){
		scrollTop = $(window).scrollTop();
		addAnimationRight(cases);
		addAnimationRight(produces_left);
		addAnimationLeft(produces_right);
		addAnimationUp(ad);
		addAnimationUp(security);
		if(scrollTop>300){
			totop.css({"opacity":1,"visibility":"visible"});
		}else{
			totop.css({"opacity":0,"visibility":"hidden"});
		}
	})

	totop.on("click",function(){
		$('body,html').animate({ scrollTop: 0 }, 200);
	})

	totop.on("mouseover",function(){
		totop.css("opacity","0.7");
	})
	totop.on("mouseout",function(){
		totop.css("opacity","1");
	})
})