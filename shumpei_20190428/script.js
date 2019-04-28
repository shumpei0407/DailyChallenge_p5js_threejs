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
    translate(width/2, height/2);
    rotate(angle);
    scale(sizeRatio * cos(phaseScale));
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(0.001);
    stroke(255, 255, 255, 1);
    colorMode(HSB, 360, 100, 100, 1);
    let c = color(phaseColor, 200, 200, 0.05);
    fill(c);
    blendMode(HARD_LIGHT);
    //rect(displayWidth,0,100,100);
    //ellipse(100, 100, 5, 5);
    //ellipse(100, 100, 10, 10);
    //ellipse(100, 100, 15, 15);
    //ellipse(100, 100, 30, 30);
    ellipse(0, 10, 200, 350);
  pop();
  
  angle %= TWO_PI;
  angle += 2;
  
  phaseScale %= TWO_PI;
  phaseScale += 0.001;
  
  phaseColor %= 360;
  phaseColor += 0.5;
  
}


function mouseClicked() {
  clear(0);
  background(0);
}
