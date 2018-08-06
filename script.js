const btnNew = document.getElementById('btnAdd');
btnNew.addEventListener('click', addLi);

function addLi() {
	const input = document.getElementsByTagName('input')[0];
	const itemText = input.value;

	if (!checkIfInputIsValid(itemText)) {
		return;
	}

	const toDoList = document.getElementsByTagName('ul')[0];

	addNewItem(toDoList, itemText);
}

function checkIfInputIsValid(itemText) {
	if (itemText === '' || itemText === ' ') {
		return false;
	} else {
		return true;
	}
}


function addNewItem(list, itemText) {
  	const listItem = document.createElement('li');
	const checkbox = createCheckbox();
	const span = document.createElement('span');
 	
	span.innerText = itemText;
	
	listItem.appendChild(checkbox);
	listItem.appendChild(span);
	list.appendChild(listItem);
}

function createCheckbox() {
	const checkbox = document.createElement('input');
 	checkbox.type = 'checkbox';

 	return checkbox;
}