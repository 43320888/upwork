(() => {
	const regexp = /winningSegment=([^&]+)/i;
	let getValue = '';
	if (!!regexp.exec(document.location.search))
		getValue = regexp.exec(document.location.search)[1];
		debugger;
		document.querySelector('h1').insertAdjacentHTML('afterbegin', `Congratulations!!!<br>${TextEncoder.encode(getValue)}`);
})();