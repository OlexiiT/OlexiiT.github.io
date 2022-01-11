localStorage.clear()

function startAnim () {
	let startButton = document.getElementById("startButton")
	startButton.style.display = "none"

	let stopButton = document.getElementById("stopButton")
	stopButton.style.display = "inline"

	moveGreenSquare()
	moveRedSquare()

	showMessage("buttonMessage")
}

function stopAnim () {
	let startButton = document.getElementById("startButton")
	startButton.style.display = "inline"

	let stopButton = document.getElementById("stopButton")
	stopButton.style.display = "none"

	clearInterval(greenTimer)
	clearInterval(redTimer)

	showMessage("buttonMessage")
}

function reload() {
	var greenSquare = document.getElementById("greenSquare")
	var redSquare = document.getElementById("redSquare")
	redSquare.style.left = "0px"
	redSquare.style.top = "100px"
	greenSquare.style.left = "100px"
	greenSquare.style.top = "0px"

	let startButton = document.getElementById("startButton")
	startButton.style.display = "inline"

	let reloadButton = document.getElementById("reloadButton")
	reloadButton.style.display = "none"

	showMessage("buttonMessage")
}



function showControls () {
	let controls = document.getElementById("controls")
	controls.style.display = "block"

	let button = document.getElementById("showButton")
	button.style.display = "none"
}

function closeControls () {
	let controls = document.getElementById("controls")
	controls.style.display = "none"

	let button = document.getElementById("showButton")
	button.style.display = "block"

	printMessages()
}



function checkSquares() {
	var greenSquare = document.getElementById("greenSquare")
	var redSquare = document.getElementById("redSquare")
	var xr = redSquare.style.left
	xr = Number(xr.substr(0, xr.length - 2))
	var yr = redSquare.style.top
	yr = Number(yr.substr(0, yr.length - 2))
	var xg = greenSquare.style.left
	xg = Number(xg.substr(0, xg.length - 2))
	var yg = greenSquare.style.top
	yg = Number(yg.substr(0, yg.length - 2))
	if (xr - xg <= 10 && xr - xg > 0 &&
		yr - yg <= 10 && yr - yg > 0) {
		endAnimation()
	}
}

function endAnimation() {
	let stopButton = document.getElementById("stopButton")
	stopButton.style.display = "none"

	let reloadButton = document.getElementById("reloadButton")
	reloadButton.style.display = "inline"

	showMessage("reloadMessage")

	clearInterval(greenTimer)
	clearInterval(redTimer)
}

greenVector = 1
redVector = 1
greenTimer = 0
redTimer = 0

function moveGreenSquare() {
	var square = document.getElementById("greenSquare")
	var anim = document.getElementById("anim")
	var x = square.style.left
	var y = square.style.top
	var border = getComputedStyle(anim).borderWidth
	border = border.substr(0, border.length - 2)
	var min = 0
	var max = anim.offsetHeight - 2 * border - 20
	var speedY = 3
	greenTimer = setInterval(changeY, 20, square, speedY, min, max)
}

function moveRedSquare() {
	var square = document.getElementById("redSquare")
	var anim = document.getElementById("anim")
	var x = square.style.left
	var y = square.style.top
	var border = getComputedStyle(anim).borderWidth
	border = border.substr(0, border.length - 2)
	var min = 0
	var max = anim.offsetWidth - 2 * border - 10
	var speedX = 3
	redTimer = setInterval(changeX, 1, square, speedX, min, max)
}

function changeY(el, speed, min, max) {
	var y = el.style.top
	var n = Number(y.substr(0, y.length - 2))
	if (n + speed > max && greenVector == 1) {
		n = 2 * max - n - speed
		greenVector = -1
		showMessage("greenSquareMessage")
	} else if (n - speed < min && greenVector == -1) {
		n = 2 * min - n + speed
		greenVector = 1
		showMessage("greenSquareMessage")
	}
	n += speed * greenVector
	el.style.top = n + "px"
	checkSquares()
}

function changeX(el, speed, min, max) {
	var x = el.style.left
	var n = Number(x.substr(0, x.length - 2))
	if (n + speed > max && redVector == 1) {
		n = 2 * max - n - speed
		redVector = -1
		showMessage("redSquareMessage")
	} else if (n - speed < min && redVector == -1) {
		n = 2 * min - n + speed
		redVector = 1
		showMessage("redSquareMessage")
	}
	n += speed * redVector
	el.style.left = n + "px"
	checkSquares()
}

function showMessage (id) {
	delMessages()
	m = document.getElementById(id)
	m.style.display = "inline"
	addMessage(id)
}

function delMessages() {
	messages = document.getElementsByName("message")
	for (i = 0; i < messages.length; i++) {
		messages[i].style.display = "none"
	}
}