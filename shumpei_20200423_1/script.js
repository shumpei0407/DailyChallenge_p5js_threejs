
var boxX = -1;
var R = 100000;
var G = 100000;
var B = 100000;

function setup() {
  createCanvas(800, 800);
  background(255);
//  drawingContext.shadowOffsetX = 5;
//  drawingContext.shadowOffsetY = 10;
//  drawingContext.shadowBlur = 100;
//  drawingContext.shadowColor = 'black';

}

function draw() {
//    blendMode(DIFFERENCE);
  while (boxX < width) {
    boxX = boxX + 1;
    noStroke();
    R = R + random(-515, 0);
    G = G + random(-500, 0);
    B = B + random(-500, 0);
    fill(R, G, B,4);
//    rect(boxX*2, random(1000), 100, random(100));
    rect(boxX*0.6, random(1000), random(100,400), random(100));
//    rect(boxX/2, random(1000), random(1000), random(100));
//    rect(boxX/4, random(1000), 100, random(100));
  }
  boxX = -1;
  R = 100000;
  G = 100000;
  B = 100000;

  noFill(0);
  strokeWeight(900);
  stroke(0);
  ellipse(400,400,400,400);
　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('272', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
}


