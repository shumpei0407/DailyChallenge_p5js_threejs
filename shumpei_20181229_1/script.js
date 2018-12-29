let angle = 0;
let phaseScale = 0;
let phaseColor = 0;
const sizeRatio = 5;
const sizeRatioOffset = sizeRatio * 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  push();
    translate(mouseX, mouseY);
    rotate(angle);
    scale(sin(phaseScale) + 5);

    colorMode(RGB, 255, 255, 255, 0.05);
    strokeWeight(1);
    stroke(255, 255, 255, 130);

    colorMode(HSB, 360, 100, 100, 1);
    let c = color(phaseColor, 100, 100, 0.8);
    fill(c);
    rect(10, 8, 100, 100);
  pop();
  
  angle %= TWO_PI;
  angle += 0.05;
  
  phaseScale %= TWO_PI;
  phaseScale += 0.001;
  
  phaseColor %= 360;
  phaseColor += 0.5;
  
}


function mouseClicked() {
  clear();
  background(0);
}