function setup() {
  frameRate(15);
  rectMode(RADIUS);
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  var step = frameCount % 100;
  translate(width/5, height/4);
  // Equivalent to scale(x, y);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  strokeWeight(100);
  stroke(random(255),random(255),random(255));
  fill(10);
  rect(width/2, height/2, 5000, 5000);
}

