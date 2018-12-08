let points;
let noiseScaleX;
let noiseScaleY;
let stepsPerFrame;

function setup() {
  stepsPerFrame = 10;
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(5);
  stroke(146, 168, 209, 20);
  reset();
}

function draw() {
  for (let i = 0; i < stepsPerFrame; i++) {
    drawLine();
  }
}

function reset() {
  background('#f7cac9');
  noiseScaleX = random(0.001, 0.01);
  noiseScaleY = random(0.001, 0.002);
  resetPoints();
}

function resetPoints() {
  points = [];
  for (let i = 0; i < windowWidth; i++) {
    points.push([i, 0]);
  }
}

function drawLine() {
  beginShape();
  let atLeastOneOnScreen = false;
  points.forEach(p => {
    vertex(p[0], p[1]);
    p[1] += noise(p[0] * noiseScaleX, frameCount * noiseScaleY);
    if (p[1] < windowHeight * 1.1) {
      atLeastOneOnScreen = true;
    }
  });
  endShape();
  if (!atLeastOneOnScreen) {
    reset();
  }
}

//function windowResized() {
  //resizeCanvas(windowWidth, windowHeight);
//}
