var hasScrolledBefore = false;	

window.onload = _ => {
	var player = getPlayer();
	var playerElement = player.get(0);

	player.on('canplay', _ => {
		// autoplay
		playerElement.play();

		// center video player
		if (!hasScrolledBefore) {
			window.scrollTo(0, 0.5 * (player.height() - window.innerHeight));
			hasScrolledBefore = true;
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
};

// disable "pressing spacebar to scroll page"
window.addEventListener('keydown', (e) => {
	if (e.keyCode == 32 && e.target == document.body) { // 32: spacebar
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

getPlayer = _ => {
	return $('#ckplayer_a1');
}
