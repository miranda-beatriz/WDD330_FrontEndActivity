const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');
const pauseResumeButton = document.getElementById('pauseResumeButton');
const inputTime = document.getElementById('inputTime');

let timeLeft = 10;
let countdown;
let isPaused = false;

startButton.addEventListener('click', () => {
const userTime = parseInt(inputTime.value);
if (!isNaN(userTime) && userTime > 0) {
    timeLeft = userTime; 
      }

      if (!countdown){ 
        countdown = setInterval(() => {
        if (timeLeft >= 0) {
          countdownDisplay.textContent = timeLeft;
          timeLeft--;
        } else {
          // Stop the countdown and display a message
          clearInterval(countdown); 
          countdownDisplay.textContent = "Time's up!";
          countdown = null;
        }
      }, 1000); }
      pauseResumeButton.addEventListener('click', () => {
        if (isPaused) {
          countdown = setInterval(() => {
            if (timeLeft > 0) {
              countdownDisplay.textContent = timeLeft;
              timeLeft--;
            } else {
              clearInterval(countdown); 
              countdownDisplay.textContent = "Time's up!"; 
              countdown = null; 
            }
          }, 1000);
          pauseResumeButton.textContent = "Pause"; 
        } else {
          
          clearInterval(countdown);
          pauseResumeButton.textContent = "Resume"; 
        }
        
        isPaused = !isPaused; 
      });
});