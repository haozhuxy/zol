//选项卡
$(".items").mouseenter(function(){
	$(".fldrop").css("display","block")
	$(".flall").eq($(this).index()).show().siblings().hide()
})

$(".flbody").mouseleave(function(){
	$(".fldrop").css("display","none")
})

