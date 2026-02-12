const clickBtn = document.getElementById('clickBtn');
const countSpan = document.getElementById('count');
const timeSpan = document.getElementById('time');
const timeProgress = document.getElementById('time-progress');

let count = 0;
let time = 10;
let running = false;

clickBtn.addEventListener('click', () => {
  if (!running) {
    running = true;
    const totalTime = time;

    const timer = setInterval(() => {
      time--;
      timeSpan.textContent = time;

      // Actualiza barra de progreso
      let widthPercent = (time / totalTime) * 100;
      timeProgress.style.width = widthPercent + '%';

      if (time <= 0) {
        clearInterval(timer);
        running = false;
        alert(`¡Tiempo terminado! Hiciste ${count} clicks`);

        // Reset
        count = 0;
        time = totalTime;
        countSpan.textContent = count;
        timeSpan.textContent = time;
        timeProgress.style.width = '100%';
      }
    }, 1000);
  }

  count++;
  countSpan.textContent = count;
});

