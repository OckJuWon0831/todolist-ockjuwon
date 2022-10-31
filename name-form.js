
// HTML의 각 Elements들
const nameForm = document.querySelector(".name-form");
const nameInPut = document.querySelector(".name-form__input");
const greetingsHeader = document.querySelector(".greetings"); 

const USERNAME_KEY = "username";

function onNameForm(event) {
    event.preventDefault();
    nameForm.classList.add("hidden");
    const usernameInput = nameInPut.value;
    localStorage.setItem(USERNAME_KEY, usernameInput);
    greetingsHeader.classList.remove("hidden");
    greetingsHeader.innerText = `Hello ${savedUserName}`;
}
const savedUserName = localStorage.getItem(USERNAME_KEY);

if(localStorage.getItem(USERNAME_KEY) === null) {
    nameForm.classList.remove("hidden");
    nameForm.addEventListener("submit", onNameForm);
} else {
    greetingsHeader.classList.remove("hidden");
    greetingsHeader.innerText = `Hello ${savedUserName}`;
}

