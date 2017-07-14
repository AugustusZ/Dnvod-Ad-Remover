document.addEventListener('DOMNodeInserted', function (event) {
	// auto play
	var videoPlayer = document.getElementsByTagName('video')[0];
	if (videoPlayer) {
		videoPlayer.oncanplay = (_ => {
			console.log('Autoplaying');
			videoPlayer.play();
		});
	}

	// remove ad
	var parentNode = document.getElementsByClassName("HTML5-only")[0];
	var childNode = document.getElementsByClassName("ads-control")[0];
	if (parentNode && childNode) {
		console.log('Removing ad');
		parentNode.removeChild(childNode);
	}
});
