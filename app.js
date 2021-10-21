const title = document.querySelector("div.title h1");

const superEventHandler = {
  handleMouseEnter: function () {
    title.innerText = "IN THE TEXT!";
    title.style.color = "pink";
  },
  handleMouseLeave: function () {
    title.innerText = "OUT THE TEXT!";
    title.style.color = "blue";
  },
  handleMouseClick: function () {
    title.innerText = " CLICK THE TEXT!";
    title.style.color = "green";
  },
  handleWindowResize: function () {
    title.innerText = "Window Size too small!";
    title.style.color = "tomato";
  },
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
title.addEventListener("click", superEventHandler.handleMouseClick);
window.addEventListener("resize", superEventHandler.handleWindowResize);
