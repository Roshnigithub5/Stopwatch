// Select elements
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let interval = null;
let elapsedTime = 0;

// Convert time to HH:MM:SS format
function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
startButton.addEventListener("click", () => {
  if (!interval) {
    const startTime = Date.now() - elapsedTime;
    interval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      timeDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

// Stop the stopwatch
stopButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

// Reset the stopwatch
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  timeDisplay.textContent = "00:00:00";
});
