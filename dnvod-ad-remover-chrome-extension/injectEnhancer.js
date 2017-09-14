var cleanerScripts = ['enhancer.js'];

cleanerScripts.forEach(scriptName => {
	console.log(`INJECTING ${scriptName}...`);
	let s = document.createElement('script');
	s.src = chrome.extension.getURL(scriptName);
	s.onload = function() {
	    this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
	console.log(`${scriptName} INJECTIED!`);
})
