var oBody = document.body;
var arr = ["宋体","黑体","楷体","微软雅黑","新宋体","仿宋"];
var oInput = document.getElementsByTagName("input")[0];
var oUl = document.createElement("ul");
//生成ul
window.onload = function(){
	oBody.appendChild(oUl);
	for(var i=0;i<arr.length;i++){
		var oLi = document.createElement("li");
		oLi.innerHTML = arr[i];
		oUl.appendChild(oLi);
	}
	backColor();   //初始  输入框内容对应的背景颜色为黄色
	mouse();   //鼠标移入、移出、点击时的变化
}
//输入框获得焦点时，ul显示
oInput.onfocus = function(){
	oUl.style.display = "block";     
}


function backColor(){
	var aLi = document.getElementsByTagName("li");
	for(var i=0;i<aLi.length;i++){
		if(aLi[i].innerHTML == oInput.value){
			aLi[i].style.backgroundColor = "#ff9f00";
		}
	}
}
 
function mouse(){
	var aLi = document.getElementsByTagName("li");             
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover = function(){
			this.style.backgroundColor = "#ff9f00";
		}
		aLi[i].onmouseout = function(){
			if(this.innerHTML != oInput.value){
				this.style.backgroundColor = "#fff";
			}
		}
		aLi[i].onclick = function(){
			oInput.value = this.innerHTML;
			for(var j=0;j<aLi.length;j++){
					if(aLi[j].innerHTML != oInput.value){
						aLi[j].style.backgroundColor = "#fff";
				}
			}
		}
	}
}

