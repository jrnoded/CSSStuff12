const task = firstOfClass("todo-input");
const todoList = firstOfClass("todo-list");
const addButton = firstOfClass("add-button");
addButton.addEventListener("click", addToDo);

function addToDo() {
    if (task.value != "") {
        createListItem(task.value);
        task.value = "";
    }
}

function firstOfClass(name) {
    return document.getElementsByClassName(name)[0];
}
function createListItem(text) {
    let li = document.createElement("li");
    li.textContent = text;
    li.classList.add("todo-item")
    let div = document.createElement('div');
    const cbutton = document.createElement('button')
    cbutton.textContent = 'Complete';
    cbutton.classList.add('complete-button');
    div.appendChild(cbutton);
    div.classList.add('list-buttons')
    const dbutton = document.createElement('button');
    dbutton.textContent = 'Delete';
    dbutton.classList.add('delete-button');
    div.appendChild(dbutton);
    li.appendChild(div);
    todoList.appendChild(li);
}
