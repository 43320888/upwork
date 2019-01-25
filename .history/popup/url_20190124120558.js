(() => {
	const regexp = /winningSegment=([^&]+)/i;
	let GetValue = '';
	if (!!regexp.exec(document.location.search))
		GetValue = regexp.exec(document.location.search)[1];
		document.querySelector('h1').insertAdjacentText('afterbegin', GetValue);
})();