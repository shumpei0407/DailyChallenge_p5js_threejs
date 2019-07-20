var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  noStroke();
  colors = [
    color(random(200), 200, 255),
    color(random(150), 150, 255),
    color(random(100), 100, 255),
    color(random(25), 25, 255)
  ];
}

function mousePressed() {
  isDarkest = !isDarkest;
}

function draw() {
  blendMode(EXCLUSION);
  if (isDarkest) {
    background(255);
    blendMode(DARKEST);
  } else {
    background(255);
    blendMode(MULTIPLY);
  }
  var r = 150;
  for (var x = 0; x * r <= width + r; x++) {
      var w = x * r;
    for (var y = 0; y * r <= height + r; y++) {
      var h = y * r;
      stroke(1);
      strokeWeight(10);
      for (var i = 0; i < 4; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount *0.08;
        angle += (x + y) % 2 == 0 ? -HALF_PI: HALF_PI;
//        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
//        ellipse(w + r * cos(angle), h + r * sin(angle), 100, 100);
        rect(w + r * cos(angle), h + r * sin(angle), 150, 150);
//        rect(w + r * tan(angle), h + r *cos(angle), 50, 50);
      }
    }
  }
}