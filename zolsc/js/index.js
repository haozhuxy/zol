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


//选项卡
$(".noopsyche-focus_tab li").mouseenter(function(){
	$(this).addClass("active").siblings().removeClass("active")
	$("#noopsycheSlide li").eq($(this).index()).show().siblings().hide()
})

//动画
$(".noopsyche-pro li").mouseenter(function(){
	$(this).find(".noopsyche-pro_mark").animate({"top":0},350)
}).mouseleave(function(){
	$(this).find(".noopsyche-pro_mark").animate({"top":152},350)
})

//选项卡
$(".tab-btn").click(function(){
	$(this).addClass("cur").siblings().removeClass("cur")
	$(".tab-con").eq($(this).index()).addClass("cur").siblings().removeClass("cur")
})


//搜索框
$(window).scroll(function(){
	var sTop=$(document).scrollTop()
	if(sTop>470){
		$("#search_layer_fixed").show()
	}else{
		$("#search_layer_fixed").hide()
	}
})

//楼梯
$(window).scroll(function(){
	var yTop=$(document).scrollTop()
	if(yTop>470){
		$(".fixed-nav-bar").show()
	}else{
		$(".fixed-nav-bar").hide()
	}
})

$(".floorbtn").click(function(){
	var y1=$(".floor").eq($(this).index()).offset().top
	$("body,html").animate({"scrollTop":y1-40},1000)
})

$(".back-top").click(function(){
	$("body,html").animate({"scrollTop":0},1200)
})


//登录 退出

var brr=getCookie("ulistzhxy")

if(brr.length==0){
	$("#wdl").show()
	$("#mfzc").show()
	$("#dlzt").hide()
	
	$("#tcdl").hide()
}else{
	$("#wdl").hide()
	$("#mfzc").hide()
	$("#dlzt").show()
	$("#dlzt").find("a").html(brr.uname)
	$("#tcdl").show()
	
}



//侧边栏

$("#right li").mouseenter(function(){
	$(this).css("background","#f33")
	$(this).find("i").css("background","#f33")
	$(this).find("em").css("background","#f33")
	$(this).find("em").animate({"left":-70},100)
	
	
}).mouseleave(function(){
	
	$(this).css("background","#2D2D2D")
	$(this).find("i").css("background","#2D2D2D")
	$(this).find("em").css("background","#2D2D2D")
	$(this).find("em").animate({"left":30},100)
})

$("#right a").mouseenter(function(){
	$(this).css("background","#f33")
	
}).click(function(){
	$("body,html").animate({"scrollTop":0},0)
}).mouseleave(function(){
	$(this).css("background","#2D2D2D")
})

