const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    // Will-be-deleted li
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    newLi.appendChild(newSpan);
    const button = document.createElement("button");
    button.innerText = "★";
    button.addEventListener("click", deleteToDo);
    newLi.appendChild(button);
    newSpan.innerText = newTodo;
    toDoList.appendChild(newLi);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);