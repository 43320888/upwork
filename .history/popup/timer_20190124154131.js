(() => {
	const x = ['00', '00', 16];
	const j = document.querySelector('h1 > span');

	const backTimer = () => {
		if (x[2]) {
			x[2]--;
			if (x[2] < 10) j.innerHTML = `${x[0]} : ${x[1]} : 0${x[2]}`;
			else j.innerHTML = x.join(' : ');
			setTimeout(backTimer, 3000);
		} else {
			// j.innerHTML = "00:00:00";
			document.body.firstElementChild.innerHTML = `<h1>${x.join(' : ')}0<br>Time is over</h1>`;
		}
	};
	backTimer();
})();
