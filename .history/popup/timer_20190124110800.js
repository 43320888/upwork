(() => {
	const x = ['00', '00', 60];
	const j = document.querySelector('h1 div');

	const backTimer = () => {
		if (x[2]) {
			x[2]--;
			j.innerHTML = x.join(' : ');
			setTimeout(backTimer, 500);
		} else {
			// j.innerHTML = "00:00:00";
			document.body.innerHTML = '<h1>Time is over</h1>';
		}
	}
	backTimer();
})();
