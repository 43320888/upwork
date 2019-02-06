/* eslint-disable */
// XMLHttpRequest
function requestData(dataArr) {
	let out = '';
	for (let key in dataArr) {
		out += `${key}=${dataArr[key]}&`;
	}
	console.log(out);
	return out;
}
/* eslint-disable-next-line no-unused-vars */
function ajax(url, method, functionName, dataArray) {
	const xhttp = new XMLHttpRequest();
	xhttp.open(method, url, true);
	xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhttp.send(dataArray);

	xhttp.onreadystatechange = () => {
		if (this.readyState == 4 && this.status == 200) {
			functionName(this);
		}
	};
}

/*
function f1(data) {
	console.log(data);
}
let a = {
	"name": "ivan",
	"age": 53,
}
ajax('back.php', 'POST', f1, requestData(a));
*/
