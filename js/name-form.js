
// Each element from index.html
const nameForm = document.querySelector("#name-form");
const nameInPut = document.querySelector("#name-form__input");
const greetingsHeader = document.querySelector("#greetings"); 

const USERNAME_KEY = "";

// Load name
function loadName() {
    const savedUserName = localStorage.getItem(USERNAME_KEY);
    if(savedUserName === null) {
        nameForm.classList.remove("hidden");
        nameForm.addEventListener("submit", handleFormSubmit);
    } else {
        paintName(savedUserName);
    }
}

// Handle submit 
function handleFormSubmit(event) {
    event.preventDefault();
    nameForm.classList.add("hidden");
    const usernameInput = nameInPut.value;
    saveName(usernameInput);
    paintName(usernameInput);
}

// Save name
function saveName(usernameInput) {
    localStorage.setItem(USERNAME_KEY, usernameInput);
}

// Paint name
function paintName(usernameInput) {
    greetingsHeader.classList.remove("hidden");
    greetingsHeader.innerText = `Hello ${usernameInput}`;
}

// Init 
loadName();







