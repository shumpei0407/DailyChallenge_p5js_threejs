function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 1, 1);
  background(255);
}

function draw() {
  if (random(1) < 0.7) {
    fill(random(255), random(255), 255,1);
  } else {
    fill(255,random(255), random(255),1);
  }
  var tr = random(1,20);
  var ta = random(TWO_PI);
  translate(width / 2 + cos(ta), height / 2 + sin(ta));
  noStroke();
  blendMode(MULTIPLY);
  var num = int(randomGaussian(200, 30));
  for (var i = 0; i < num; i++) {
    var r = map(pow(random(1), 3), 0, 1, 150, 300);
    var ang = random(TWO_PI);
    var size = random(1,30);
    ellipse(r * cos(ang), r * sin(ang), size, size);
//    rect(r * cos(ang), r * sin(ang), size, size);
  }
  filter(DILATE);
}