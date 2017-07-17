document.addEventListener('DOMNodeInserted', (event) => {
	autoplay();
	removeAds();
});

autoplay = () => {
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
	var nodes = document.getElementsByClassName(className);
	for (var i = nodes.length - 1; i >= 0; i--) {
		removeNode(nodes[i]);
	}
}

removeAds = () => {
	removeById('myaudient2'); // remove homepage header banner ad
	removeById('msg_winw'); // remove all pages' corner window ad
	removeClassFromClass('tgg'); // remove homepage next-to-logo ad
	removeClassFromClass('r-gg'); // remove right squre ad
	removeClassFromClass('ggw'); // remove body banner ad
	removeClassFromClass('ggw-l'); // remove list page banner ad
	removeClassFromClass('ggw-l'); // remove detail page banner ad
	removeClassFromClass('bfq-r'); // remove play page next-to-video ad
	removeClassFromClass('ads-control'); // remove play page video-covering ad
	removeClassFromClass('gg'); // remove homepage list tail ad
}


