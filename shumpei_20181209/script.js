var time = 0; 
var theta = 0;
var frames = 240;
var num = 200;
var num2 = 6;
var rs;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //smooth(8);
  noStroke();
  rs = random(100);
}

function draw() {
  randomSeed(rs);
  background("#cce5ff");
  time = (frameCount % frames) / float(frames);
  for (var i = 0; i < num; i++) {
    drawBubble(i);
  }
  //theta += TWO_PI / frames;
  
    if (mouseIsPressed) createCanvas(windowWidth, windowHeight);
  
}

function drawBubble(i) {
  var x = random(width);
  var y = random(height);
  var sc = random(1, 3);
  var rotation = random(-.01, 0.1);
  var m = map(sin(theta + (TWO_PI / num) * i), -1, 1, .5, 2);
  var sz = random(20, 50) * m;
  push();
  scale(sc);
  translate(x, y);
  rotate(rotation);
  fill('rgba(226,198,255,.5)');
  if (random(1) > .6) fill('rgba(225,255,198, .5)');
  if (random(1) > .8) fill('rgba(198,225,198, .5)');
  ellipse(0, -time * height + height, sz, sz);
  ellipse(0, -time * height, sz, sz);
  pop();
}

function mouseReleased() {
  rs = random(10000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
