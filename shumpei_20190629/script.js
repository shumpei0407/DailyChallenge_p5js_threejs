var canvas;
let noiseVal;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(500);
  colorMode(random(200,255));
  noStroke();
  background(255);
}

function draw() {
  blendMode(DIFFERENCE);
  background(random(15),random(15),255,10);
  fill(random(255),random(255),255,100);
  strokeWeight(50);
  stroke(0);
  noiseVal = noise(random(10), random(1000));
  var d = random(10,500);
//  ellipse(random(1000), random(1000), d, d);
  rect(random(1000), random(1000), 1000*sin(d)*noiseVal,0.1*sin(d)*noiseVal);
  rect(random(1000), random(1000), 0.1*cos(d)*noiseVal, 1000*sin(d)*noiseVal);
  var divNum = pow(2, int(random(1, 10)));
  var wSize = width / divNum;
  var hSize = height / divNum;
  var w = wSize * int(random(divNum));
  var h = hSize * int(random(divNum));
  if (random(1) < 0.96) {
    image(canvas, w, h, wSize, hSize);
  } else {
    fill(random(255),random(255),255);
    strokeWeight(50);
    stroke(0);
    rect(w, h, wSize, hSize);
  }
}