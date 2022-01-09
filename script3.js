var inputStyle = 'stack-row input margin_input'
var METHOD = "GET"

createSavingForm()

function createSavingForm () {
	delForm()
	let form = document.createElement('form')
	form.id = "form"
	form.method = METHOD
	form.name = "saving_form"
	form.action = 'action.php'

	let inputName = document.createElement('input')
	inputName.type = 'text'
	inputName.name = 'name'
	inputName.placeholder = 'Tab\'s name'
	inputName.classList = inputStyle

	let inputSave = document.createElement('input')
	inputSave.type = 'submit'
	inputSave.value = 'Save'
	inputSave.name = 'save'
	inputSave.classList = inputStyle

	let inputChange = document.createElement('input')
	inputChange.type = 'button'
	inputChange.value = 'Change'
	inputChange.name = 'change'
	inputChange.onclick = () => {
		createChangingForm()
	}
	inputChange.classList = inputStyle

	form.appendChild(inputName)
	form.appendChild(inputSave)
	form.appendChild(inputChange)

	let div = document.getElementById('input_form')
	if (div !== null) div.appendChild(form)
}

function createChangingForm () {
	delForm()
	let form = document.createElement('form')
	form.id = "form"
	form.method = METHOD
	form.name = "changing_form"
	form.action = 'action.php'

	let inputOldName = document.createElement('input')
	inputOldName.type = 'text'
	inputOldName.name = 'old_name'
	inputOldName.placeholder = 'Old tab\'s name'
	inputOldName.classList = inputStyle

	let inputNewName = document.createElement('input')
	inputNewName.type = 'text'
	inputNewName.name = 'new_name'
	inputNewName.placeholder = 'New tab\'s name'
	inputNewName.classList = inputStyle

	let inputSave = document.createElement('input')
	inputSave.type = 'submit'
	inputSave.value = 'Save'
	inputSave.name = 'save'
	inputSave.classList = inputStyle

	let inputCreateNew = document.createElement('input')
	inputCreateNew.type = 'button'
	inputCreateNew.value = 'Create new'
	inputCreateNew.name = 'create'
	inputCreateNew.onclick = () => {
		createSavingForm()
	}
	inputCreateNew.classList = inputStyle

	form.appendChild(inputOldName)
	form.appendChild(inputNewName)
	form.appendChild(inputSave)
	form.appendChild(inputCreateNew)

	let div = document.getElementById('input_form')
	if (div !== null) div.appendChild(form)
}

function delForm () {
	let form = document.getElementById('form')
	if (form !== null) form.remove()
}