const clockTitle = document.querySelector(".js-clock");

function getDDay() {
  const setDate = new Date("2021-12-25T00:00:00+0900");
  const now = new Date();

  const distance = setDate.getTime() - now.getTime();

  const day = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getDDay();
setInterval(getDDay, 1000);
