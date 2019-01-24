(() => {
	const x = new Date().getTime() + 3000;
	const j = document.querySelector('h1 div');

	backTimer();

	function backTimer() {
		let i = new Date().getTime();
		if (i < x) {
			j.innerHTML = new Date(x - i).toLocaleTimeString();
			setTimeout(backTimer, 500);
		}
		else {
			// j.innerHTML = "00:00:00";
			document.body.innerHTML = '<h1>Time is over</h1>';
		}
	}
})();
