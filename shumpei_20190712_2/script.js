var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(50);
  noStroke();
  colors = [
    color(0, 255, 255),
    color(255, 0, 255),
    color(255, 255, 0),
  ];
}

function mousePressed() {
  isDarkest = !isDarkest;
}

function draw() {
  blendMode(DIFFERENCE);
  if (isDarkest) {
    background(255);
    blendMode(DARKEST);
  } else {
    background(90);
    blendMode(MULTIPLY);
  }
  var r = 120;
  for (var x = 0; x * r <= width + r; x++) {
      var w = x * r;
    for (var y = 0; y * r <= height + r; y++) {
      var h = y * r;
      noStroke();
      for (var i = 0; i < 3; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount *0.03;
        angle += (x + y) % 2 == 0 ? -HALF_PI: HALF_PI;
//        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
        rect(w + r * cos(angle), h + r * sin(angle), 100, 100);
      }
    }
  }
}