document.querySelector('.x-header').addEventListener('click', function () {
    let xHeader = document.querySelector('.x-header')
    let yHeader = document.querySelector('.y-header')

    swap(xHeader, yHeader);
})

document.querySelector('.y-header').addEventListener('click', function () {
    let xHeader = document.querySelector('.x-header')
    let yHeader = document.querySelector('.y-header')

    swap(xHeader, yHeader)
})

function swap (xh, yh) {
    let temp = xh.innerHTML
    xh.innerHTML = yh.innerHTML
    yh.innerHTML = temp
}



rhombus_side = 6
alpha = Math.PI / 6

document.getElementById('task_2_1')
    .append("Сторона ромба = " + rhombus_side + ";")
			
document.getElementById('task_2_2')
    .append("∠α = " + alpha + " = " + Math.round(alpha * 180 / Math.PI) + "°C;")
			
document.getElementById('task_2_3')
    .append("Площа ромба = " + Math.round(Math.sin(alpha) * rhombus_side * rhombus_side) + ".")
	
	

task_3_cookieName = 'message'

if (get_cookie(task_3_cookieName) !== undefined) {
	notify_about_cookies()
} else {
	addForm()
}

function addForm() {
	let form = document.createElement('form')
	form.id = "task_3_form"

	let label = document.createElement('label')
	label.innerHTML = "Введіть довжини сторін трикутника через кому:"
	label.htmlFor = "task_3_input"
	label.id = "task_3_label"

	let input = document.createElement('input')
	input.type = "text"
    input.placeholder = "3,4,5"
    input.id = "task_3_input"

	let submit = document.createElement('input')
	submit.type = "submit"
	submit.value = "Виконати"
	submit.id = "task_3_submit"
	submit.addEventListener('click', (e) => {
		e.preventDefault()
		p_input()})

	let br = document.createElement('br')

	form.appendChild(label)
	form.appendChild(input)
	form.appendChild(br)
	form.appendChild(submit)

	document.getElementById('task_3').appendChild(form)
}

function p_input () { 
	let ar = document.querySelector("#task_3_input").value.split(',')
	if (ar[3] == undefined && ar[2] != undefined) {
		var message = getResult(ar)
	} else var message = "Дані введено неправильно (" + ar + ")   :("
	set_cookie(message)
	printResult(message)
}

function printResult(message) {
	let p = document.getElementById('task_3_p')

	if (p === null) {
		let p = document.createElement('p')
		p.id = 'task_3_p'
		p.innerHTML = message
		document.getElementById('task_3').appendChild(p)
	} else {
		p.innerHTML = message
	}
}

function getResult(ar) {
	var a = Number(ar[0])
	var b = Number(ar[1])
	var c = Number(ar[2])
	var message = "Трикутник зі сторонами " + a + ", " + b + " і " + c
	if (a + b + c <= 2 * Math.max(a, b, c)) {
		message += " не"
	}
	message += " існує!"
	return message
}

function get_cookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function set_cookie(text) {
    let name = "message"
    let value = text
    let expireDate = new Date(Date.now() + 86400e3);
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + "; expires=" + expireDate
}

function notify_about_cookies() {
	if (get_cookie(task_3_cookieName) != null) {
	    let confirm = window.confirm(get_cookie(task_3_cookieName) +
	        ". Ви хочете видалити кукі: " + task_3_cookieName + "?")

	    if (confirm === true) {
	        delete_cookie(task_3_cookieName)
	        addForm()
	    }
	    else {
	        alert("Файл кукі з минулого разу все ще існує, " +
	            "тому сторінку потрібно оновити! Файл кукі буде видалено!")
	        delete_cookie(task_3_cookieName)
	        window.location.reload()
	    }
	}
}

function delete_cookie(name) {
    let expireDate = new Date(Date.now() + 1e3);
	document.cookie = encodeURIComponent(name) + "=null; expires=" + expireDate
}



setFont()

function setFont() {
	let font = localStorage.getItem('font')
	if (font != null) {
		let block = document.getElementById('block_2')
		block.style.fontStyle = font
	}
}

function checkRadio () {
	buttonOn = document.getElementsByName('radio')[0]
	if (buttonOn.checked) {
		return true
	}
	return false
}


document.getElementById('block_2').addEventListener('mouseover', () =>  {
	task_4()
})

function task_4(){
	if (checkRadio()) {
			changeFont()
	}
}

function changeFont() {
	let font = localStorage.getItem('font')
	if (font == null || font == 'normal') {
		font = 'italic'
		localStorage.setItem('font', font)
	} else {
		font = 'normal'
		localStorage.setItem('font', font)
	}

	let block = document.getElementById('block_2')
	block.style.fontStyle = font
}



document.querySelectorAll('.editable').forEach((el) => {
	if (localStorage.getItem(el.id + "-task_5_ol") != null) {
		let ol = document.createElement('ol')
		ol.id = el.id + "-task_5_ol"
		ol.innerHTML = localStorage.getItem(el.id + "-task_5_ol")
		el.appendChild(ol)
	}

	el.addEventListener('click', (event) => {
		let targetId = event.target.id
		if (document.getElementById(targetId + "-task_5_ol") == null) {
			let ol = document.createElement('ol')
			ol.id = targetId + "-task_5_ol"
			event.target.appendChild(ol)
		}

		let textarea = document.createElement('textarea')
		textarea.id = targetId + "-task_5_text"
		event.target.appendChild(textarea)

		let saveButton = document.createElement('input')
		saveButton.id = targetId + "-saveButton"
		saveButton.type = 'submit'
		saveButton.value = "Додати до списку"
		saveButton.onclick = () => saveText(targetId, textarea.value)

		let removeButton = document.createElement('input')
		removeButton.id = targetId + "-removeButton"
		removeButton.type = 'submit'
		removeButton.value = "Видалити останнє"
		removeButton.onclick = () => removeLast(targetId)

		let cancelButton = document.createElement('input')
		cancelButton.id = targetId + "-cancelButton"
		cancelButton.type = 'submit'
		cancelButton.value = "Скасувати"
		cancelButton.onclick = () => cancel(targetId)

		//let ol = document.getElementById(targetId + "-task_5_ol")

		event.target.appendChild(cancelButton)
		event.target.appendChild(removeButton)
		event.target.appendChild(saveButton)
	})
})

function removeLast(targetId) {
	var i = 1
	while (document.getElementById(targetId + "-li-" + i) != null) {
		i++
	}
	document.getElementById(targetId + "-li-" + (i - 1)).remove()
	cancel(targetId)
}

function saveText (targetId, text) {
	let li = document.createElement('li')
	var i = 1
	while (document.getElementById(targetId + "-li-" + i) != null) {
		i++
	}
	li.id = targetId + "-li-" + i
	li.innerHTML = text
	if (i%2 == 0) {
		li.style.background = '#fff'
		li.style.color = '#000'
	} else {
		li.style.background = '#000'
		li.style.color = '#fff'
	}
	document.getElementById(targetId + "-task_5_ol").appendChild(li)
	cancel(targetId)
}

function cancel (targetId) {
	document.getElementById(targetId + "-task_5_text").remove()
	document.getElementById(targetId + "-saveButton").remove()
	document.getElementById(targetId + "-removeButton").remove()
	document.getElementById(targetId + "-cancelButton").remove()
	localStorage.setItem(targetId + "-task_5_ol", document.getElementById(targetId + "-task_5_ol").innerHTML)
}
