var oInput = document.getElementsByTagName("input")[0];
mouseScroll(document,topFn,bottomFn);
function topFn(){
	oInput.value = parseInt(oInput.value) + 1;
}
function bottomFn(){
	oInput.value = parseInt(oInput.value) - 1;
}