var oBtn = document.getElementById("btn");
// var oText = document.getElementsByTagName("textarea")[0];
var oP1 = document.getElementById("p1");
var oP2 = document.getElementById("p2");
oBtn.onclick = function(){
	var str = oP1.innerHTML;     //获取输入的字
	var arr = str.split('');   //拆分为单个数组
	var arr1 = str.split('');
	//文字一个一个显示
	var i = 0;
	var timer = setInterval(function(){
		oP2.innerHTML += arr[i];
		i++;
		if(i==arr.length){
			clearInterval(timer);
		}
	},1000);
	//文字一个一个消失
	var k = 0;
	var timer1 = setInterval(function(){
		var str1="";
		arr1.shift();
		for(var j=0;j<arr1.length;j++){
			str1 += arr1[j];
		}
		oP1.innerHTML = str1;
		k++;
		if(k==arr1.length){
			clearInterval(timer1);
		}
	},1000);
}

