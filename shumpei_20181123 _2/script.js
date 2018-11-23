// Constants
var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;

function setup() {
  createCanvas(displayWidth, displayHeight);

  // Define colors
  b1 = color(9,0,14);
  b2 = color(242,241,236);
  //c1 = color(246, 225, 200);
  //c2 = color(146, 208, 214);

  noLoop();
}

function draw() {
  // Background
  setGradient(0, 0, width, height, b1, b2, Y_AXIS);
  //setGradient(width/2, 0, width/2, height, b2, b1, X_AXIS);
    
  // Foreground
  //setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  //setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
  blendMode(LIGHTEST);
  fill(140,100,0);
  noStroke();
  ellipse(width/2, height/2, 700, 700);
  fill(120,100,0);
  noStroke();
  ellipse(width/2, height/2, 600, 600);
  fill(100,100,0);
  noStroke();
  ellipse(width/2, height/2, 500, 500);
  fill(80,100,0);
  noStroke();
  ellipse(width/2, height/2, 400, 400);
  fill(60,100,0);
  noStroke();
  ellipse(width/2, height/2, 300, 300);
  fill(40,100,0);
  noStroke();
  ellipse(width/2, height/2, 200, 200);
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