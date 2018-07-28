var oTable = document.getElementsByTagName("table")[0];
for(var i=1;i<=9;i++){
	var oTr = document.createElement("tr");
	oTable.appendChild(oTr);
	for(var j=1;j<=i;j++){
		var oTd = document.createElement("td");
		oTd.innerHTML = j + "*" + i + "=" + i*j;
		oTr.appendChild(oTd);
	}
}