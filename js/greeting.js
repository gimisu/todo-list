const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDRN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDRN_CLASSNAME);
    localStorage.setItem("USERNAME_KEY", loginInput.value);   
    paintGreetings();
}

function paintGreetings(){   
    const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDRN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDRN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}