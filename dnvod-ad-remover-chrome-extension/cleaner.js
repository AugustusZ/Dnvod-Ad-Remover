$(document).ready(() => {
	adSelectors.map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			element.parentElement.removeChild(element);
		});
	});
});
