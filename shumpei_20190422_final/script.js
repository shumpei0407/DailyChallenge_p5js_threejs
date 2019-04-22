let angle = 0;
let phaseScale = 0;
let phaseColor = 0;
const sizeRatio = 2;
const sizeRatioOffset = sizeRatio * 1.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  push();
    translate(width / 2, height / 2);
    rotate(angle);
    scale(sizeRatio * sin(phaseScale) + 2.5);
    colorMode(RGB, 255, 255, 255, 1);
    strokeWeight(0.05);
    stroke(255, 255, 255, 10);

    colorMode(HSB, 360, 100, 100, 1);
    let c = color(phaseColor, 100, 100, 0.05);
    fill(c);
    blendMode(ADD);
    rect(200,200,100,100);
    rect(200,200,200,200);
    rect(200,200,500,500);
    //rect(displayWidth,0,100,100);
    //ellipse(random(500), random(500), random(100), random(100));
  pop();
  
  angle %= TWO_PI;
  angle += 0.06;
  //0.04でSTAR
  
  phaseScale %= TWO_PI;
  phaseScale += 0.1;
  
  phaseColor %= 360;
  phaseColor += 0.5;
  
}


function mouseClicked() {
  clear(0);
  background(0);
}
