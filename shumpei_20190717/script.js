var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  noStroke();
  colors = [
    color(255, 127, 191),
    color(255, 255, 128),
    color(128, 255, 191),
    color(128, 128, 255),
  ];
}

function mousePressed() {
  isDarkest = !isDarkest;
}

function draw() {
  blendMode(DIFFERENCE);
  if (isDarkest) {
    background(255, 128, 213, 1);
    blendMode(LIGHTEST);
  } else {
    background(90);
    blendMode(DIFFERENCE);
  }
  var r = 100;
  for (var x = 0; x * r <= width + r; x++) {
      var w = x * r;
    for (var y = 0; y * r <= height + r; y++) {
      var h = y * r;
//      stroke(10);
//      strokeWeight(5);
      for (var i = 0; i < 4; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount*0.01;
//        angle += (x + y) % 2 == 0 ? -PI: PI;
        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
//        angle += (x + y) % 2 == 0? -QUARTER_PI: QUARTER_PI;
        rect(w + r * tan(angle)*cos(angle), h + r * sin(angle), random(100), random(10));
        rect(w + r * cos(angle), h + r * tan(angle)*sin(angle), random(10), random(100));
      }
    }
  }
}