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
  const r = Math.min(width / 2, height / 2);
  line(0, 0, width, height);
  line(0, height, width, 0);
  ellipse(width / 2, height / 2, r, r);
}
