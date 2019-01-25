(() => {
	const regexp = /winningSegment=([^&]+)/i;
	let getValue = '';
	if (!!regexp.exec(document.location.search))
		getValue = regexp.exec(document.location.search)[1];
		document.querySelector('h1').before(getValue);
})();