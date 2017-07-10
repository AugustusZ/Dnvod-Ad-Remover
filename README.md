# Dnvod Ad Remover
This is a tool created to remove ad on www.dnvod.tv.

## Installation and Usage

Please go see [this page](https://augustusz.github.io/Dnvod-Ad-Remover/).

## Explanation

This tool does three things.

### 1. Remove Ad


You can find the ad in the DOM element `div.HTML5-only`. So my approach is simply removing its child element `div.ads-control` from it:

	var parentNode = document.getElementsByClassName("HTML5-only")[0];
	var childNode = document.getElementsByClassName("ads-control")[0];
	parentNode.removeChild(childNode);

A more concise version:

	document.getElementsByClassName('HTML5-only')[0].removeChild(document.getElementsByClassName('ads-control')[0]);
	
### 2. Autoplay

It starts playing the video so that users do not have to click the play button by their own:

	document.getElementById('video').getElementsByTagName('video')[0].play();

### 3. Fullscreen

It makes the player enter fullscreen mode so that users do not have to click the fullscreen button by their own:

	document.getElementById('video').getElementsByTagName('video')[0].webkitRequestFullScreen();

## Code 

Code lies in the value of `href` attribute of the `<a>` element:
	
	javascript: (function() {
	    var p = document.getElementById('video').getElementsByTagName('video')[0];
	    p.play();
	    p.webkitRequestFullScreen();
	    document.getElementsByClassName('HTML5-only')[0].removeChild(document.getElementsByClassName('ads-control')[0]);
	})();
	
## Update

- 20170615: automatically start playing while removing the ad.
- 20170623: automatically enter fullscreen mode while removing the ad.

## Acknowledgment

Thanks to [JBWKZsf](https://github.com/JBWKZsf) and [kevinscake](https://github.com/kevinscake) for testing!
This tool is inspired by [YouKu HTML5 Player](http://zythum.free.bg/youkuhtml5playerbookmark/). 

## License 

MIT
