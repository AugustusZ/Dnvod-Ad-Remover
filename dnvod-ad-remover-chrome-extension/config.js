var jumpLength = 10;
var helpUrl = 'https://augustusz.github.io/Dnvod-Ad-Remover/block-flash.html';
var help = `<span style="color:yellow">安装插件仍有广告？尝试 <a href='${helpUrl}' target="_blank">&nbsp;禁用 Flash&nbsp;</a><span>`;
var tips = `【全屏：双击】【暂停/播放：<kbd>space</kbd> 或 <kbd>enter</kbd>】【前进/后退 ${jumpLength}s：<kbd>&rarr;</kbd>/<kbd>&larr;</kbd>】`;
var loaderSvg = `
	<!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL http://samherbert.net/svg-loaders/-->
	<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
				<stop stop-color="#fff" stop-opacity="0" offset="0%"/>
				<stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>
				<stop stop-color="#fff" offset="100%"/>
			</linearGradient>
		</defs>
		<g fill="none" fill-rule="evenodd">
			<g transform="translate(1 1)">
				<path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur="0.9s"
						repeatCount="indefinite" />
				</path>
				<circle fill="#fff" cx="36" cy="18" r="1">
					<animateTransform
						attributeName="transform"
						type="rotate"
						from="0 18 18"
						to="360 18 18"
						dur="0.9s"
						repeatCount="indefinite" />
				</circle>
			</g>
		</g>
	</svg>
`
var loaderHtml = `<div id="loading" style="position:absolute;z-index:100;width:1240px;height:697px;display:flex;flex-direction:column;justify-content:center;align-items:center;"><div>${loaderSvg}</div><div style="color:white;font-size:20px;margin-top:12px;letter-spacing:4px;">视频加载中</div></div>`
var videoTemplate = (src, id) => `<video controls="controls" src=${src} id="${id}" autoplay></video>`;

var vars = [
	'_vp',
	'pendingVideo'
];

var adSelectors = [ // for adRemover.js
	"#myaudient2", // homepage header banner ad
	".whole>div:last-of-type", // all pages' corner popup window ad
	"#PF", // homepage big banner ad
	".tgg", // homepage next-to-logo ad
	".r-gg", // right squre ad
	".ggw", // body banner ad
	".ggw-l", // list page banner ad
	".ggw-l", // detail page banner ad
	".bfq-r", // play page next-to-video ad
	".ads-control", // play page video-covering ad
	".button-toggle", // play page video corner VIP ad
	".clickbg", // side ads
	".box", // side ads
	".gg" // homepage list tail ad
];

var playlistSelectors = [
	'.bfan-n>a',
	'.bfan-v>a'
];

var playerSelectors = [
	'#ckplayer_a0',
	'#ckplayer_a1'
];

var playerStyles = {
	'width': '1240px',
	'height': '697px'
};

var styles = { // for enhancer.js
	'#ckplayer_a1': playerStyles,
	'embed#ckplayer_a1': playerStyles, // for Flash
	'.bfq': {
		'height': '740px',
		'margin-top': '0',
		'z-index': '9999',
		'position': 'relative'
	},
	'.bfq-l': {
		'width': '1240px',
		'height': '697px',
		'padding': '0'
	},
	'#a1': {
		'width': '1240px',
		'height': '697px'
	},
	'#bfy_title': {
		'padding-left': '10px',
		'margin-top': '705px',
		'width': '1230px',
		'z-index': '0',
		'position': 'absolute'
	},
	'.button-vip': {
		'color': 'red',
		'margin-top': '0'
	},
	'#video': {
		'margin-top': '0'
	},
	'kbd': {
		'font': '11px "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
		'display': 'inline-block',
		'padding': '3px 5px',
		'font-size': '11px',
		'line-height': '10px',
		'color': '#444d56',
		'vertical-align': 'middle',
		'background-color': '#fafbfc',
		'border': 'solid 1px #c6cbd1',
		'border-bottom-color': '#959da5',
		'border-radius': '3px',
		'box-shadow': 'inset 0 -1px 0 #959da5'
	}
};
