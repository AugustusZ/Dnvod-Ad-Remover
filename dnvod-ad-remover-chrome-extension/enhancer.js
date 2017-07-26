window.onload = _ => {
	var player = $('#ckplayer_a1');
	var playerElement = player.get(0);

	// autoplay
	playerElement.play();

	// scroll to center
	window.scrollTo(0, 0.5 * (player.height() - window.innerHeight));

	// add <double click : toggle fullscreen>
	player.dblclick(_ => {
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
};

// show tips
$(document).ready(_ => {
	$('.button-vip').prepend(tips);
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
