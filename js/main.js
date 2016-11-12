$(function(){
	var cart = $(".topbar-title");
	var login = $(".topbar-login-login");
	var register = $(".topbar-login-register");
	var single_add_to_cart_button = $(".single_add_to_cart_button");
	cart.on("click",function(){
		layer.open({
		  type: 2,
		  title: "购物车",
		  closeBtn: 1,
		  shadeClose: true,
		  content: 'cart.html',
		  skin: 'layui-layer-rim',
		  area:['520px', '500px']
		});
	})

	login.on("click",function(){
		layer.open({
		  type: 2,
		  title: "购物车",
		  closeBtn: 1,
		  shadeClose: true,
		  content: 'login.html',
		  skin: 'layui-layer-rim',
		  area:['600px', '320px']
		});		
	})

	register.on("click",function(){
		layer.open({
		  type: 2,
		  title: "购物车",
		  closeBtn: 1,
		  shadeClose: true,
		  content: 'register.html',
		  skin: 'layui-layer-rim',
		  area:['500px', '425px']
		});				
	});

	if(single_add_to_cart_button.length>0) {
		single_add_to_cart_button.on("click",function(){
			layer.open({
			  type: 2,
			  title: "购物车",
			  closeBtn: 1,
			  shadeClose: true,
			  content: 'buy.html',
			  skin: 'layui-layer-rim',
			  area:['900px', '500px']
			});				
		});
	}

	// 在线咨询
		$('.service-head img').on('click',function(){

	        if($(this).hasClass('service-bigimg')){
	            $(this).removeClass('service-bigimg');
	        }else{
	            $(this).addClass('service-bigimg');
	        }
	    })
		$('#service-close').on('click',function(){
		    $(this).parent().fadeOut(100);
		    $('#service-open').fadeIn(100);
		})
		$('#service-open').on('click',function(){
		    $(this).fadeOut(100);
		    $('#service').fadeIn(100);
	})
})