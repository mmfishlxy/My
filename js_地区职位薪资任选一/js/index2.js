var aUl = document.getElementsByTagName("ul");
var oP = document.getElementsByTagName("p")[0];
for(var i= 0;i<aUl.length;i++){
	create(i);
}
function create(i){
	var oSpan = document.createElement("span");
	var oA = aUl[i].getElementsByTagName("a");
	for(var j=0;j<oA.length;j++){
		oA[j].onclick = function(){
			oSpan.innerHTML = this.innerHTML;
			oSpan.onclick = function(){
				oP.removeChild(this);
			}
			oP.appendChild(oSpan);
			deleteSpan();
		}	
	}
}
// function deleteSpan(){
// 	var aSpan = oP.getElementsByTagName("span");
// 	for(var j=0;j<aSpan.length;j++){
// 		aSpan[j].onclick = function(){
// 			oP.removeChild(this);
// 		}
// 	}
// }



//实现可选 可删除 不能只选一个
// var oUl = document.getElementsByTagName("ul")[0];
// var oA = document.getElementsByTagName("a");
// var oP = document.getElementsByTagName("p")[0];
// for(var i=0;i<oA.length;i++){
// 	oA[i].onclick = function(){
// 		var oSpan = document.createElement("span");
// 		oSpan.innerHTML = this.innerHTML;
// 		oP.appendChild(oSpan);
// 		var aSpan = document.getElementsByTagName("span");
// 		for(var j=0;j<aSpan.length;j++){
// 			aSpan[j].onclick = function(){
// 				oP.removeChild(this);
// 			}
// 		}
// 	}
// }
