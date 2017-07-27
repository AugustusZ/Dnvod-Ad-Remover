var jumpLength = 10;
var tips = `【进入/退出全屏：双击】【暂停/播放：<kbd>space</kbd> 或 <kbd>enter</kbd>】【前进 ${jumpLength}s：<kbd>&rarr;</kbd>】【后退 ${jumpLength}s：<kbd>&larr;</kbd>】`;

var adSelectors = [ // for adRemover.js
	"#myaudient2", // remove homepage header banner ad
	"#msg_winw", // remove all pages' corner window ad
	".tgg", // remove homepage next-to-logo ad
	".r-gg", // remove right squre ad
	".ggw", // remove body banner ad
	".ggw-l", // remove list page banner ad
	".ggw-l", // remove detail page banner ad
	".bfq-r", // remove play page next-to-video ad
	".ads-control", // remove play page video-covering ad
	".button-toggle", // remove play page video corner VIP ad
	".clickbg", // remove side ads
	".box", // remove side ads
	".gg" // remove homepage list tail ad
];

var playlistSelectors = [
  	'.bfan-n>a',
  	'.bfan-v>a'
];

var styles = { // for enhancer.js
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
	'#ckplayer_a1': {
		'width': '1240px',
		'height': '697px'
	},
	'embed#ckplayer_a1': { // for Flash
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
