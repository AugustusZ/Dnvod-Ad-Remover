var cleanerScripts = ['config.js', 'jquery-3.2.1.slim.min.js', 'cleaner.js'];

cleanerScripts.forEach(scriptName => {
	let s = document.createElement('script');
	s.src = chrome.extension.getURL(scriptName);
	s.onload = function () {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
});
