// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var value = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);

  // Define colors
  //b1 = color(118,161,255);
  //b2 = color(242,241,236);
  //c1 = color(246, 225, 200);
  //c2 = color(146, 208, 214);
  //noLoop();
}

function draw() {
  b1 = color(118+value,171,255);
  b2 = color(value,241,236);
  // Background
  setGradient(0, 0, width, height, b2, b1, Y_AXIS);
  //setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
    
  // Foreground
  //setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  //setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  blendMode(BLEND);
  //fill(value,161,255);
  //noStroke();
  //ellipse(width/2, height/2, 500+value, 500+value);
  fill(value+10,171,255);
  noStroke();
  ellipse(width/2, height-value, 700+value, 700+value);
  fill(255);
  textSize(250);
  textFont('Shelby');
  text('Sunrise', width/3, height/2);
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

function mouseMoved() {
  value = value + 1;
  if (value > 255) {
    value = 0;
  }
}