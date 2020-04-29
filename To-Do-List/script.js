let button = document.getElementById("add-item");
let input = document.getElementById("userinput");
let ul = document.getElementById("shopping-list");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let li = document.createElement("li");
	let deleteBtn = document.createElement("button");
	li.classList.add("list-item");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	deleteBtn.classList.add("delete-button");
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);
	li.addEventListener("click", markAsDone);
	deleteBtn.addEventListener("click", deleteListItem);
	function deleteListItem() {
		li.classList.add("delete");
	}
	input.value = "";
}

function markAsDone() {
	this.classList.toggle("done");
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
