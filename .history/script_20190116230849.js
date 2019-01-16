/* eslint-disable quote-props */
// eslint-disable-next-line no-unused-vars, no-undef
const theWheel3 = new Winwheel({
	'canvasId': 'canvas3',
	'numSegments': 3,
	'textAlignment': 'outer',
	'textFontWeight': 'bold',
	'textFontSize': '24',
	'textOrientation': 'curved',
	'segments': [
		{'textStrokeStyle': 'rgb(200, 50, 75)', 'fillStyle': '#caf5ff', 'text': '5 nights\n in \nMexico'},
		{'textStrokeStyle': 'aqua', 'fillStyle': '#f9c2fe', 'text': '3 nights\nin\nVegas'},
		{'fillStyle': '#fdf6cf', 'text': '$ 100\nRestaurant\nGift'},
	],
	'animation':
		{
			'type': 'spinToStop',
			'duration': 5,
			'spins': 8,
			'callbackFinished' : 'alertPrize()'
		}
});
function alertPrize(prize) {
	document.body.querySelector('.spin-table').insertAdjacentHTML('beforeend', `<div class="modal">
	<li><input type="text" placeholder="name"></li>
	<li><input type="text" placeholder="email"></li>
	<li><input type="submit" placeholder="submit"></li>
</div>`);
}

function alignContent() {
	document.getElementsByClassName('spin-table')[0].style.height = `${document.documentElement.clientHeight}px`;
	document.getElementsByClassName('spin-table')[0].firstElementChild.style.marginTop = `${document.getElementsByClassName('spin-table')[0].clientHeight / 2 - document.getElementsByClassName('spin-table')[0].firstElementChild.clientHeight / 2}px`;
}
alignContent();
window.onresize = alignContent;
