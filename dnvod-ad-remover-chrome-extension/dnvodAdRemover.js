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

	// remove play page right side next-to-video ad
	var parentNode = document.getElementsByClassName("bfq")[0];
	var childNode = document.getElementsByClassName("bfq-r")[0];
	if (parentNode && childNode) {
		console.log('Removing ad');
		parentNode.removeChild(childNode);
	}

	removeById('myaudient2'); // remove homepage header banner ad

	// remove list page banner ad
	var parentNode = document.getElementsByClassName("product")[0];
	var childNodes = document.getElementsByClassName("ggw-l");
	if (parentNode && childNodes) {
		console.log('Removing ad');
		for (var i = childNodes.length - 1; i >= 0; i--) {
			parentNode.removeChild(childNodes[i]);
		}
	}

	// remove detail page banner ad
	var parentNode = document.getElementsByClassName("left")[0];
	var childNodes = document.getElementsByClassName("ggw-l");
	if (parentNode && childNodes) {
		console.log('Removing ad');
		for (var i = childNodes.length - 1; i >= 0; i--) {
			parentNode.removeChild(childNodes[i]);
		}
	}

	// remove homepage next-to-logo ad
	var parentNode = document.getElementsByClassName("top")[0];
	var childNodes = document.getElementsByClassName("tgg");
	if (parentNode && childNodes) {
		console.log('Removing ad');
		for (var i = childNodes.length - 1; i >= 0; i--) {
			parentNode.removeChild(childNodes[i]);
		}
	}

	// remove right squre ad
	var parentNode = document.getElementsByClassName("right")[0];
	var childNodes = document.getElementsByClassName("r-gg");
	if (parentNode && childNodes) {
		console.log('Removing ad');
		for (var i = childNodes.length - 1; i >= 0; i--) {
			parentNode.removeChild(childNodes[i]);
		}
	}

	removeById('msg_winw'); // remove corner ad

	// remove body banner ad
	var parentNode = document.getElementsByClassName("main")[0];
	var childNodes = document.getElementsByClassName("ggw");
	if (parentNode && childNodes) {
		console.log('Removing ad');
		for (var i = childNodes.length - 1; i >= 0; i--) {
			parentNode.removeChild(childNodes[i]);
		}
	}

	// remove homepage list tail ad
	// document.getElementsByClassName('i-cp')[0].getElementsByTagName('ul')[0].getElementsByClassName('gg')
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
});

removeById = (id) => {
	var childNode = document.getElementById(id);
	if (childNode) {
		childNode.parentElement.removeChild(childNode);
	}
}

