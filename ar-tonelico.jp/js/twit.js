
function twit_sch(ts_id) {

	if (ts_id == "all") {
		window.open('http://twitter.com/#search?q=%23tsp' + no,"","");
	} else {
		window.open('http://twittell.net/search/search.php?q=%23tsp' + no + '_t' +ts_id,"","");
	}

}



function twit(ts_id) {

var xmlhttp=false;

if(navigator.userAgent.indexOf("Opera") != -1){ // ������ɁuOpera�v���܂܂�Ă���ꍇ
	moji = document.getSelection();
} else if(navigator.userAgent.indexOf("MSIE") != -1){ // ������ɁuMSIE�v���܂܂�Ă���ꍇ
	moji=document.selection.createRange().text;
} else if(navigator.userAgent.indexOf("Firefox") != -1){ // ������ɁuFirefox�v���܂܂�Ă���ꍇ
	moji = document.getSelection();
} else if(navigator.userAgent.indexOf("Netscape") != -1){ // ������ɁuNetscape�v���܂܂�Ă���ꍇ
	moji = document.getSelection();
} else if(navigator.userAgent.indexOf("Safari") != -1){ // ������ɁuSafari�v���܂܂�Ă���ꍇ
	moji = window.getSelection();
} else {
	moji = document.getSelection();
}


if (moji == "") {
	if(navigator.userAgent.indexOf("Firefox") != -1){ // ������ɁuFirefox�v���܂܂�Ă���ꍇ
		moji = document.getElementById(ts_id).textContent;
	} else if(navigator.userAgent.indexOf("Netscape") != -1){ // ������ɁuNetscape�v���܂܂�Ă���ꍇ
		moji = document.getElementById(ts_id).textContent;
	} else {
		moji = document.getElementById(ts_id).innerText;
	}
}

window.open('../../../ar-tonelico.jp/js/twitc30f.html?posword='+ posword +'&no='+ no +'&ts_id='+ ts_id +'&pos='+ pos +'&moji='+encodeURIComponent(moji),"","");

}

