const numberGameform = document.querySelector(".game_form");
const numberBetweenInput = document.querySelector(".enterNumber ");
const pickNumberFormInput = document.querySelector(".choseNumber");
const randomNumber = document.querySelector(".print_number .random_number");
const pickNumber = document.querySelector(".print_number .pick_number");
const final = document.querySelector(".stats");
const printNumberStats = document.querySelector(".print_number");

const NUMBER_KEY = "maxnumber";
const PICKNUMBER_KEY = "picknumber";

function localUpdate(event) {
  event.preventDefault(event);
  const maxNumber = numberBetweenInput.value;
  const pickNumber = pickNumberFormInput.value;
  localStorage.setItem(NUMBER_KEY, maxNumber);
  localStorage.setItem(PICKNUMBER_KEY, pickNumber);
}

function NumberMaker() {
  const random = parseInt(localStorage.getItem(NUMBER_KEY), 10);
  const pick = parseInt(localStorage.getItem(PICKNUMBER_KEY), 10);
  const textInPrint = Math.floor(Math.random() * (random - 0 + 1));
  randomNumber.innerText = `the machine chose : ${textInPrint}`;
  pickNumber.innerText = `You chose : ${pick}`;

  if (pick === textInPrint) {
    final.innerText = "YOU WON!";
  } else {
    final.innerText = "YOU LOST";
  }
}

numberGameform.addEventListener("submit", localUpdate);
numberGameform.addEventListener("submit", NumberMaker);
