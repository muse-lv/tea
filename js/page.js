$(function(){
	var $k_page_wrapper = $('.page-wrapper');
	var $k_text = $('.text');
	for(var i=$k_page_wrapper.length-1 ; i>=0 ;i--) {
		$k_page_wrapper.eq(i).on("click",function(){
			var index = $k_page_wrapper.index($(this));
			$k_page_wrapper.removeClass("current");
			$(this).addClass("current");
			$k_text.hide();
			$k_text.eq(index).show();
		})
	};
})