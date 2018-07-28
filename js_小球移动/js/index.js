var oDiv = document.getElementsByTagName("div")[0];
var timer = null;
oDiv.onmousedown = function(ev){
	ev = ev || event;
	var disX = ev.clientX - oDiv.offsetLeft;
	var disY = ev.clientY - oDiv.offsetTop;
	var oldT = new Date().getTime();
	var oldX = ev.clientX;
	var oldY = ev.clientY;
	var timeC = 0;
	var xC = 0;
	var yC = 0;
	document.onmousemove = function(ev){
		ev = ev || event;
		var newT = new Date().getTime();
		var newX = ev.clientX;
		var newY = ev.clientY;
		oDiv.style.left = ev.clientX - disX + "px";
		oDiv.style.top = ev.clientY - disY + "px";
		timeC = newT-oldT;
		xC = newX-oldX;
		yC = newY-oldY;
		oldT = newT;
		oldX = newX;
		oldY = newY;
	}
	document.onmouseup = function (){
		document.onmousemove = null;
		timer = setInterval(function (){
			var nextX = oDiv.offsetLeft+xC*3;
			var nextY = oDiv.offsetTop + yC*3;
			if(nextX<=0){
				nextX = 0;
				xC = -xC;
			}else if(nextX>=document.documentElement.clientWidth - oDiv.offsetWidth){
				nextX = document.documentElement.clientWidth-oDiv.offsetWidth;
				xC = -xC;
			}
			oDiv.style.left = nextX + "px";
			if(nextY<=0){
				nextY = 0;
				yC = -yC;
			}else if(nextY>=document.documentElement.clientHeight - oDiv.offsetHeight){
				nextY = document.documentElement.clientHeight - oDiv.offsetHeight;
				yC = -yC;
			}
			oDiv.style.top = nextY + "px";
		},timeC*3)
	}
	return false;
}

