var c = 0;

function addMessage(id) {
	let elem = document.getElementById(id)
	saveMessage(elem.innerHTML)
}

function saveMessage(message) {
	localStorage.setItem("message_" + c, message + " at " + (new Date()))
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

