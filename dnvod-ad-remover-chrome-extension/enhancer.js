window.onload = () => {
	var interval = setInterval(() => {
		if (window[vars[0]] && window[vars[0]][vars[1]] && window[vars[0]][vars[1]].length > 0) {
			clearInterval(interval);

			// get video url
			var str = window[vars[0]][vars[1]][0];
			var videoUrl = str.slice(0, str.lastIndexOf('->'));

			// replace video element
			var player = $(playerSelectors[1]);
			player.parent().append(loaderHtml);
			player.parent().append(videoTemplate(videoUrl, playerSelectors[0].slice(1)));
			player.remove();
			player = $(playerSelectors[0]);
			player.css(playerStyles);
			var playerElement = player.get(0);

			player.on('canplay', () => {
				// remove loader
				$('#loading').remove();
			});

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
		}
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
var onKeyDown = function (event) {
	if (event.keyCode == 32 && event.target == document.body) { // 32: spacebar
		event.preventDefault();
	}
}

// restyle video player
var updateStyle = function (event) {
	Object.keys(styles).map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			$(selector).css(styles[selector]);
		});
	});
};

window.addEventListener('keydown', onKeyDown, false);

document.addEventListener('DOMNodeInserted', updateStyle, false);

var playNext = (selector) => {
	var anchors = $(selector);
	var currentPageURI = decodeURIComponent(location.href).toLowerCase();
	anchors.each((index, element) => {
		var anchorURI = decodeURIComponent(element.href).toLowerCase();
		window.removeEventListener('keydown', onKeyDown, false);
		if (anchorURI === currentPageURI && index + 1 < anchors.length) {
			location.href = anchors[index + 1].href;
		}
	});
};

// wait for 2 secs to render the new style and then remove the event listener.
setTimeout(() => {
	document.removeEventListener('DOMNodeInserted', updateStyle, false);
}, 2000);
