var jumpLength = 10;
var helpUrl = 'https://augustusz.github.io/Dnvod-Ad-Remover/block-flash.html';
var help = `<span style="color:yellow">安装插件仍有广告？尝试 <a href='${helpUrl}' target="_blank">&nbsp;禁用 Flash&nbsp;</a><span>`;
var tips = `【全屏：双击】【暂停/播放：<kbd>space</kbd> 或 <kbd>enter</kbd>】【前进/后退 ${jumpLength}s：<kbd>&rarr;</kbd>/<kbd>&larr;</kbd>】`;
var loaderSvg =
  '<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a"><stop stop-color="#fff" stop-opacity="0" offset="0%"/><stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/><stop stop-color="#fff" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)"><path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" /></path><circle fill="#fff" cx="36" cy="18" r="1"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s" repeatCount="indefinite" /></circle></g></g></svg>';
var loaderHtml = `<div id="loading" style="position:absolute;z-index:100;width:1240px;height:697px;display:flex;flex-direction:column;justify-content:center;align-items:center;"><div>${loaderSvg}</div><div style="color:white;font-size:20px;margin-top:12px;letter-spacing:4px;">视频加载中</div></div>`;
var videoTemplate = (src, id) =>
  `<video controls controlsList="noremoteplayback" src=${src} id="${id}" autoplay></video>`;
var vars = ['_vp', 'pendingVideo'];
var playlistSelectors = ['.bfan-n>a', '.bfan-v>a'];
var playerSelectors = ['#ckplayer_a0', '#ckplayer_a1'];
var adSelectors = [
  // for cleaner.js
  'div[id^="_"]', // homepage big banner
  '.timer', // timer for homepage big banner
  '.tgg', // homepage next-to-logo ad
  '.r-gg', // right squre ad
  '.ggw', // body banner ad
  '.ggw-l', // list page banner ad
  '.ggw-l', // detail page banner ad
  '.bfq-r', // play page next-to-video ad
  '.ads-control', // play page video-covering ad
  '.button-toggle', // play page video corner VIP ad
  '.clickbg', // side ads
  '.box', // side ads
  '.gg' // homepage list tail ad
];
var playerStyles = {
  width: '1240px',
  height: '697px'
};
