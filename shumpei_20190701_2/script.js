var canvas;
let noiseVal;
let inconsolata;

function preload() {
inconsolata = loadFont('Metrool.otf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(50);
  colorMode(200,255,255);
  noStroke();
  background(255);
}

function draw() {
  background(random(200,255),random(200,255),255,300);
  blendMode(DIFFERENCE);
//  blendMode(ADD);
//  background(random(20,25),10);
//  background(random(20,25),200);
  fill(255);
//  strokeWeight(10);
//  stroke(0);
  noiseVal = noise(random(500,1000), random(500,1000));
  var d = random(100,500);
//  ellipse(random(1000), random(1000), d, d);
//  rect(random(1000), random(1000), d,d);
//  rect(random(1000), random(1000), d*noiseVal,d*noiseVal);
  var divNum = pow(2, int(random(1, 10)));
  var wSize = width / divNum;
  var hSize = height / divNum;
  var w = wSize * int(random(divNum));
  var h = hSize * int(random(divNum));
//  textFont('Metrool');
//  fill(random(100,255),random(100,255),255);
//  textSize(200);
//  text('Shumpei', random(-10,10)*noiseVal*windowWidth/3, random(-10,10)*noiseVal*windowHeight/2);
  if (random(1) < 0.8) {
  image(canvas, w, h, wSize, hSize);
  } else {
  fill(random(100,255),random(100,255),255,100);
//    strokeWeight(1);
  noStroke();
//    ellipse(w, h, wSize, hSize);
  image(canvas, w, h, noiseVal*wSize, noiseVal*hSize);
  }
//  fill(random(200,255),random(200,255),255,100);
//  noStroke();
//  rect(windowWidth, windowHeight,800,800);
//  rotate(PI / random(-10,10));
  textFont('Metrool');
  fill(255);
  textSize(random(100,500));
  text('Shumpei', random(-5,5)*noiseVal*windowWidth/3, random(-5,5)*noiseVal*windowHeight/2);
  fill(200);
  rectMode(RADIUS);
  rect(windowWidth/2, windowHeight*0.5,100,100);

  fill(random(255));
  textSize(50);
  textAlign(CENTER);
  text('Shumpei', windowWidth/2, windowHeight*0.52);
}