/* eslint-disable quote-props, no-unused-vars, no-undef */
/**
 * app v=1.4 from 21.02.2019
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
		table: 'images/wheel_500-min.png',
		spin: 'images/start_button.png',
		spinAfterClick: 'images/logo.png',
	};

	const pop = {

		/* These samples are downloaded from a sound hosting. Put your own if you want */
		while: 'sounds/ticks10s.mp3',
		after: '',
		segment: '',
	};

	const tableHeight = {
		/* Sets the fixed height of the container
		For example:
			mainHeight = '140px'; mean 140 pixels (at least 140 pixels)
			mainHeight = '';  mean fullscreen
			mainHeight = '80%' mean height is 80% of the width. */
		mainHeight: /* '' */'500px'/* '140px' */,
		/* If necessary, set the height for the mobile below. */
		/* If not set, then the main height will be used. */
		mobileHeight: /* '' */'100%',
	};

	const segments = [

		/* Replace 'text' with your own.
		'win': true setting Winning Prizes
		'win': false forbid
		 */
		{ 'text': 'Orlando 3 nights', 'win': false },
		{ 'text': 'Atlantic City 1 nights', 'win': false },
		{ 'text': 'Mazatlan 5 nights', 'win': true },
		{ 'text': 'Daythona beach 3 nights', 'win': false },
		{ 'text': 'Miami Beach 3 nights', 'win': false },
		{ 'text': 'Nuevo Vallarta 5 nights', 'win': true },
		{ 'text': 'Cancun 5 nights', 'win': true },
		{ 'text': 'Myrtle Beach 3 nights', 'win': false },
		{ 'text': 'Puerto Penasca 5 nights', 'win': true },
		{ 'text': 'Las Vegas 3 nights', 'win': true },
		{ 'text': 'Acapulco 5 nights', 'win': true },
		{ 'text': 'Atlantic City 3 nights', 'win': false },
	];

	const title = /* true */false;

	const prestartSpinning = true/* false */;

	/* Link to the page with a salute.
	Replace links with your links. */
	const salute = 'salute/3.html'/* 'salute/5.html' *//* 'salute/7.html' */;

	/* Form Filling Page
	re-comment so that the window pops up on the current page */
	const postType = /* 'new page' */ 'current page';

	/* in seconds */
	const winDelay = 7;

	/* Form Filling Page link */
	const contactForm = 'popup/index.html';

	const canvasSize = 500;
	const popupSize = 0.5;
	const sPinSize = 0.24;

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
		title,
		prestartSpinning,
		canvasSize,
		popupSize,
		sPinSize,
	};
};
