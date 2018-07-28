var oInput1 = document.getElementsByTagName("input")[0];
var oInput2 = document.getElementsByTagName("input")[1];
var oBtn = document.getElementsByTagName("input")[2];

	
oBtn.onclick = function(){
	var str1 = oInput1.value;
	//获取当前年月天时分秒
	var iNow = new Date(); 
	//获取输入的时间
	var iNew = new Date(str1); 

	var t = (iNew - iNow)/1000; 

	function now(now){
		return now<10 ? now = "0" + now : now;
	}

	var timer;
	function Js(){
		console.log(t);
		if(t <= 1){
			clearInterval(timer);
			// oInput2.value = "时间到！";
		}
		else{
			t--;
		}
		var iD = Math.floor(t/86400); //天
		var iH = Math.floor(t%86400/3600); //时
		var iM = Math.floor(t%3600/60); //分
		var iS = Math.floor(t%60); //秒
		oInput2.value = iD + "天" + now(iH) + "时" + now(iM) +"分" + now(iS) + "秒";
	};

	if(t < 0){
		oInput2.value = "请输入未来某一时间！";
	}
	else{
		Js();
		timer = setInterval(Js,1000);
	}
	
}
	

