document.addEventListener('DOMNodeInserted', function (event) {
	autoplay();
	removeAds();
});

autoplay = () => {
	// auto play
	var videoPlayer = document.getElementsByTagName('video')[0];
	if (videoPlayer) {
		videoPlayer.oncanplay = (_ => {
			console.log('Autoplaying');
			videoPlayer.play();
		});
	}
}

removeNode = (node) => {
	if (node) {
		node.parentElement.removeChild(node);
	}
}

removeById = (id) => {
	var node = document.getElementById(id);
	removeNode(node);
}

removeClassFromClass = (className) => {
	var childNodes = document.getElementsByClassName(className);
	for (var j = childNodes.length - 1; j >= 0; j--) {
		removeNode(childNodes[j]);
	}
}

removeAds = () => {
	removeClassFromClass('ads-control'); // remove video-covering ad
	removeClassFromClass('bfq-r'); // remove play page right side next-to-video ad
	removeById('myaudient2'); // remove homepage header banner ad
	removeClassFromClass('ggw-l'); // remove list page banner ad
	removeClassFromClass('ggw-l'); // remove detail page banner ad
	removeClassFromClass('tgg'); // remove homepage next-to-logo ad
	removeClassFromClass('r-gg'); 	// remove right squre ad
	removeById('msg_winw'); // remove corner window ad
	removeClassFromClass('ggw'); // remove body banner ad

	// remove homepage list tail ad
	var parentNodes = document.getElementsByClassName('i-cp');
	for (var i = parentNodes.length - 1; i >= 0; i--) {
		var childNodes = parentNodes[i].getElementsByTagName('ul');
		for (var j = childNodes.length - 1; j >= 0; j--) {
			var grandchildNode = childNodes[j].getElementsByClassName('gg')[0];
			if (grandchildNode) {
				childNodes[j].removeChild(grandchildNode);
			}
		}
	}
}


