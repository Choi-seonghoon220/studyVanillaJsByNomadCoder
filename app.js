const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
function onLoginSubmit(event) {
    event.preventDefault();

    if (localStorage.getItem("userName") === '') {
        loginForm.classList.add(HIDDEN_CLASSNAME);

        greeting.innerText = `Hello ${userName}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem("userName", userName);
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    }

}

loginForm.addEventListener("submit", onLoginSubmit);
