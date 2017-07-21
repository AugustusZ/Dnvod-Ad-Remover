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
	".gg" // remove homepage list tail ad
];

document.addEventListener('DOMNodeInserted', (event) => {
	// autoplay
	var video = document.getElementsByTagName('video')[0];
	if (video) {
		video.oncanplay = (_ => {
			video.play();
		});
	}

	// remove ads
	adSelectors.map((selector) => {
		document.querySelectorAll(selector).forEach((node) => {
			node.parentElement.removeChild(node);
		});
	});
});
