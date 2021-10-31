const images = [
  "0.jpg",
  "1.jfif",
  "2.jfif",
  "3.jfif",
  "4.jfif",
  "5.jfif",
  "6.jfif",
  "7.jfif",
];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choseImage}`;

document.body.appendChild(bgImage);

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];
const buttonClick = document.querySelector(".btn");

function setColors() {
  const choseColor = colors[Math.floor(Math.random() * colors.length)];
  const choseColor2 = colors[Math.floor(Math.random() * colors.length)];
  const linear = `linear-gradient(${choseColor},${choseColor2})`;

  const bgColorSet = document.body;

  bgColorSet.style.setProperty("background", linear);
}

buttonClick.addEventListener("click", setColors);
