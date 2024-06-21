document.addEventListener("DOMContentLoaded", function() {
    let minutes = 60;
    let seconds = 0;
  
    const timerElement = document.getElementById('timer');
    const messageElement = document.getElementById('message');
  
    function updateTimer() {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        return;
      }
  
      if (seconds === 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
  
      if (minutes < 10) {
        minutesDisplay = '0' + minutes;
      } else {
        minutesDisplay = minutes;
      }
  
      if (seconds < 10) {
        secondsDisplay = '0' + seconds;
      } else {
        secondsDisplay = seconds;
      }
  
      timerElement.textContent = `${minutesDisplay}:${secondsDisplay}`;
  
      if (minutes < 30) {
        messageElement.textContent = "Залишилось менше половини часу";
      }
    }
  
    const timerInterval = setInterval(updateTimer, 1000);
  });
  