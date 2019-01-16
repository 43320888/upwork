/* eslint-disable quote-props */
// eslint-disable-next-line no-unused-vars, no-undef
const theWheel3 = new Winwheel({
	'canvasId': 'canvas3',
	'numSegments': 3,
	'textAlignment': 'outer',
	'textFontWeight': 'normal',
	'textOrientation': 'curved',
	'segments': [
		{ 'textStrokeStyle': 'rgb(200, 50, 75)', 'fillStyle': '#caf5ff', 'text': '5 nights\n in \nMexico' },
		{ 'textStrokeStyle' : 'aqua', 'fillStyle': '#f9c2fe', 'text': '3 nights\nin\nVegas' },
		{ 'fillStyle': '#fdf6cf', 'text': '$ 100\nRestaurant\nGift' },
	],
});

function alignContent() {
	document.getElementsByClassName('spin-table')[0].style.height = `${document.documentElement.clientHeight}px`;
	document.getElementsByClassName('spin-table')[0].firstElementChild.style.marginTop = `${document.getElementsByClassName('spin-table')[0].clientHeight / 2 - document.getElementsByClassName('spin-table')[0].firstElementChild.clientHeight / 2}px`;
}
alignContent();
window.onresize = alignContent;
