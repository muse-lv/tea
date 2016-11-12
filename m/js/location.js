$(function(){
	function del(){
		layui.use('layer',function(){
			 var layer = layui.layer;
		});
		var del = $(".del");
		for(var i=del.length-1 ; i>=0 ; i--){
			del.eq(i).on("touchend",function(){
				var _this = $(this);
				var item = _this.parents(".loca-item");
				layer.open({
				    content: '确认要删除此地址?',
				    title: false,
				    closeBtn: 0,
				    btn: ['确认', '取消'],
				    yes: function(index, layero){				     
				       item.hide();
				       layer.close(index);
				    },
				    btn2: function(index, layero){
				       layer.close(index);
				    },
				});
				
			})
		}
	}

	function set(){
		layui.use('layer',function(){
			 var layer = layui.layer;
		});
		var set_default = $(".set_default");
		for(var i=set_default.length-1 ; i>=0 ; i--){
			set_default.eq(i).on("touchend",function(){
				var _this = $(this);
				var _this_i = _this.find("i");
				var _this_value = _this_i.html();
				var curr_value = "&#x1005;";
				var other_value = "&#xe63f;";
				var is = set_default.find("i");
				is.html(other_value);
				_this_i.html(curr_value);
				is.removeClass("current");
				_this_i.addClass("current");
				layer.msg("设置默认地址成功",{
					time: 1000
				});
			});
		}
	}
	del();
	set();

})