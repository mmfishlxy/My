var oMain = document.getElementById("main");
var aFile = oMain.getElementsByTagName("div");
var oDump = document.getElementById("dump");
for(var i=0;i<aFile.length;i++){
	Move(i);
}
function Move(i){
	aFile[i].onmousedown = function(ev){
		ev = ev || event;
		var disX = ev.clientX - this.offsetLeft;
		var disY = ev.clientY - this.offsetTop;
		document.onmousemove = function(ev){
			ev = ev || event;
			aFile[i].style.zIndex = 3;
			aFile[i].style.left = ev.clientX - disX + "px";
			aFile[i].style.top = ev.clientY - disY + "px";
			var mouseX = ev.clientX - oMain.offsetLeft;
			var mouseY = ev.clientY - oMain.offsetTop;
			document.onmouseup = function(){
				if(mouseX>oDump.offsetLeft
				&& mouseX<oDump.offsetLeft + oDump.offsetWidth
				&& mouseY>oDump.offsetTop
				&& mouseY<oDump.offsetTop + oDump.offsetHeight){
					aFile[i].style.display = "none";
				}
				else{
					aFile[i].style.left = (i%2)*200 + "px";
					aFile[i].style.top = parseInt(i/2)*120 + "px";
				}
				document.onmousemove = null;
			}
		}
	}
	return false;
}
