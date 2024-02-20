
const startingMinutes = 10;
  const countdownElements = document.querySelectorAll('.countdown');

  let times = Array.from({ length: countdownElements.length }, () => startingMinutes * 60);

  let refreshIntervalId = setInterval(updateCountdown, 1000);

  function updateCountdown() {
    for (let i = 0; i < countdownElements.length; i++) {
      const minutes = Math.floor(times[i] / 60);
      let seconds = times[i] % 60;

      seconds = seconds < 10 ? '0' + seconds : seconds;
countdownElements[i].textContent = `${minutes}:${seconds}`;
      
      if (times[i] > 0) {
        times[i]--;
      } else {
        clearInterval(refreshIntervalId);
        	
      }
    }
  }