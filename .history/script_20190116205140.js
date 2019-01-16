/* eslint-disable quote-props */
// eslint-disable-next-line no-unused-vars, no-undef
const theWheel3 = new Winwheel({
	'canvasId': 'canvas3',
	'numSegments': 3,
	'textAlignment': 'outer',
	'segments': [
		{ 'fillStyle': '#eae56f', 'text': '5 nights in Mexico' },
		{ 'fillStyle': '#89f26e', 'text': '3 nights in Vegas' },
		{ 'fillStyle': '#7de6ef', 'text': '$ 100 Restaurant Gift' },
	],
});

function alignContent() {
	document.getElementsByClassName('spin-table')[0].style.height = `${document.documentElement.clientHeight}px`;
	document.getElementsByClassName('spin-table')[0].firstElementChild.style.marginTop = `${document.getElementsByClassName('spin-table')[0].clientHeight / 2 - document.getElementsByClassName('spin-table')[0].firstElementChild.clientHeight / 2}px`;
}
alignContent();
window.onresize = alignContent;
