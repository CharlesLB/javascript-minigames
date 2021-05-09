let lastRenderTime = 0;
const SNAKE_SPEED = 20;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

  if(secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;
}

window.requestAnimationFrame(main);


function update() {
  
}

function draw() {
  
}