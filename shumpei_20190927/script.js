

var drawMode = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
//  noFill();
}

function draw() {    
  background(255); 
    
  fill(0);
  ellipse(windowWidth/2, windowHeight/2,450)
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(random(20));
  overlay();

  // second shape (dynamically translated/rotated and scaled)
  var x = map(mouseX, 0, width, -10, 10);
  var a = map(mouseX, mouseY, width, -0.5, 0.5);
  var s = map(mouseY, 0, height, 1, 1);

  if (drawMode == 1) rotate(a);
  if (drawMode == 2) translate(x, 0);
  scale(x);

  strokeWeight(2);
  overlay();
    
}

function overlay() {
  var w = width - 100;
  var h = height - 100;

  if (drawMode == 1) {
    for (var i = -w / 2; i < w / 2; i += 10) {
      line(i, -h / 2, i, h / 2);
    }
  } else if (drawMode == 2) {
    for (var i = 0; i < w; i += 100) {
      ellipse(0, 0, i);
    }
  }
}
