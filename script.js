let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

const w = 60;
const h = 60;
const gap = 20;
let x, y;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const w = 60;
    const h = 60;
    const gap = 20;
    x = 100 + (w + gap) * i;
    y = 100 + (h + gap) * j;
    context.beginPath();
    context.strokeRect(x, y, w, h);
    context.stroke();
    if (Math.random() > 0.5) {
      context.beginPath();
      context.rect(x + 8, y + 8, w - 16, h - 16);
      context.stroke();
    }
  }
}
