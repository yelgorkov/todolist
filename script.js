//		<li><input type="checkbox"/><span> Write this tutorial </span><button>Rename</button></li>
function updateItemStatus() {
	const itemText =document.getElementById('item');

	if(this.checked) {
 		itemText.style.text-decoration = "line-through";
 	}
 	else {
 		 itemText.style.text-decoration = "none"

 	}
}


function addNewItem(list, itemText) {
 	const listItem = document.createElement('li');
 	const checkbox = document.createElement('input');
 	checkbox.type = 'checkbox';
 	checkbox.onclick = updateItemStatus;

 	const span = document.createElement('span');
 	span.innerText = itemText;

 	listItem.appendChild(checkbox);
 	listItem.appendChild(span);

 	


 	list.appendChild(listItem);
 }

const btnNew = document.getElementById('btnAdd');
btnNew.onclick = () => {
	const inItemText = document.getElementById('inItemText');
	const itemText = inItemText.value;
	if(!itemText || itemText == '' || itemText == ' '){
		return false;
	}
	addNewItem(document.getElementById('toDoList'), itemText);

}