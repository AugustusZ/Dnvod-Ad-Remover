var jumpLength = 8;

var adSelectors = [
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

var styles = {
	'.bfq': {
		'height': '743px',
		'margin-top': '0',
		'z-index': '9999',
		'position': 'relative'
	},
	'.bfq-l': {
		'width': '1240px',
		'height': '697px',
		'padding': '0'
	},
	'#ckplayer_a1': {
		'width': '1240px',
		'height': '697px'
	},
	'#bfy_title': {
		'margin-left': '10px',
		'margin-top': '705px',
		'width': '1235px',
		'z-index': '0',
		'position': 'absolute'
	},
	'#video': {
		'margin-top': '0'
	}
};
