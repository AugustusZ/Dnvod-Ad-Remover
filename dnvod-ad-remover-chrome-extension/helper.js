var inject = injectee => {
  injectee.forEach(filename => {
    let newElement;
    if (filename.endsWith('.css')) {
      newElement = document.createElement('link');
      newElement.rel = 'stylesheet';
      newElement.href = chrome.extension.getURL(filename);
    } else if (filename.endsWith('.js')) {
      newElement = document.createElement('script');
      newElement.src = chrome.extension.getURL(filename);
      newElement.onload = function() {
        this.remove();
      };
    } else {
      return;
    }
    (document.head || document.documentElement).appendChild(newElement);
  });
};

var stylesheets = ['style.css'];
var enhancerScripts = ['enhancer.js'];
var cleanerScripts = ['config.js', 'jquery-3.2.1.slim.min.js', 'cleaner.js'];
