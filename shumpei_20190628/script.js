var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(100);
  colorMode(random(200,255));
  noStroke();
  background(255);
}

function draw() {
  blendMode(HARD_LIGHT);
  background(random(255),10);
  fill(random(50),100);
  var d = random(90,200);
  rect(random(1000), random(1000), d, d);
  var divNum = pow(2, int(random(1, 10)));
  var wSize = width / divNum;
  var hSize = height / divNum;
  var w = wSize * int(random(divNum));
  var h = hSize * int(random(divNum));
  if (random(1) < 0.99) {
    image(canvas, w, h, wSize, hSize);
  } else {
    fill(random(50),100);
//    strokeWeight(50);
//    stroke(random(255),10);
    rect(w, h, wSize, hSize);
  }
}