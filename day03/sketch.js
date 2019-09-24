function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  draw();
}

function draw() {
  background(0);
  stroke(102);
  strokeWeight(0.2);
  fill(255, 255, 255, 150);
  const padding = 10;
  const r = 10;
  const size = 20;
  const cols = ((windowWidth - padding * 2) / size) | 0;
  const rows = (windowHeight / size) | 0;
  const cx = windowWidth / 2;
  const cy = windowHeight / 2;
  for (let i = 0; i < rows; i += 1) {
    const y = windowHeight - padding - r / 2 - i * size;
    for (let j = 0; j < cols; j += 1) {
      const x = padding + r / 2 + j * size;
      line(x, y, cx, cy);
    }
  }

  for (let i = 0; i < rows; i += 1) {
    const y = windowHeight - padding - r / 2 - i * size;
    for (let j = 0; j < cols; j += 1) {
      const x = padding + r / 2 + j * size;
      ellipse(x, y, r, r);
    }
  }
}
