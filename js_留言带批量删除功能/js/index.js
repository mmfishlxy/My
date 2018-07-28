var oUl = document.getElementsByTagName("ul")[0];
var oText = document.getElementsByTagName("input")[0];
var oBtn = document.getElementsByTagName("input")[1];
var oBtnDel = document.getElementsByTagName("input")[2];
oBtn.onclick = function(){
	var aLi = document.getElementsByTagName("li");
	if(oText.value){
		if(aLi.length>=5){
			oUl.removeChild(aLi[4]);
		}
		var oLi = document.createElement("li");
		oLi.innerHTML = oText.value;
		oUl.children[0] ? oUl.insertBefore(oLi,oUl.children[0]) : oUl.appendChild(oLi);   //加在前面 留言效果
		// oUl.appendChild(oLi);        //加在后面 聊天效果
		oText.value = "";
	}
	else  if(!oText.value){
		alert("发送内容不能为空！");
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].index = 0;
		aLi[i].onclick = function(){
			if(this.index == 1){
				this.style.backgroundColor = "pink";
				this.index = 0;
			}
			else if(this.index == 0){
				this.style.backgroundColor = "yellow";
				this.index = 1;
			}
		}
	}
	oBtnDel.onclick = function(){
		for(var j=0;j<aLi.length;j++){
			var t = j;
			if(aLi[t].style.backgroundColor == "yellow"){
				oUl.removeChild(aLi[t]);
				j--;
			}
		}
	}
}