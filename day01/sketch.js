let num;
let radius;

function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  const params = getURLParams();

  num = Math.max(1, params.num | 0 || 8);
  radius = Math.max(5, params.radius | 0 || 40);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(120);
  fill(120);
  const x = 50;
  const y = height - 100;
  let n = num;

  for (let i = 0; i < num; i += 1) {
    const oy = y - i * radius + (i * radius) / 7.1;
    for (let j = 0; j < n - i; j += 1) {
      const ox = x + j * radius + (i * radius) / 2;
      ellipse(ox, oy, radius, radius);
    }
  }
  fill(255);
  triangle(
    x,
    y,
    x + (num - 1) * radius,
    y,
    x + ((num - 1) * radius) / 2,
    y - (num - 1) * radius + ((num - 1) * radius) / 7.1
  );
}
