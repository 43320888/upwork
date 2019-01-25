(() => {
	const x = ['00 ', '00 ', 60];
	const j = document.querySelector('h1 div');

	const backTimer = () => {
		if (x[2]) {
			j.innerHTML = (x[2] - 1).join(':');
			setTimeout(backTimer, 500);
		} else {
			// j.innerHTML = "00:00:00";
			document.body.innerHTML = '<h1>Time is over</h1>';
		}
	}
	backTimer();
})();
