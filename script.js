//your JS code here. If required.
window.addEventListener('load', time);

function time() {
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
	let newDate = `${month}/${day}/${year}`;
	const p = document.getElementById('timer');
	p.textContent = `${newDate} , ${time}`;
}
 