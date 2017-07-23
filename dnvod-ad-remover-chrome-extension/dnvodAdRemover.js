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

var hasScrolledBefore = false;	
var dblcount = 0;

window.onload = _ => {
	var player = $('#ckplayer_a1');
	player.on('canplay', _ => {
		// autoplay
		player.get(0).play();

		// center video player
		if (!hasScrolledBefore) {
			window.scrollTo(0, 0.5 * ($('#ckplayer_a1').height() - window.innerHeight));
			hasScrolledBefore = true;
		}	
	});

	player.dblclick(_ => {
		console.log(`double clicked x ${dblcount++}`)
	});
};

document.addEventListener('DOMNodeInserted', (event) => {
	// restyle video player
	Object.keys(styles).map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			$(selector).css(styles[selector]);
		});
	});

	// remove ads
	adSelectors.map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			element.parentElement.removeChild(element);
		});
	});
});
