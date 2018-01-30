
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


$("#flheader").mouseenter(function(){
	$(".flitems").show()
	$(".zs-wrapper").css("z-index",10)
}).mouseleave(function(){
	$(".flitems").hide()
	$(".zs-wrapper").css("z-index",60)
})

$(".flitems").mouseenter(function(){
	$(this).show()
	$(".zs-wrapper").css("z-index",10)
}).mouseleave(function(){
	$(this).hide()
	$(".zs-wrapper").css("z-index",60)
})



//放大镜

$(".zs-focus-list li").click(function(){
	//alert($(this).index())
	$(this).addClass("hover").siblings().removeClass("hover")
	$(this).find("i").addClass("border")
	var index=$(this).index()
	$("#zs-big-pic img").eq(index).show().siblings("img").hide()
	$("#zoom1-big img").eq(index).show().siblings().hide()
	
	
})

$("#zs-big-pic").mouseenter(function(){
	$("#mask").show()
	$("#zoom1-big").show()
}).mouseleave(function(){
	$("#mask").hide()
	$("#zoom1-big").hide()
})

$("#zs-big-pic").mousemove(function(e){
	var e=e||event
	var x=e.pageX-$("#zs-big-pic").offset().left-$("#mask").outerWidth()/2
	var y=e.pageY-$("#zs-big-pic").offset().top-$("#mask").outerHeight()/2
	var maxL=$("#zs-big-pic").outerWidth()-$("#mask").outerWidth()-2
	var maxT=$("#zs-big-pic").outerHeight()-$("#mask").outerHeight()
	
	x=x<0?0:(x>maxL?maxL:x)
	y=y<0?0:(y>maxT?maxT:y)
	
	$("#mask").css({
		"left":x,
		"top":y
	})
	
	//比例
	
	 var s=($(".bigImage").outerWidth()-$("#zoom1-big").outerWidth())/
	   ($("#zs-big-pic").outerWidth()-$("#mask").outerWidth())
	   
	   
	   $(".bigImage").css({
	   	        "left":-x*s,
	   	        "top":-y*s
	   })
	   
	   
	
	
})

	
	
//切换
  $("#zp-tabbar li").click(function(){
  	//alert($(this).index())
  	$(this).addClass("cur").siblings().removeClass("cur")
  	var index=$(this).index()
  	$(".qhym").eq(index).show().siblings().hide()
  })
	

//倒计时
 
var start=new Date()
var end=new Date("2018-2-11 12:00:00")
var t=diff(start,end)

function dTime(){
	//剩余的天数
	var d=parseInt(t/(24*3600))
	//剩余的小时
	var h=parseInt((t-(d*24*3600))/3600)
	//剩余的分钟
	var m=parseInt((t-d*24*3600-h*3600)/60)
	//剩余的秒
	var s=parseInt(t-d*24*3600-h*3600-m*60)
	
	
	$("#sday").html(d+"天")
	$(".time-num").eq(0).html(toTwo(h))
	$(".time-num").eq(1).html(toTwo(m))
	$(".time-num").eq(2).html(toTwo(s))
	
}
dTime()

var ts=setInterval(function(){
	t--
	if(t<0){
		clearInterval(ts)
	}else{
		dTime()
	}
},1000)



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

