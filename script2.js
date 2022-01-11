var c = 0;

function addMessage(id) {
	let elem = document.getElementById(id)
	saveMessage(elem.innerHTML)
}

function saveMessage(message) {
	localStorage.setItem("message_" + c, message + " at " + (getTime(new Date())))
	c++
}

function printMessages() {
	let output = document.getElementById("output_panel")
	while (output.firstChild) {
	    output.removeChild(output.firstChild);
	}
	for (i = 0; i < c; i++) {
		let message = document.createElement("div")
		message.setAttribute("name", "output")
		message.classList.add("message")
		message.innerHTML = localStorage.getItem("message_" + i)
		output.appendChild(message)
	}
}

function getTime(date) {
	var hours = date.getHours()
	var minutes = date.getMinutes()
	var seconds = date.getSeconds()
	var str = hours + ":" + minutes + ":" + seconds
	return str
}
