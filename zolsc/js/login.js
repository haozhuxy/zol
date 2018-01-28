//选项卡 面向对象

var btns=document.getElementsByClassName("btnz")
var divs=document.getElementsByClassName("login-select")

window.onload=function(){
	var s=new Tab(btns,divs)
	s.init()
}

function Tab(btns,divs){
	this.btns=btns
	this.divs=divs
	var that=this
	//当前操作设置
	this.setC=function(obj){
		obj.style.borderBottom="4px solid #de3030"
	}
	
	
	this.clear=function(){
		for( var i=0;i<this.btns.length;i++){
			this.btns[i].style.borderBottom="2px solid transparent"
			
		}
	}
	
	//当前操作的  显示
	
	this.show=function(obj){
		obj.style.display="block"
	}
	
	//隐藏内容
	
	this.hide=function(){
		for(var i=0;i<this.divs.length;i++){
			this.divs[i].style.display="none"
		}
	}
	
	
	
	this.init=function(){
		for(let i=0;i<this.btns.length;i++){
			this.btns[i].onclick=function(){
				that.clear()
				that.hide()
				
				that.setC(this)
				
				that.show(that.divs[i])
			}
		}
	}
}


