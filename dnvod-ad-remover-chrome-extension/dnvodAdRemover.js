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

window.onload = _ => {
	var player = getPlayer();
	player.on('canplay', _ => {
		// autoplay
		player.get(0).play();

		// center video player
		if (!hasScrolledBefore) {
			window.scrollTo(0, 0.5 * (player.height() - window.innerHeight));
			hasScrolledBefore = true;
		}	

		// add <click : play/pause>
		player.on('click', _ => {
			togglePlayer(player);
		});

		// add keypress shortcuts
		$(document).keyup((e) => {
			console.log(e.which);
			// 37: <--
			// 39: -->
			if (e.which === getCharCode(' ') || e.which === getCharCode('\r')) {
				togglePlayer(player);
			}
		});
	});
};

// disable "pressing spacebar to scroll page"
window.addEventListener('keydown', (e) => {
	if (e.keyCode == 32 && e.target == document.body) {
		e.preventDefault();
	}
});

document.addEventListener('DOMNodeInserted', _ => {
	// restyle video player
	Object.keys(styles).map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			$(selector).css(styles[selector]);
		});
	});

	// add <double click : toggle fullscreen>
	var player = getPlayer();
	player.dblclick(_ => {
		if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
		} else {
			player.get(0).webkitRequestFullscreen();
		}
	});

	// remove ads
	adSelectors.map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			element.parentElement.removeChild(element);
		});
	});
});

togglePlayer = (player) => {
	if (player.get(0).paused) {
		player.get(0).play();
	} else {
		player.get(0).pause();
	}
}

getPlayer = _ => {
	return $('#ckplayer_a1');
}

getCharCode = (ch) => {
	return ch.charCodeAt(0);
}
