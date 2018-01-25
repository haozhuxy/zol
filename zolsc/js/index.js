//选项卡
$(".items").mouseenter(function(){
	$(".fldrop").css("display","block")
	$(".flall").eq($(this).index()).show().siblings().hide()
})

$(".flbody").mouseleave(function(){
	$(".fldrop").css("display","none")
})

//轮播图
var timer=setInterval(autoPlay,3000)
var index=0
 function autoPlay(){
 	index++
 	if(index==$(".bx-page-item").size()){
 		index=0
 	}
   	if(index==-$(".bx-page-item").size()){
   		index=0
   	}
 	$(".bx-page-item").eq(index).children().addClass("active").end().siblings().children().removeClass("active")
 	$(".focus-list li").eq(index).fadeIn(1000).siblings().fadeOut(1000)
 }
  $(".banner").mouseenter(function(){
  	clearInterval(timer)
  })
  
  $(".banner").mouseleave(function(){
  	timer=setInterval(autoPlay,3000)
  })
  $(".bx-page-link").click(function(){
  	
  	index=$(this).data("index")-1
		autoPlay()
  })
  $(".bx-next").find(".arrow").mouseenter(function(){
      $(this).prev().css("display","block")
  }).click(function(){
  	index=index-1
 	index++
 	autoPlay()
 	//console.log(index)
 }).mouseleave(function(){
 	$(this).prev().css("display","none")
 })
  
  $(".bx-prev").find(".arrow").mouseenter(function(){
  	$(this).prev().css("display","block")
  }).click(function(){
  	index=index-1
 	index--
 	autoPlay()
 	//console.log(index)
  }).mouseleave(function(){
  	$(this).prev().css("display","none")
  })
  
  //动画
  $(".itemk").mouseenter(function(){
  	$(this).find(".upward_hover").animate({"height":52},400)
  }).mouseleave(function(){
  	$(this).find(".upward_hover").animate({"height":0},400)
  })
