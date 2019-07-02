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
  stroke(0);
  background(255);
}

function draw() {
  background(0);
  blendMode(DIFFERENCE);
//  blendMode(LIGHT);
//  background(random(20,25),10);
//  background(random(20,25),200);
  noiseVal = noise(random(100,1000), random(100,1000));
  noFill();
  strokeWeight(noiseVal*random(-1,1));
  stroke(0);
  var d = random(100);
  ellipse(random(1000), random(1000), d, d);
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
  noFill();
//    strokeWeight(1);
  noStroke();
  ellipse(w, h, wSize, hSize);
  image(canvas, w, h, noiseVal*wSize, noiseVal*hSize);
  }
//  fill(random(200,255),random(200,255),255,100);
//  noStroke();
//  rect(windowWidth, windowHeight,800,800);
//  rotate(PI / random(-10,10));
//  rect(random(1000),random(1000),noiseVal*random(100,500),noiseVal*random(100,500));
  textFont('Metrool');
  noFill();
  textSize(random(150,200));
  text('Shumpei', random(-5,5)*noiseVal*windowWidth/3, random(-5,5)*noiseVal*windowHeight/2);
  fill(noiseVal*random(255),noiseVal*random(255),noiseVal*255);
  rectMode(RADIUS);
  rect(windowWidth/2, windowHeight*0.5,noiseVal*random(10),noiseVal*random(10));
  rect(windowWidth/2, windowHeight*0.5,noiseVal*random(900,1000),noiseVal*random(900,1000));

  fill(255);
  textSize(noiseVal*random(400,500));
  textAlign(CENTER);
  text('Shumpei', windowWidth/2, windowHeight*0.52);
}