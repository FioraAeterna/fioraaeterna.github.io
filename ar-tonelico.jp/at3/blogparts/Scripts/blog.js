/******************************************************************************
	�����ݒ�
******************************************************************************/
var gsTickerSwf_AN = "http://ar-tonelico.jp/at3/blogparts/blogparts.swf";

var gsTickerId_AN = "Ticker_AN";

// Tiker���쐬����
MakeTicker_AN();

/******************************************************************************
	�֐���		MakeTicker_AN
	�@�\		�e�B�b�J�[���쐬����
	
	����		�Ȃ�
	�o��		document.write�ɂ��HTML�o��
******************************************************************************/
function MakeTicker_AN(){
	var sTickerUrl = gsTickerSwf_AN;
	
	var sHtml = "";
	sHtml += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="180" height="390" id="' + gsTickerId_AN + '" align="middle">';
	sHtml += '<param name="allowScriptAccess" value="always" />';
	sHtml += '<param name="movie" value="' + sTickerUrl + '" />';
	sHtml += '<param name="quality" value="high" />';
	sHtml += '<param name="bgcolor" value="#ffffff" />';
	sHtml += '<param name="wmode" value="transparent" />';
	sHtml += '<embed wmode="transparent" src="' + sTickerUrl + '" quality="high" bgcolor="#ffffff" width="180" height="390" name="' + gsTickerId_AN + '" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	sHtml += '</object>';
	
	document.write(sHtml);
}
