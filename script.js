const btnNew = document.getElementById('btnAdd');
btnNew.addEventListener('click', addLi);

function addLi() {
	const input = document.getElementsByTagName('input');
	const itemText = input.value;

	if (itemText === '' || itemText === ' ') {
		return;
	}

	const toDoList = document.getElementsByTagName('ul');

	addNewItem(toDoList, itemText);
}

function updateItemStatus() {
	const itemText = document.getElementById('item');

	if (this.checked) {
 		itemText.style.textDecoration = "line-through";
 	} else {
 		itemText.style.textDecoration = "none";
 	}
}

function addNewItem(list, itemText) {
 	const listItem = document.createElement('li');
 	list.appendChild(listItem);

 	const checkbox = document.createElement('input');
 	listItem.appendChild(checkbox);

 	checkbox.type = 'checkbox';
 	checkbox.addEventListener('click', updateItemStatus);
}
