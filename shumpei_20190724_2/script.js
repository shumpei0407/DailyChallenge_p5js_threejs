var colors;
var isDarkest = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(100);
  noStroke();
  colors = [
    color(249, 211, 255),
    color(191, 247, 255),
    color(255, 198, 214),
    color(191, 227, 255)
  ];
}

function mousePressed() {
  isDarkest = !isDarkest;
}

function draw() {
  blendMode(BLEND);
  if (isDarkest) {
    background(250,224,155);
    blendMode(DARKEST);
  } else {
    background(250,224,155);
    blendMode(MULTIPLY);
  }
  var r = 120;
  for (var x = 0; x * r <= width + r; x++) {
      var w = x * r;
    for (var y = 0; y * r <= height + r; y++) {
      var h = y * r;
//      stroke(random(255),random(255),random(255),20);
//      strokeWeight(5);
        noStroke();
      for (var i = 0; i < 4; i++) {
        fill(colors[i]);
        var angle = TWO_PI / 4 * i + frameCount *0.01;
        angle += (x + y) % 2 == 0 ? -TWO_PI: TWO_PI;
//        angle += (x + y) % 2 == 0? -HALF_PI: HALF_PI;
//        ellipse(w + r * cos(angle), h + r * sin(angle), 100, 100);
        rect(w + r * tan(angle), h + r * sin(angle), 50, 50);
        rect(w + r * -1*tan(angle), h + r * sin(angle), 50, 50);
//        rect(w + r * tan(angle), h + r *cos(angle), 50, 50);
      }
    }
  }
}