var canvas;
let noiseVal;
let inconsolata;

function setup() {
  canvas = createCanvas(800, 800);
  frameRate(15);
  colorMode(255);
  stroke(0);
  background(0);
  drawingContext.shadowOffsetX = 10;
  drawingContext.shadowOffsetY = -10;
  drawingContext.shadowBlur = 20;
  drawingContext.shadowColor = 'gray';
}

function draw() {
  background(15);
  blendMode(DIFFERENCE);
  noiseVal = noise(random(2), random(2));
  noFill();
  strokeWeight(1);
  stroke(0);
  var d = random(10);
  var divNum = pow(2, int(random(1, 10)));
  var wSize = width / divNum;
  var hSize = height / divNum;
  var w = wSize * int(random(divNum));
  var h = hSize * int(random(divNum));
  strokeWeight(1);
  stroke(255);
  rect(0,0,800,800);

  if (random(1) < 0.8) {
  image(canvas, w, h, wSize, hSize);
  } else {
  noFill();
  stroke(255);
  ellipse(w, h, wSize, hSize);
//  rect(w, h, wSize, hSize);
  image(canvas, w, h, noiseVal*wSize, noiseVal*hSize);
  }

  strokeWeight(1);
  textFont('Oswald');
  noFill();
  textSize(random(150,500));
  text('ALIEN', random(-5,5)*noiseVal*windowWidth/3, random(-5,5)*noiseVal*windowHeight/2);
  fill(noiseVal*random(200,255),noiseVal*random(200,255),noiseVal*255);
  rectMode(RADIUS);
//  rect(windowWidth/2, windowHeight*0.5,noiseVal*random(10),noiseVal*random(10));
//  rect(windowWidth/2, windowHeight*0.5,noiseVal*random(900,1000),noiseVal*random(900,1000));

  noFill();
  strokeWeight(5);
  stroke(255);
  textSize(80);
  textAlign(CENTER);
  text('ALIEN', 400, 420);


}