let angle = 0;
let phaseScale = 0;
let phaseColor = 0;
const sizeRatio = 8;
const sizeRatioOffset = sizeRatio * 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  push();
    translate(mouseX, mouseY);
    rotate(angle);
    scale(cos(phaseScale)*sizeRatio);
    //blendMode(LIGHTEST);
    colorMode(RGB, 255, 255, 255, 0.1);
    strokeWeight(0.05);
    stroke(255, 255, 255, 1);
    colorMode(HSB, 200, 100, 100, 0.5);
    let c = color(phaseColor, 100, 100, 0.02);
    fill(c);
    rect(0, 0, 20,40);
  pop();
  
  angle %= TWO_PI;
  angle += 0.5;
  
  phaseScale %= TWO_PI;
  phaseScale += 0.3;
  
  phaseColor %= 360;
  phaseColor += 1;
  
}


function mouseClicked() {
  clear();
  background(0);
}