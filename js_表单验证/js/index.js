var oInput1 = document.getElementById("input1");
var oInput2 = document.getElementById("input2");
var oInput3 = document.getElementById("input3");
var oInput4 = document.getElementById("input4");
var oInput5 = document.getElementById("input5");
var oTip1 = document.getElementById("tip1");
var oTip2 = document.getElementById("tip2");
var oTip3 = document.getElementById("tip3");
var oTip4 = document.getElementById("tip4");
	oInput1.onblur = function(){
		var str1 = oInput1.value;
		var re1 = /\w+@[a-zA-Z0-9]{1,3}\.com/;
		if(str1 && !re1.test(str1)){
			oTip1.innerHTML = "您输入的邮箱格式不正确，请重新输入！";
			oInput1.onfocus = function(){
				oTip1.innerHTML = "";
				oInput1.value = "";
			}
		}
	}
	oInput2.onblur = function(){
		var str2 = oInput2.value;
		var re2 = /1\d{10}/;
		if(str2 && !re2.test(str2)){
			oTip2.innerHTML = "您输入的电话号码格式不正确，请重新输入！";
			oInput2.onfocus = function(){
				oTip2.innerHTML = "";
				oInput2.value = "";
			}
		}
	}
	oInput3.onblur = function(){
		var str3 = oInput3.value;
		var re3 = /\d{6,10}/;
		if(str3 && !re3.test(str3)){
			oTip3.innerHTML = "您输入的密码位数不对，请重新输入！";
			oInput3.onfocus = function(){
				oTip3.innerHTML = "";
				oInput3.value = "";
			}
		}
	}
	oInput4.onblur = function(){
		var str3 = oInput3.value;
		var str4 = oInput4.value;
		if(str4 && (oInput3.value != oInput4.value)){
			oTip4.innerHTML = "您输入的密码与之前不符，请重新输入！";
			oInput4.onfocus = function(){
				oTip4.innerHTML = "";
				oInput4.value = "";
			}
		}
	}




