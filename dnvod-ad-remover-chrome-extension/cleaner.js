$(document).ready(_ => {
	adSelectors.map((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			element.parentElement.removeChild(element);
		});
	});
});
