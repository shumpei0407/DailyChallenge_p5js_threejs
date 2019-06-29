var canvas;
let noiseVal;
let inconsolata;

function preload() {
inconsolata = loadFont('Metrool.otf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(200);
  colorMode(random(200,255));
  noStroke();
  background(0);
}

function draw() {
  blendMode(DIFFERENCE);
//  blendMode(BLEND);
  background(random(20,25),10);
//  background(random(20,25),200);
  fill(random(100,255),10);
//  strokeWeight();
  noStroke();
  noiseVal = noise(random(500,1000), random(500,1000));
  var d = random(100,500);
//  ellipse(random(1000), random(1000), d, d);
  rect(random(1000), random(1000), d,d);
  rect(random(1000), random(1000), d*noiseVal,d*noiseVal);
  var divNum = pow(2, int(random(1, 10)));
  var wSize = width / divNum;
  var hSize = height / divNum;
  var w = wSize * int(random(divNum));
  var h = hSize * int(random(divNum));
//  textFont('Metrool');
//  fill(random(100,255),random(100,255),255);
//  textSize(200);
//  text('Shumpei', random(-10,10)*noiseVal*windowWidth/3, random(-10,10)*noiseVal*windowHeight/2);
  if (random(1) < 0.96) {
  image(canvas, w, h, wSize, hSize);
  } else {
  fill(random(100,255),random(100,255),255,100);
//    strokeWeight(1);
  noStroke();
//    ellipse(w, h, wSize, hSize);
  image(canvas, w, h, noiseVal*wSize, noiseVal*hSize);
  }
  fill(random(200,255),random(200,255),255,100);
  noStroke();
  rect(windowWidth, windowHeight,800,800);
  rotate(PI / random(-10,10));
  textFont('Metrool');
  fill(random(100,255),random(100,255),255);
  textSize(200);
  text('Shumpei', random(-10,10)*noiseVal*windowWidth/3, random(-10,10)*noiseVal*windowHeight/2);
}