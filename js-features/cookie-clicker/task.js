const cookieCounter = document.getElementById("clicker__counter");
const cookieElement = document.getElementById("cookie");
const clickerSpeed = document.querySelector(".clicker__speed-info");
let lastClickTime = null;

cookieElement.addEventListener("click", () => {
  const currentTime = new Date().getTime();

  if (lastClickTime !== null) {
    const timeDiffSec = (currentTime - lastClickTime) / 1000;
    const clickSpeed = 1 / timeDiffSec;
    clickerSpeed.textContent = `Скорость клика: ${clickSpeed.toFixed(2)}`;
  }

  lastClickTime = currentTime;

  cookieCounter.textContent++;
  cookieElement.width = cookieElement.width == 200 ? 250 : 200;
});