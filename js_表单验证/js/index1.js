var aInput = document.getElementsByClassName("input");
var aTip = document.getElementsByClassName("tip");
var arr = [/\w+@[a-zA-Z0-9]{1,3}\.com/,/1\d{10}/,/.{6,10}/];
// console.log(arr[0]);
function tip(i){
	console.log(aInput[i]);
	aInput[i].onblur = function(){
		aInput[i].index = i;
		var str = this.value;
		if(this.index!=3){
			var rel = arr[this.index];
			if(str && !rel.test(str)){
				aTip[this.index].innerHTML = "您输入的格式不正确，请重新输入！";
				this.onfocus = function(){
					aTip[this.index].innerHTML = "";
					this.value = "";
				}
			}
		}
		else{
			var str4 = aInput[2].value;
			if(str && str != str4){
				aTip[this.index].innerHTML = "您输入的密码与之前不符，请重新输入！";
				this.onfocus = function(){
					aTip[this.index].innerHTML = "";
					this.value = "";
				}
			}
		}
	}
}
for(var i=0;i<aInput.length;i++){
	tip(i);
	// console.log(i);
}	




