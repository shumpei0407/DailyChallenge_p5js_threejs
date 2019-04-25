let angle = 0;
let phaseScale = 0;
let phaseColor = 0;
const sizeRatio = 2;
const sizeRatioOffset = sizeRatio * 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  push();
    translate(width / 2, height / 2);
    rotate(angle);
    scale(sizeRatio * sin(phaseScale));
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(0.01);
    stroke(255, 255, 255, 10);
    colorMode(HSB, 360, 100, 100, 1);
    let c = color(phaseColor, 200, 200, 0.05);
    fill(c);
    blendMode(ADD);
    //rect(displayWidth,0,100,100);
    ellipse(100, 100, 1, 1000);
  pop();
  
  angle %= TWO_PI;
  angle += 0.006;
  
  phaseScale %= TWO_PI;
  phaseScale += 0.05;
  
  phaseColor %= 360;
  phaseColor += 0.5;
  
}


function mouseClicked() {
  clear(0);
  background(0);
}
