
function twit_sch(ts_id) {

	if (ts_id == "all") {
		window.open('http://twitter.com/#search?q=%23tsp' + no,"","");
	} else {
		window.open('http://twittell.net/search/search.php?q=%23tsp' + no + '_t' +ts_id,"","");
	}

}



function twit(ts_id) {

var xmlhttp=false;

if(navigator.userAgent.indexOf("Opera") != -1){ // 文字列に「Opera」が含まれている場合
	moji = document.getSelection();
} else if(navigator.userAgent.indexOf("MSIE") != -1){ // 文字列に「MSIE」が含まれている場合
	moji=document.selection.createRange().text;
} else if(navigator.userAgent.indexOf("Firefox") != -1){ // 文字列に「Firefox」が含まれている場合
	moji = document.getSelection();
} else if(navigator.userAgent.indexOf("Netscape") != -1){ // 文字列に「Netscape」が含まれている場合
	moji = document.getSelection();
} else if(navigator.userAgent.indexOf("Safari") != -1){ // 文字列に「Safari」が含まれている場合
	moji = window.getSelection();
} else {
	moji = document.getSelection();
}


if (moji == "") {
	if(navigator.userAgent.indexOf("Firefox") != -1){ // 文字列に「Firefox」が含まれている場合
		moji = document.getElementById(ts_id).textContent;
	} else if(navigator.userAgent.indexOf("Netscape") != -1){ // 文字列に「Netscape」が含まれている場合
		moji = document.getElementById(ts_id).textContent;
	} else {
		moji = document.getElementById(ts_id).innerText;
	}
}

window.open('../../../ar-tonelico.jp/js/twitc30f.html?posword='+ posword +'&no='+ no +'&ts_id='+ ts_id +'&pos='+ pos +'&moji='+encodeURIComponent(moji),"","");

}

