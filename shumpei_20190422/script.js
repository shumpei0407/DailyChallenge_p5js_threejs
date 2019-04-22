let angle = 0;
let phaseScale = 0;
let phaseColor = 0;
const sizeRatio = 2;
const sizeRatioOffset = sizeRatio * 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  //mouseX = windowWidth / 2;
  //mouseY = windowHeight / 2;
}

function draw() {
  push();
    //translate(mouseX, mouseY);
    rotate(angle);
    scale(sizeRatio * sin(phaseScale) + 2.5);

    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(0.05);
    stroke(255, 255, 255, 130);

    colorMode(HSB, 360, 100, 100, 1);
    let c = color(phaseColor, 100, 100, 0.05);
    fill(c);
    //blendMode(DIFFERENCE);
    rect(random(500), random(500), random(500), random(500));
  pop();
  
  angle %= TWO_PI;
  angle += 0.2;
  
  phaseScale %= TWO_PI;
  phaseScale += 0.1;
  
  phaseColor %= 360;
  phaseColor += 0.5;
  
}


function mouseClicked() {
  clear();
  background(0);
}
