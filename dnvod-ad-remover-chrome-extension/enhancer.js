window.onload = () => {
	var player = $('#ckplayer_a1');
	var playerElement = player.get(0);

	// autoplay next
	player.on('ended', () => {
		playlistSelectors.map((selector) => {
			playNext(selector);
		});
	});

	// scroll to center
	window.scrollTo(0, 0.5 * (player.height() - window.innerHeight));

	// add <double click : toggle fullscreen>
	player.dblclick(() => {
		if (document.webkitIsFullScreen) {
			document.webkitExitFullscreen();
		} else {
			playerElement.webkitRequestFullscreen();
		}
	});

	// add keypress shortcuts
	$(document).keyup((e) => {
		if (e.which == 32 || e.which == 13) { // 32: spacebar, 13: enter/return
			playerElement[playerElement.paused ? 'play' : 'pause']();
		} else if (e.which == 37) { // 37: <--
			playerElement.currentTime -= jumpLength;
		} else if (e.which == 39) { // 39: -->
			playerElement.currentTime += jumpLength;
		}
	});

	// remove pre-movie clip
	var interval = setInterval(() => {
		if (window['_vp'] && window['_vp']['pendingVideo'] && window['_vp']['pendingVideo'].length > 0) { 
			clearInterval(interval);
			var str = window['_vp']['pendingVideo'][0];
			var videoUrl = str.slice(0, str.lastIndexOf('->'));
			
			// update with new URL and play it
			player.attr('src', videoUrl);
			playerElement.autoplay = true;
			playerElement.load();
		}
		console.log('interval is going on');
	}, 100);
};

// show tips
$(document).ready(() => {
	$('.button-vip').prepend(tips);
	if ($('embed').length) {
		$('.button-vip').prepend(help);
	}
});

// disable "pressing spacebar to scroll page"
window.addEventListener('keydown', (e) => {
	if (e.keyCode == 32 && e.target == document.body) { // 32: spacebar
		e.preventDefault();
	}
});

// restyle video player
document.addEventListener('DOMNodeInserted', (event) => {
	Object.keys(styles).map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			$(selector).css(styles[selector]);
		});
	});
});

var playNext = (selector) => {
	var anchors = $(selector);
	var currentPageURI = decodeURIComponent(location.href).toLowerCase();
	anchors.each((index, element) => {
		var anchorURI = decodeURIComponent(element.href).toLowerCase();
		if (anchorURI === currentPageURI && index + 1 < anchors.length) {
			location.href = anchors[index + 1].href;
		}
	});
};
