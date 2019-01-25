/* eslint-disable quote-props, no-unused-vars, no-undef */
/**
 * Used names:
 * variable: 	configSlotMachine777theMostUniqueName
 * ID: 		canvasSlotMachine777theMostUniqueName
 * classes: 	appSlotMachine777theMostUniqueName
 * 		animateSlotMachine777theMostUniqueName
 * files: 	configSlotMachine777theMostUniqueName.js
 * 		appSlotMachine777theMostUniqueName.js
 */
(() => {
	const insertScript = (src) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	};
	insertScript('appSlotMachine777theMostUniqueName.js');
})();

const configSlotMachine777theMostUniqueName = () => {
	const pictures = {
		wrapper: 'images/Covers.jpg',
		title: 'images/casino.svg',
		pin: 'images/pin.png',
		table: 'images/wheel.png',
		spin: 'images/start_button.png',
	};

	const sounds = {
		// whileWheelSpin: 'sounds/Arabian_Salsa_1.mp3',
		// whileWheelSpin: 'sounds/CARTOONY.mp3',
		// whileWheelSpin: 'sounds/Kids_Music_1.mp3',
		// whileWheelSpin: 'sounds/Kids_Music_2.mp3',
		whileWheelSpin: 'sounds/Kids_Music_3.mp3',
		afterWheelSpin: 'sounds/clap4.mp3',
		// afterWheelSpin: 'sounds/clap3.mp3',
		// afterWheelSpin: 'sounds/clap2.mp3',
		// afterWheelSpin: 'sounds/clap1.mp3',
		segmentTriggers: 'sounds/tick.mp3',
		pinTriggers: '',
	};

	const tableHeight = '';

	const segments = [
		// { 'text': '5 nights in Mexico' },
		// { 'text': 'Restaurant Gift $100' },
		// { 'text': '3 nights in Vegas' },
		// { 'text': '5 nights in Mexico' },
		// { 'text': 'Restaurant Gift $100' },
		// { 'text': '3 nights in Vegas' },
		{ 'text': 'HOTTEST WINGS', 'win': true },
		{ 'text': 'DINNER FOR TWO', 'win': true },
		{ 'text': 'DESSERT', 'win': false },
		{ 'text': '20% COUPON', 'win': false },
		{ 'text': 'SORRY', 'win': false },
		{ 'text': 'GOLDEN TICKET', 'win': false },
	];

	return {
		pictures,
		tableHeight,
		segments,
		sounds,
	};
};
