var oInput = document.getElementsByTagName("input")[0];
var oSub = document.getElementsByTagName("input")[1];
var oBtn = document.getElementsByTagName("input")[2];
window.onload = function(){
	if(getCookie("username")){
		oInput.value = getCookie("username");
	}
}
oSub.onclick = function(){
	// if(getCookie("username") == undefined){
	// 	setCookie("username",oInput.value,5);
	// }
	// else{
	// 	setCookie("username",getCookie("username") + oInput.value,5);
	// }
	setCookie("username",oInput.value,5);
}
oBtn.onclick = function(){
	removeCookie("username");
	oInput.value = "";
}
//存储cookie
function setCookie(key,value,t){
	var oDate = new Date();
	oDate.setDate(oDate.getDate()+t);
	document.cookie = key + "=" + encodeURI(value) + ";expires=" + oDate.toGMTString();
} 
//获取cookie
function getCookie(key){
	var arr1 = document.cookie.split("; ");
	for(var i=0;i<arr1.length;i++){
		var arr2 = arr1[i].split("=");
		if(arr2[0]==key){
			return decodeURI(arr2[1]);
		}
	}
}
//删除cookie
function removeCookie(key){
	setCookie(key,'',-1);
}