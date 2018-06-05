$(function(){
	$("#center-left li:has(ul)").click(function(e){
		if(this==e.target){
			$(this).children().toggle();
		}
		return false;	//避免不必要的事件混绕
	}).css("cursor","pointer").click();	//加载时触发点击事件
	
	//对于没有子项的菜单，统一设置
	$("#center-left li:not(:has(ul))").click(function (e) {
		event.stopPropagation();
    }).css({
		"cursor":"default",
	});
});