const timerText = document.getElementById("timer");
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const btnReset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;
let working = false;

function updateTimer() {
  seconds++;

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 60) {
    hours++;
    minutes = 0;
  }

  timerText.textContent =
    (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
}

function startTimer() {
  if (!working) {
    working = true;
    window.timerInterval = setInterval(updateTimer, 1000);
  } else {
    alert("Таймер уже запущен!");
  }
}

function stopTimer() {
  if (working) {
    clearInterval(window.timerInterval);
    working = false;
  }
}

function resetTimer() {
  stopTimer();
  startTimer();
  btnStart.focus();
  hours = 0;
  minutes = 0;
  seconds = 0;
  timerText.textContent = "00:00:00";
}

btnStart.addEventListener("click", startTimer);
btnStop.addEventListener("click", stopTimer);
btnReset.addEventListener("click", resetTimer);
