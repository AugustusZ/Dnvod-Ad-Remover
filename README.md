# Dnvod Ad Remover
This is a tool created to remove ad on www.dnvod.tv.

## Prerequisites
HTML5 player should be enabled for you browser. See **[Note](#Note)** for more details. 
 
## Steps
1. Show **Bookmarks Bar** (Chrome) or **Favorites Bar** (Safari) in your browser (<kbd>Shift</kbd> + <kbd>Command</kbd> + <kbd>B</kbd>).
2. Drag and drop this link <a href="javascript:(function(){document.getElementsByClassName('HTML5-only')[0].removeChild(document.getElementsByClassName('ads-control')[0]);})();">Remove Dnvod Ad</a> into the **Bar** so that you have a new bookmark named *Remove Dnvod Ad* just created.
2. Click the new bookmark when you need to remove the ad from a dnvod video page.

## Explanation
You can find the ad in the DOM element `div.HTML5-only`. So my approach is simply removing its child element `div.ads-control` from it:

	var parentNode = document.getElementsByClassName("HTML5-only")[0];
	var childNode = document.getElementsByClassName("ads-control")[0];
	parentNode.removeChild(childNode);

A more concise version:

	document.getElementsByClassName('HTML5-only')[0].removeChild(document.getElementsByClassName('ads-control')[0]);
	
This is pretty straightforward. The tricky part is how to run the code above within a webpage.

<a name="Note"></a>
## Note
1. Since the way an ad is shown is subject to change, this tool might not work forever. Make good use of it before it's gone.
2. This tool only works with HTML5 player. So if it did not work in your Chrome,
	- Update Chrome to the latest version and make sure to disable Flash player so that HTML5 player is automatically enabled and this tool would work hopefully. The way to disable Flash in Chrome: Go to **Settings** | Show **Advanced** settings | **Privacy and security** | **Content settings** | **Flash**, OR simply search "Flash" in **Settings**, then **Block sites from running Flash** and restart your browser. If you are not willing to block, try **Ask first**. 
	- OR install Google Chrome Canary.

## Acknowledgment
Thanks to [JBWKZsf](https://github.com/JBWKZsf) and [kevinscake](https://github.com/kevinscake) for testing!
This tool is inspired by http://zythum.free.bg/youkuhtml5playerbookmark/ 
