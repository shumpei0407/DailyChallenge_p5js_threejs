var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  noStroke();
  colors = [
    color(200, 200, 255),
    color(150, 150, 255),
    color(100, 100, 255),
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
  var r = 150;
  for (var x = 0; x * r <= width + r; x++) {
      var w = x * r;
    for (var y = 0; y * r <= height + r; y++) {
      var h = y * r;
      noStroke();
      for (var i = 0; i < 3; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount *0.01;
        angle += (x + y) % 2 == 0 ? -HALF_PI: HALF_PI;
//        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
        rect(w + r * tan(angle), h + r *tan(angle), 100, 100);
      }
    }
  }
}