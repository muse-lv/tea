$(function(){
	layui.use(['element','layer'], function(){
	  var element = layui.element();
	  var layer = layui.layer;
	  
	  //tab标签
	  element.on('tab(tab)', function(data){
	    console.log(data);
	  });
	  //弹出窗
	  var page_type = $(".page-type");
	  var win_buy = $(".win-buy");
	  page_type.on("click",function(){
		  layer.open({
		      type: 1,
		      title: false,
		      closeBtn: 0,
		      shadeClose: true,
		      content: win_buy,
		      offset: 'b',
		      area:['100%', '']
		  });		
	  })
	});

	function owl(){
		var mySwiper = new Swiper('.page-swiper-container',{
		    	autoplay:2000,
		    	loop : true,
		    	speed:1000,			
				pagination : '.swiper-pagination',
		    	autoplayDisableOnInteraction : false,
			})
	}
	owl();


})