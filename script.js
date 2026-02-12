let count = 0;
let time = 10;
let running = false;

const clickBtn = document.getElementById('clickBtn');
const countSpan = document.getElementById('count');
const timeSpan = document.getElementById('time');

clickBtn.addEventListener('click', () => {
  if (!running) {
    running = true;
    const timer = setInterval(() => {
      time--;
      timeSpan.textContent = time;
      if (time <= 0) {
        clearInterval(timer);
        running = false;
        alert(`¡Tiempo terminado! Hiciste ${count} clicks`);
        count = 0;
        time = 10;
        countSpan.textContent = count;
        timeSpan.textContent = time;
      }
    }, 1000);
  }
  count++;
  countSpan.textContent = count;
});
