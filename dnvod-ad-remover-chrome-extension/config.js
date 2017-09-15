var jumpLength = 10;
var helpUrl = 'https://augustusz.github.io/Dnvod-Ad-Remover/block-flash.html';
var help = `<span style="color:yellow">安装插件仍有广告？尝试 <a href='${helpUrl}' target="_blank">&nbsp;禁用 Flash&nbsp;</a><span>`;
var tips = `【全屏：双击】【暂停/播放：<kbd>space</kbd> 或 <kbd>enter</kbd>】【前进/后退 ${jumpLength}s：<kbd>&rarr;</kbd>/<kbd>&larr;</kbd>】`;
var videoTemplate = (src, id) => `<video controls="controls" src=${src} id="${id}" autoplay></video>`;

var vars = [
	'_vp',
	'pendingVideo'
];

var adSelectors = [ // for adRemover.js
	"#a2", // homepage BIG banner ad
	"#myaudient2", // homepage header banner ad
	"#z", // all pages' corner popup window ad
	".tgg", // homepage next-to-logo ad
	".r-gg", // right squre ad
	".ggw", // body banner ad
	".ggw-l", // list page banner ad
	".ggw-l", // detail page banner ad
	".bfq-r", // play page next-to-video ad
	".ads-control", // play page video-covering ad
	".button-toggle", // play page video corner VIP ad
	".clickbg", // side ads
	".box", // side ads
	".gg" // homepage list tail ad
];

var playlistSelectors = [
	'.bfan-n>a',
	'.bfan-v>a'
];

var playerSelectors = [
	'#ckplayer_a0',
	'#ckplayer_a1'
];

var playerStyles = {
	'width': '1240px',
	'height': '697px'
};

var styles = { // for enhancer.js
	'#ckplayer_a1': playerStyles,
	'embed#ckplayer_a1': playerStyles, // for Flash
	'.bfq': {
		'height': '740px',
		'margin-top': '0',
		'z-index': '9999',
		'position': 'relative'
	},
	'.bfq-l': {
		'width': '1240px',
		'height': '697px',
		'padding': '0'
	},
	'#a1': {
		'width': '1240px',
		'height': '697px'
	},
	'#bfy_title': {
		'padding-left': '10px',
		'margin-top': '705px',
		'width': '1230px',
		'z-index': '0',
		'position': 'absolute'
	},
	'.button-vip': {
		'color': 'red',
		'margin-top': '0'
	},
	'#video': {
		'margin-top': '0'
	},
	'kbd': {
		'font': '11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
		'display': 'inline-block',
		'padding': '3px 5px',
		'font-size': '11px',
		'line-height': '10px',
		'color': '#444d56',
		'vertical-align': 'middle',
		'background-color': '#fafbfc',
		'border': 'solid 1px #c6cbd1',
		'border-bottom-color': '#959da5',
		'border-radius': '3px',
		'box-shadow': 'inset 0 -1px 0 #959da5'
	}
};
