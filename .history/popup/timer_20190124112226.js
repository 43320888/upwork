(() => {
	const x = ['00', '00', 60];
	const j = document.querySelector('h1 div');

	const backTimer = () => {
		if (x[2]) {
			x[2]--;
			if (x[2] < 10) { debugger; j.innerHTML = `${x.join(' : ').substring(0, -1)}0${x[2]}` };
			else j.innerHTML = x.join(' : ');
			setTimeout(backTimer, 300);
		} else {
			// j.innerHTML = "00:00:00";
			document.body.innerHTML = `<h1>${x.join(' : ')}<br>Time is over</h1>`;
		}
	}
	backTimer();
})();
