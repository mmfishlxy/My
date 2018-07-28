var aCheck = document.getElementsByTagName("input");
// for(var i=0;i<aCheck.length;i++){
// 	aCheck[i].onchange = function(){
// 		var iNum = 0;
// 		for(var j=0;j<aCheck.length;j++){
// 			if(aCheck[j].checked){
// 				iNum++;
// 			}
// 		}
// 		if(iNum>=4){
// 			this.checked = false;
// 			alert("你最多只能选三项！");
// 		}
// 	}
// }

for(var i=0;i<aCheck.length;i++){
	aCheck[i].onclick = function(){
		var iNum = 0;
		for(var j=0;j<aCheck.length;j++){
			if(aCheck[j].checked){
				iNum++;
			}
		}
		if(iNum>=4){
			alert("你最多只能选三项！");
			return false;
		}
	}
}