const holesCounter = document.querySelectorAll(".hole");
const deadCounter = document.getElementById("dead");
const missCounter = document.getElementById("lost");

for (let i = 0; i < holesCounter.length; i++) {
  const hole = holesCounter[i];
  hole.addEventListener("click", () => {
    if (hole.classList.contains("hole_has-mole")) {
      deadCounter.textContent++;
    } else {
      missCounter.textContent++;
    }

    if (Number(deadCounter.textContent) === 10) {
      restartGame("You win!");
    }

    if (Number(missCounter.textContent) === 5) {
      restartGame("You lose!");
    }
  });
}

function restartGame(message) {
  alert(message);
  deadCounter.textContent = 0;
  missCounter.textContent = 0;
}
