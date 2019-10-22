let beginX = 400; 
let beginY = 400; 
let endX = 450; 
let endY = 450; 
let distX; 
let distY; 
let exponent = 4; 
let x = 0.0; 
let y = 0.0; 
let step = 0.005; 
let pct = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(0, 10);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(255,10);
  ellipse(x, y, 500, 500);

  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('192', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
}

function mousePressed() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
