var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(70);
  noStroke();
  colors = [
    color(104, 204, 255,300),
    color(204, 238, 255),
    color(0, 170, 255),
    color(0, 34, 54,10),
  ];
}

function mousePressed() {
  isDarkest = !isDarkest;
}

function draw() {
  blendMode(DIFFERENCE);
  if (isDarkest) {
    background(50);
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
      noStroke(0);
//      strokeWeight(5);
      for (var i = 0; i < 4; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount;
//        angle += (x + y) % 2 == 0 ? -PI: PI;
        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
        angle += (x + y) % 2 == 0? -QUARTER_PI: QUARTER_PI;
        ellipse(w + r * tan(angle)*cos(angle), h + r * tan(angle)* sin(angle), random(20,80), random(20,80));
      }
    }
  }
}