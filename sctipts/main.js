const hideToggle = document.getElementById('hide-toggle');
const progressCircle = document.querySelector('.progress__circle');

const arc = document.querySelector('.progress__arc');
const input = document.getElementById('value-input');

const animateToggle = document.getElementById('animate-toggle');


hideToggle.addEventListener('change', () => {
  progressCircle.classList.toggle('progress__circle--hidden', hideToggle.checked);
});


animateToggle.addEventListener('change', () => {
  if (animateToggle.checked) {
    arc.style.transition = 'stroke-dashoffset 0.6s ease-in-out';
  } else {
    arc.style.transition = 'none';
  }
});



const CIRCLE_LENGTH = 2 * Math.PI * 60;

input.addEventListener('input', () => {
  let value = parseInt(input.value, 10);
  if (isNaN(value) || value === '') value = 0;  
  value = Math.max(0, Math.min(100, value));  
  const offset = CIRCLE_LENGTH * (1 - value / 100);
  arc.style.strokeDashoffset = offset;
});