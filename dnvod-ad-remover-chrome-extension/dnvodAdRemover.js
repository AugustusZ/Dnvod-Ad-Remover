document.addEventListener('DOMNodeInserted', function (event) {
	// auto play
	var videoPlayer = document.getElementsByTagName('video')[0];
	if (videoPlayer) {
		videoPlayer.oncanplay = (_ => {
			console.log('Autoplaying');
			videoPlayer.play();
		});
	}

	// remove video ad
	var parentNode = document.getElementsByClassName("HTML5-only")[0];
	var childNode = document.getElementsByClassName("ads-control")[0];
	if (parentNode && childNode) {
		console.log('Removing ad');
		parentNode.removeChild(childNode);
	}

	// remove homepage corner ad
	var parentNode = document.getElementsByClassName("whole")[0];
	var childNode = document.getElementById("msg_winw");
	if (parentNode && childNode) {
		console.log('Removing ad');
		parentNode.removeChild(childNode);
	}

});
