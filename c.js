/* eslint-disable quote-props, no-unused-vars, no-undef */
/**
 * Used names:
 * variable: 	configSlotMachine777theMostUniqueName
 * ID: 		canvasSlotMachine777theMostUniqueName
 * classes: 	appSlotMachine777theMostUniqueName
 * 		animateSlotMachine777theMostUniqueName
 * files: 	configSlotMachine777theMostUniqueName.js
 * 		appSlotMachine777theMostUniqueName.js
 * attribute:	data-state
 */
(() => {
	const insertScript = (src) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	};
	/* change file link */
	insertScript('appSlotMachine777theMostUniqueName.js');
})();

/* CONFIG */
const configSlotMachine777theMostUniqueName = () => {

	const pictures = {

		/* Uncomment these links or insert your own links */
		wrapper: 'images/Covers.jpg',
		title: 'images/casino.svg',
		pin: 'images/pin.png',
		table: 'images/wheel.png',
		spin: 'images/start_button.png',
		spinAfterClick: 'images/logo.png',
	};

	const sounds = {

		/* These samples are downloaded from a sound hosting. Put your own if you want */
		whileWheelSpin: 'sounds/Kids_Music_3.mp3',
		afterWheelSpin: 'sounds/clap4.mp3',
		segmentTriggers: 'sounds/tick.mp3',
		pinTriggers: '',
	};

	/* Sets the fixed height of the container
	For example: tableHeight = '100'; mean 100 pixels 
	tableHeight = '';  mean 100% */
	const tableHeight = '';


	const segments = [

		/* Replace 'text' with your own.
		'win': true setting Winning Prizes
		'win': false forbid
		 */
		{ 'text': 'HOTTEST WINGS', 'win': false },
		{ 'text': 'DINNER FOR TWO', 'win': true },
		{ 'text': 'DESSERT', 'win': true },
		{ 'text': '20 percent COUPON', 'win': true },
		{ 'text': 'SORRY', 'win': false },
		{ 'text': 'GOLDEN TICKET', 'win': false },
	];

	/* Link to the page with a salute.
	Replace links with your links. */
	const salute = 'salute/3.html' /* 'salute/5.html' */ /* 'salute/7.html' */;

	/* Form Filling Page
	re-comment so that the window pops up on the current page */
	const postType = 'new page' /* 'current page' */;

	/* Form Filling Page link */
	const contactForm = 'popup/index.html';

	return {
		pictures,
		tableHeight,
		segments,
		sounds,
		postType,
		salute,
		contactForm,
	};
};
