var oLine = document.getElementById("line");
oLine.onmouseover = function(){
	oLine.style.width = "172px";
}
oLine.onmouseout = function(){
	oLine.style.width = "33px";
}
var oMove1 = document.getElementById("move1");
var oMove2 = document.getElementById("move2");
var oLi1 = document.getElementById("li1");
var oLi2 = document.getElementById("li2");
oLi1.onmouseover = function(){
	// oMove1.style.display = "block";
	oMove1.style.left = "477px";
}
oLi2.onmouseover = function(){
	// oMove2.style.display = "block";
	oMove2.style.left = "722px";
}
oLi1.onmouseout = function(){
	// oMove1.style.display = "block";
	oMove1.style.left = "270px";
}
oLi2.onmouseout = function(){
	// oMove2.style.display = "block";
	oMove2.style.left = "515px";
}