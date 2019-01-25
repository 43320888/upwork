(() => {
	const x = new Date().getTime() + 30000;
	const j = document.querySelector('h1 div');

	backTimer(x, j);

	function backTimer(x, j) {
		let i = new Date().getTime();
		if (i < x) {
			j.innerHTML = new Date(x - i).toLocaleTimeString();
			setTimeout(backTimer, 500);
		}
		else {
			// j.innerHTML = "00:00:00";
			document.write = 'Time is over';
		}
	}
})()
