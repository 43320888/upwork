/* eslint-disable quote-props, no-unused-vars, no-undef */
/**
 * Used names:
 * variable: 	configSlotMachine777theMostUniqueName
 * ID: 		canvasSlotMachine777theMostUniqueName
 * class:	appSlotMachine777theMostUniqueName
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
	/* Change file link */
	insertScript('https://hacking.logbook.bizml.ru/upwork/appSlotMachine777theMostUniqueName.js');
})();

/* CONFIG */
const configSlotMachine777theMostUniqueName = () => {
	const pictures = {

		/* Uncomment these links or insert your own links */
		wrapper: 'https://hacking.logbook.bizml.ru/upwork/images/Covers.jpg',
		title: 'https://hacking.logbook.bizml.ru/upwork/images/casino.svg',
		pin: 'https://hacking.logbook.bizml.ru/upwork/images/pin.png',
		table: 'https://hacking.logbook.bizml.ru/upwork/images/wheel.png',
		spin: 'https://hacking.logbook.bizml.ru/upwork/images/start_button.png',
		spinAfterClick: 'https://hacking.logbook.bizml.ru/upwork/images/logo.png',
	};

	const sounds = {

		/* These samples are downloaded from a sound hosting. Put your own if you want */
		whileWheelSpin: 'https://hacking.logbook.bizml.ru/upwork/sounds/Kids_Music_3.mp3',
		afterWheelSpin: 'https://hacking.logbook.bizml.ru/upwork/sounds/clap4.mp3',
		segmentTriggers: 'https://hacking.logbook.bizml.ru/upwork/sounds/tick.mp3',
		pinTriggers: '',
	};

	/* Sets the fixed height of the container
	For example:
		tableHeight = '140px'; mean 140 pixels (at least 140 pixels)
		tableHeight = '';  mean fullscreen
		tableHeight = '80%' mean height is 80% of the width. */
	const tableHeight = /* '' */'80%'/* '140px' */;

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
	const salute = 'https://hacking.logbook.bizml.ru/upwork/salute/3.html'/* 'https://hacking.logbook.bizml.ru/upwork/salute/5.html' *//* 'https://hacking.logbook.bizml.ru/upwork/salute/7.html' */;

	/* Form Filling Page
	re-comment so that the window pops up on the current page */
	const postType = /* 'new page' */ 'current page';

	/* Form Filling Page link */
	const contactForm = 'https://hacking.logbook.bizml.ru/upwork/popup/index.html';


	/* Other settings */
	const power = /* 'LOW' *//* 'MED' */'HIGH';

	return {
		pictures,
		tableHeight,
		segments,
		sounds,
		postType,
		salute,
		contactForm,
		animationSettings,
	};
};
