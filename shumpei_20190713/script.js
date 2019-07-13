var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  noStroke();
  colors = [
    color(0, 255, 255,400),
    color(255, 0, 255),
    color(25, 25, 255,20),
    color(0, 0, 255),
  ];
}

function mousePressed() {
  isDarkest = !isDarkest;
}

function draw() {
  blendMode(DIFFERENCE);
  if (isDarkest) {
    background(200);
    blendMode(LIGHTEST);
  } else {
    background(90);
    blendMode(MULTIPLY);
  }
  var r = 120;
  for (var x = 0; x * r <= width + r; x++) {
      var w = x * r;
    for (var y = 0; y * r <= height + r; y++) {
      var h = y * r;
      stroke(255);
      strokeWeight(5);
      for (var i = 0; i < 4; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount *0.085;
        angle += (x + y) % 2 == 0 ? -QUARTER_PI: QUARTER_PI;
//        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
        rect(w + r * cos(angle), h + r * sin(angle), 100, 100);
      }
    }
  }
}