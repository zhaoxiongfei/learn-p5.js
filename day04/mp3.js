let mySound;
let fft;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("./01.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mySound.setVolume(0.1);
  mySound.play();
  fft = new p5.FFT();
  // noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

const defaults = {
  padding: 20
};
const render = ((opt = {}) => {
  Object.assign(opt, defaults);

  return (width, height, data, length) => {
    fill(0, 0, 0);
    rect(0, 0, width, height);
    const w = (width - 2 * opt.padding) / length;
    const barWidth = (w * 0.8) | 0;
    const h = height - 2 * opt.padding;
    noStroke();
    fill(255, 204, 0);

    let x = opt.padding;
    const y = height - opt.padding;
    for (let i = 0; i < length; i += 1) {
      const _h = (h * data[i]) / 256;
      rect(x, y - _h, barWidth, _h);
      x += w;
    }
  };
})();

function draw() {
  background(0);
  const length = 256;
  render(windowWidth, windowHeight, fft.analyze(length), length);
}
