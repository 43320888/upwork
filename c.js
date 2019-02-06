/* eslint-disable quote-props, no-unused-vars, no-undef */
/**
 * Used names:
 * variable: 	configSlotMachine777theMostUniqueName
 * ID: 		canvasSlotMachine777theMostUniqueName
 * class:	appSlotMachine777theMostUniqueName
 * files: 	configSlotMachine777theMostUniqueName.js
 * 		appSlotMachine777theMostUniqueName.js
 * attribute:	data-state
 * cookies:	jackpot
 * 		name
 */
(() => {
	const insertScript = (src) => {
		const script = document.createElement('script');
		script.src = src;
		script.async = false;
		document.head.appendChild(script);
	};
	/* Change file link */
	insertScript('appSlotMachine777theMostUniqueName.js');
})();

/* CONFIG */
const configSlotMachine777theMostUniqueName = () => {
	const pictures = {

		/* Uncomment these links or insert your own links */
		wrapper: 'images/Covers.jpg',
		title: 'images/casino.svg',
		pin: 'images/pin.png',
		table: 'images/wheel_1-min.png',
		spin: 'images/start_button.png',
		spinAfterClick: 'images/logo.png',
	};

	const pop = {

		/* These samples are downloaded from a sound hosting. Put your own if you want */
		while: 'sounds/Kids_Music_3.mp3',
		after: 'sounds/clap4.mp3',
		segment: 'sounds/tick.mp3',
	};

	/* Sets the fixed height of the container
	For example:
		tableHeight = '140px'; mean 140 pixels (at least 140 pixels)
		tableHeight = '';  mean fullscreen
		tableHeight = '80%' mean height is 80% of the width. */
	const tableHeight = ''/* '80%' *//* '140px' */;

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
	const salute = 'salute/3.html'/* 'salute/5.html' *//* 'salute/7.html' */;

	/* Form Filling Page
	re-comment so that the window pops up on the current page */
	const postType = /* 'new page' */ 'current page';

	/* in seconds */
	const winDelay = 7;

	/* Form Filling Page link */
	const contactForm = 'popup/index2.html';


	/* Other settings */
	const power = 'LOW'/* 'MED' *//* 'HIGH' */;

	return {
		pictures,
		tableHeight,
		segments,
		pop,
		postType,
		salute,
		contactForm,
		power,
		winDelay,
	};
};
