
// JavaScript Document

/*--------------------------------------------------------------------------*
 *  
 *  alphafilter JavaScript Library beta5
 *  
 *  MIT-style license. 
 *  
 *  2007 Kazuma Nishihata 
 *  http://www.webcreativepark.net
 *  
 *--------------------------------------------------------------------------*/

new function(){

	if(window.addEventListener){
		window.addEventListener('load',alphafilter,false);
	}else if(window.attachEvent){
		window.attachEvent('onload',alphafilter);
	}
	
	function alphafilter(){
		if (typeof document.body.style.maxHeight == "undefined") {//for old ie
			var elements = getElementsByClassName("alphafilter");
			for (var i=0; i<elements.length; i++) {
				var element = elements[i];
				if(element.nodeName=="IMG"){
					var newimg           = document.createElement("b");
					for(var key in element.currentStyle){
						newimg.style[key]=element.currentStyle[key];
					}
					newimg.className     = element.className;
					newimg.style.display = "inline-block";
					newimg.style.width   = element.width;
					newimg.style.height  = element.height;
					newimg.style.float   = element.align;
					newimg.style.filter  = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+element.src+",sizingMethod='scale')";
					element.parentNode.replaceChild(newimg,element);
				}else{
					var anchors = element.getElementsByTagName("a");
					for (var j=0; j<anchors.length; j++) {
						var anchor = anchors[j];
						anchor.style.position="relative";
					}
					var iputs = element.getElementsByTagName("input");
					for (var j=0; j<iputs.length; j++) {
						var iput = iputs[j];
						iput.style.position="relative";
					}
					var iputs = element.getElementsByTagName("textarea");
					for (var j=0; j<iputs.length; j++) {
						var iput = iputs[j];
						iput.style.position="relative";
					}
					var iputs = element.getElementsByTagName("select");
					for (var j=0; j<iputs.length; j++) {
						var iput = iputs[j];
						iput.style.position="relative";
					}
					var  newimg = element.currentStyle.backgroundImage || element.style.backgroundImage;
					newimg.match(/^url[("']+(.*\.png)[)"']+$/i)
					var newimg = RegExp.$1;
					element.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+newimg+",sizingMethod='image')";
					element.style.background = "none";
				}
			}
		}
	}
	
	function getElementsByClassName(className){
		var i, j, eltClass;
		var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
		var objCN = new Array();
		for (i = 0; i < objAll.length; i++) {
			eltClass = objAll[i].className.split(/\s+/);
			for (j = 0; j < eltClass.length; j++) {
				if (eltClass[j] == className) {
					objCN.push(objAll[i]);
					break;
				}
			}
		}
		return objCN;
	}
}