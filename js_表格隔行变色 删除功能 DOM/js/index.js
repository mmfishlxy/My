var data = [
{'id':1,'username':'小一','sex':'男'},
{'id':2,'username':'小二','sex':'女'},
{'id':3,'username':'小三','sex':'男'},
{'id':4,'username':'小四','sex':'女'},
{'id':5,'username':'小一','sex':'男'},
{'id':6,'username':'小二','sex':'女'},
{'id':7,'username':'小三','sex':'男'},
{'id':8,'username':'小四','sex':'女'}];
var oTable = document.getElementsByTagName("table")[0];
for(var i=0;i<data.length;i++){
	var oTr = document.createElement("tr");   //动态生成tr
	oTable.appendChild(oTr);
	for(var j in data[i]){
		// json[attr]
		var oTd = document.createElement("td");    //动态生成td
		oTd.innerHTML = data[i][j];
		oTr.appendChild(oTd);
	}
}
var aTr = document.getElementsByTagName("tr");
for(var j=0;j<aTr.length;j++){
	var oTdDel = document.createElement("td");
	oTdDel.innerHTML = "<a>删除</a>";
	aTr[j].appendChild(oTdDel);
}

change_Color();      //改变背景色

function change_Color(){
	var aTrD = document.getElementsByTagName("tr");
	for(var j=0;j<aTr.length;j++){
		if(j%2){
			aTr[j].style.backgroundColor = "gray";
		}
		else{
			aTr[j].style.backgroundColor = "#fff";
		}
	}
}

var aA = document.getElementsByTagName("a");
for(var i=0;i<aA.length;i++){
	aA[i].onclick = function(){
		oTable.removeChild(this.parentNode.parentNode);
		change_Color();
	}
}
