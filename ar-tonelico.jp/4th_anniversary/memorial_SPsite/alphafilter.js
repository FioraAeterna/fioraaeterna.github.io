
// JavaScript Document

/*--------------------------------------------------------------------------*
 *  
 *  alphafilter JavaScript Library beta13
 *  
 *  MIT-style license. 
 *  http://blog.webcreativepark.net/2007/02/01-233315.html
 * 
 *  2007-2009 Kazuma Nishihata 
 *  http://www.to-r.net
 *  
 *--------------------------------------------------------------------------*/
new function(){
	try{
		if (navigator.userAgent.indexOf("MSIE")!= -1 && navigator.appVersion.indexOf("6.0")!= -1) {//for old ie
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
					newimg.style.zoom = "1";
					newimg.style.width   = element.width;
					newimg.style.height  = element.height;
					newimg.style.styleFloat   = element.align;
					newimg.style.filter  = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+element.src+",sizingMethod='scale')";
					newimg.originalSrc = element.src;
					if (element.parentNode.tagName == "A") {
						element.parentNode.style.cursor = "pointer";
						element.parentNode.style.position="relative";
						newimg.style.cursor = "pointer";
					}
					newimg.images = new Image();
					newimg.images.src = element.src;
					element.className.split(/\s+/);
					
					element.parentNode.insertBefore(newimg,element)
					element.style.display="none";
				}else{
					var anchors = element.getElementsByTagName("a");
					for (var j=0; j<anchors.length; j++) {
						var anchor = anchors[j];
						anchor.style.position="relative";
						anchor.style.cursor="pointer";
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
					element.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+newimg+",sizingMethod='scale')";
					element.style.background = "none";
				}
			}
		}
	}catch(e){}
	function imageReplace(){
		var btnClassName = "btn";
		var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
		for (var i = 0; i < objAll.length; i++) {
			var btn=false;
			var eltClass = objAll[i].className.split(/\s+/);
			for (var j = 0; j < eltClass.length; j++) {
				if (eltClass[j] == btnClassName)btn = true;
			}
			if(btn == true){
				if(objAll[i].originalSrc){
					objAll[i].rolloverSrc = objAll[i].originalSrc.replace(/(\.gif|\.jpg|\.png)$/,"_on$1");
						objAll[i].onmouseover = function(){
							this.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+this.rolloverSrc+",sizingMethod='scale')";
						}
						objAll[i].onmouseout = function(){
							this.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+this.originalSrc+",sizingMethod='scale')";
						}
				}else{
					if(objAll[i].nodeName=="IMG"){
						objAll[i].originalSrc = objAll[i].src
						objAll[i].rolloverSrc = objAll[i].src.replace(/(\.gif|\.jpg|\.png)$/,"_on$1")
						objAll[i].onmouseover = function(){
							this.src = this.rolloverSrc;
						}
						objAll[i].onmouseout = function(){
							this.src = this.originalSrc;
						}
					}
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
	function addEvent(elm,listener,fn){
		try{
			elm.addEventListener(listener,fn,false);
		}catch(e){
			elm.attachEvent("on"+listener,fn);
		}
	}
	addEvent(window,"load",imageReplace)
}