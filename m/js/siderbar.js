$(function(){
	function siderbar(){
		var siderbar_icon = $(".products-header-left");
		var siderbar = $(".siderbar");
		var siderbar_close = $(".siderbar-close");
		var siderbar_cover = $(".siderbar-cover");

		siderbar_icon.on("touchend",function(event){
			siderbar.css({"opacity":"1","transform":"translateX(0)"});
		})

		siderbar_close.on("touchend",function(){
			siderbar.css({"opacity":"0","transform":"translateX(-100%)"});
		})

		siderbar_cover.on("touchend",function(){
			siderbar.css({"opacity":"0","transform":"translateX(-100%)"});
		})

	}

	siderbar();

})