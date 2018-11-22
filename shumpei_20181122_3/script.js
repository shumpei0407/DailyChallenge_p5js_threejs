// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
  createCanvas(displayWidth, displayHeight);

  // Define colors
  b1 = color(246,185,202);
  b2 = color(95,163,180);
  c1 = color(246, 225, 200);
  c2 = color(146, 208, 214);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width, height, b1, b2, X_AXIS);
  //setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
    
  // Foreground
  //setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  //setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  blendMode(DIFFERENCE);
  fill(10);
  strokeWeight(10);
  stroke(20);
  rect(width/10+200, height/3-200, 1000, 500);
  rect(width/10+100, height/3-100, 1000, 500);
  rect(width/10, height/3, 1000, 500);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}