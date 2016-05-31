// 注：本文件仅适用于pm、ui、web、data这四个页面，勿与其它页面的js混用

$(document).ready(function(){

	// 页面下滑一定距离，固定导航栏高度
	$(window).scroll(function(){
		var offsetH = $(this).scrollTop();
		if(offsetH >= 270){
			$(".nav").css({"position":"fixed","top":0,"z-index":"999"});
		}else{
			$(".nav").css("position","relative");
		}
	});

	// 鼠标移入职业标志区，显示所有职业
	$(".profession").mouseenter(function(){
		var offsetX = 60;
		$(".pro-wrapper").each(function(){
			$(this).stop().animate({"left":offsetX + 'px'},"fast").find("div").animate({"height":"80px",
				"width":"80px"},"fast");
			offsetX += 200;
		});
	});
	// 鼠标移出职业标志区，恢复原状
	$(".profession").mouseleave(function(){
		$(".pro-wrapper").stop().animate({"left":"350px"},"fast").find("div").animate({"width":"100px",
			"height":"100px"});
	});

	// 调用tab.js
	var tab = new tabPages();
    tab.init({ 
        normalcolor:"#999", // 自然状态下文字颜色，默认为深灰
        normalbackcolor:"transparent", // 自然状态下背景色，默认为白色	
    	activecolor:"#ffffff", // 选中时文字颜色，默认为红色
  		activebackcolor:"transparent" // 选中时背景颜色，默认为白色
 	});


 	// 鼠标移入标签，伸展标签显示标签内容
 	$(".mark").mouseenter(function(){
 		$(this).stop().animate({"width":"90px"},"fast");
 	});
 	$(".mark").mouseleave(function(){
 		$(this).stop().animate({"width":"24px"},"fast");
 	});


 	// 设置页脚的初始位置
 	(function(){
 		var h = $(".toggleContent").first().height();
 		$("footer").css("top",h + 330 + "px");
 	})();
 	


}); // ready end

