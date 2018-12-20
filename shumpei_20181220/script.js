var angle;
var pos;
var side;

function setup() {
  side = 50;
  createCanvas(windowWidth, windowHeight);
  angle = 0;
  pos = p5.Vector.fromAngle(0);
  setRadius();
}

function setRadius() {
  var m = min(windowWidth, windowHeight);
  var radius = m/2-side*1.5;
  pos.setMag(radius);
}

function drawRect(pos) {
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  ellipse(side/2, side/2, side/2, side/2);
  pop();
}

function draw() {
  translate(windowWidth/2, windowHeight/2);
  var a = angle*angle/200;
  fill('#7fffff');
  strokeWeight(2);
  blendMode(DIFFERENCE);
  stroke('#ffff7f');
  //noStroke();
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), sin(a)));
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), sin(a)));
  drawRect(p5.Vector.mult(pos.rotate(TWO_PI/3), sin(a)));
  //drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(a)));
  //drawRect(p5.Vector.mult(pos.rotate(TWO_PI/5), sin(a)));
  angle -= 0.03;
  pos.rotate(0.1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setRadius();
}