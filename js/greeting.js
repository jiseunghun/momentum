const loginForm = document.querySelector(".login-form");
const loninInput = document.querySelector("form.login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const allEventHander = {
  onLoginForm: function (event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const welcomeUser = loninInput.value;
    localStorage.setItem(USERNAME_KEY, welcomeUser);
    paintUsername(welcomeUser);
  },
};

function paintUsername(username) {
  greeting.innerText = `Hello ${username} cooler man`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", allEventHander.onLoginForm);
} else {
  paintUsername(saveUsername);
}
