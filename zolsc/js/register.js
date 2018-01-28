
//获取随机数
	function randNum(min,max){
	   return	Math.round(Math.random()*(max-min)+min)
	}
	
//随机获取五位验证码     验证码由大写字母 或小写字母 或  数字组成
	
	function PIN(){
		var str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789"
		var pin=""
		for(var i=1;i<=5;i++){
		pin+=str.charAt(randNum(0,61))
	}
		return pin
	}
	


$(".text").focus(function(){
	$(this).css("border","1px solid #c00")
}).blur(function(){
	$(this).css("border","1px solid #ccc")
})

 var flagTel=null

$("#phone_num").blur(function(){
	var reg=/^1[358]\d{9}$/
	var tel=$("#phone_num").val()
	if(reg.test(tel)){
		flagTel=true
		$("#phoneNum").find("i").removeClass("wrong-tips")
		$("#phoneNum").find("i").addClass("right-tips")
	}else{
		flagTel=false
		$("#phoneNum").find("i").removeClass("right-tips")
		$("#phoneNum").find("i").addClass("wrong-tips")
		$("#phoneNum").find("i").html("请填写正确的手机号")
	}
})


   var flagYz=null
   
$(".captcha-img").html(PIN())
$(".captcha-change").click(function(){
	console.log(1)
	$(".captcha-img").html(PIN())
})

$("#checkcode").blur(function(){
	if($("#checkcode").val()==$(".captcha-img").html()){
		flagYz=true
		$("#yz").find("i").removeClass("wrong-tips")
		$("#yz").find("i").addClass("right-tips")
	}else{
		flagYz=false
		$("#yz").find("i").removeClass("right-tips")
		$("#yz").find("i").addClass("wrong-tips")
		$("#yz").find("i").html("请填写正确的验证码")
	}
})


var flagSjyz=null
$("#phone_code").blur(function(){
	var reg=/^\d{6}$/
	var code=$("#phone_code").val()
	if(reg.test(code)){
		flagSjyz=true
		$("#sjyz").find("i").removeClass("wrong-tips")
		$("#sjyz").find("i").addClass("right-tips")
	}else{
		flagSjyz=false
		$("#sjyz").find("i").removeClass("right-tips")
		$("#sjyz").find("i").addClass("wrong-tips")
		$("#sjyz").find("i").html("请填写正确的手机验证码")
	}
		
	
})

 var flagPwd=null
   
    
    $("#pwd").blur(function(){
    	var reg=/^([a-z]|[A-Z]|[0-9]){6,18}$/
    	var opwd=$("#pwd").val()
    	if(opwd==""){
    		flagPwd=false
    		$("#mm").find("i").removeClass("right-tips")
		    $("#mm").find("i").addClass("wrong-tips")
		    $("#mm").find("i").html("请填写密码")
    	}else{
    		if(reg.test(opwd)){
    		flagPwd=true
    		$("#mm").find("i").removeClass("wrong-tips")
		    $("#mm").find("i").addClass("right-tips")
    	}else{
    		flagPwd=false
    		$("#mm").find("i").removeClass("right-tips")
		    $("#mm").find("i").addClass("wrong-tips")
		    $("#mm").find("i").html("密码格式不正确")
    	}
    	}
    	
    	
    })


  var flagQpwd=null
    
   
    $("#qpwd").blur(function(){
    	if($("#qpwd").val()==""){
    		flagQpwd=false
    		$("#qrmm").find("i").removeClass("right-tips")
		    $("#qrmm").find("i").addClass("wrong-tips")
		    $("#qrmm").find("i").html("请填写确认密码")
    	}else{
    		if($("#qpwd").val()==$("#pwd").val()){
    			flagQpwd=true
    			$("#qrmm").find("i").removeClass("wrong-tips")
		        $("#qrmm").find("i").addClass("right-tips")
    		}else{
    			flagQpwd=false
    		    $("#qrmm").find("i").removeClass("right-tips")
		        $("#qrmm").find("i").addClass("wrong-tips")
		        $("#qrmm").find("i").html("两次填写的密码不一致")
    		}
    	}
    })


$(".register-btn").click(function(){
	if(flagQpwd&&flagPwd&&flagSjyz&&flagYz&&flagTel&&$("#read").prop("checked")){
		$(".register-btn").val("正在注册...")
		var timer=setTimeout(function(){
			$(".register-btn").val("注册成功")
			var t1=setTimeout(function(){
				$(window).attr("location","login.html")
				
			},400)
		},1500)
	}
})



//$("#read").click(function(){
//	console.log($("#read").prop("checked"))
//})

