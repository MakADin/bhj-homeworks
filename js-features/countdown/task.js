const timerElement = document.getElementById("timer");
const btnStartTimer = document.getElementById("btnStartTimer");

function formatTime(secs) {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = secs % 60;

  return `${String(hours).padStart(2, "0")}:
          ${String(minutes).padStart(2, "0")}:
          ${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
  let totalSeconds = timerElement.textContent;
  let intervalId = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      timerElement.textContent = "Time is over!";
      alert("Вы победили в конкурсе!");
      downloadFile();
    } else {
      timerElement.textContent = formatTime(totalSeconds--);
    }
  }, 100);
}

btnStartTimer.addEventListener("click", function () {
  startTimer();
});

function downloadFile() {
  const fileUrl =
    "https://download01.logi.com/web/ftp/pub/techsupport/gaming/lghub_installer.exe";

  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = true;
  link.target="_blank";
  link.click();
  console.log(link);
}
