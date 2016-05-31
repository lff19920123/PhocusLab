
// 创建tab对象
function tabPages(){
	this.controller = {
		normalcolor:"#666",
		normalbackcolor:"#fff",
		activecolor:"#FF6B5B",
		activebackcolor:"#fff"
	}
}

tabPages.prototype = {

	init:function(controller){
		var Controller = $.extend(this.controller,controller);

		// 设置默认的初始颜色
		$(".toggleNav li").css({'color':Controller.normalcolor,
								'backgroundColor':Controller.normalbackcolor});
		
		// 设置指针的初始位置
 		var left = $(".toggleNav li").first().offset();
 		var wid = $(".toggleNav li").outerWidth();
 		left = left.left + wid/2 - 8;
 		$(".indicator").css('left',left + 'px');

		// 设置默认选中标签和tab页
		$(".toggleNav li").first().css({
			'color':Controller.activecolor,
			'backgroundColor':Controller.activebackcolor
		});
		$('.toggleContent').first().css("display","block").siblings().css("display","none");

		// 设置标签页的切换
		$(".toggleNav li").click(function(){
			$(this).css({
				'color':Controller.activecolor,
				'backgroundColor':Controller.activebackcolor
			});
			$(this).siblings('li').css({
				'color':Controller.normalcolor,
				'backgroundColor':Controller.normalbackcolor
			});
			var role = $(this).attr('role');
			$(".toggleContent").each(function(){
				var name = $(this).attr("name");
				if (role == name){
					$(this).css("display","block");

					// 设置页脚的顶部坐标
					var h = $(this).height();
					$("footer").css("top",h + 330 + "px");

				}else{
					$(this).css("display","none");
				}
			});

			// 切换指针位置
			var left = $(this).offset();
			var wid = $(this).outerWidth();
			left = left.left + wid/2 -8;
			$(".indicator").animate({'left':left + 'px'},200);


			// 集萃瀑布流布局
		 	if($(this).attr("role") == "collection"){
		 		tail();
		 	}

		 	function tail(){
		 		var H = [];
		 		var item = $(".article-wrapper");
		 		var max = item.size();
		 		for (var i = 0; i < max; i++) {
		 			if(i < 4){
		 				var h = item.get(i).offsetHeight;
		 				H.push(h);
		 			}else{
		 				var s = i % 4;
		 				var h = item.get(i).offsetHeight;
		 				putInOrder(i,s);
		 			}
		 		};
		 		function putInOrder(i,s){
		 			var m = item.get(i);
		 			m.style.left = s * 280 + "px";
		 			m.style.top = H[s] +"px";
		 			var h = m.offsetHeight;
		 			H[s] = H[s] + h;
		 		};
		 		var maxH = Math.max.apply(null,H) + 100;
		 		$("div[name=collection]").height(maxH);

		 		// 重设页脚的顶部坐标
				$("footer").css("top",maxH + 230 + "px");
		 	}

		});


	}
}