let revealSize = 300;
let seaimage;

function preload(){
    seaimage = loadImage('sea1.jpg');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw(){
  image(seaimage, 0, 0, width, height);
    
//  fill(0);
//  strokeWeight(1);
//  textFont('Oswald');
//  textAlign(LEFT);
//  textSize(22);
//  text('NUMBER', 25, 40);
//  textSize(50);
//  text('206', 25, 100);
//  textSize(22);
//  textAlign(RIGHT);
//  text('@shumpei0407', width - 50, height - 50);

//filter(THRESHOLD);
//filter(INVERT);
  filter(POSTERIZE, 7);
//filter(GRAY);
  fill(0,0,51);
  translate(mouseX, height/2);
  beginShape();
// Exterior part of shape, clockwise winding
  vertex(-width, -height);
  vertex(width, -height);
  vertex(width, height);
  vertex(-width, height);
// Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-revealSize, -revealSize);
  vertex(-revealSize, revealSize);
  vertex(revealSize, revealSize);
  vertex(revealSize, -revealSize);
  endContour();
  endShape(CLOSE);
  
//  strokeWeight(300);
//  noFill();
//  stroke(0);
//  ellipse(0,0,1200);
  fill(252,252,255);
  strokeWeight(10);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(200);
  text('SURF', -500, -100);
  textSize(40);
  text('NUMBER', -490, -10);
  textSize(90);
  text('208', -490, 90);
  textSize(30);
  text('@shumpei0407', -490, 140);
//    Chewy|Cookie|Limelight|Pacifico|Plaster|Sacramento|Satisfy|Stoke|Yellowtail|Geo|Oswald|Lobster
}

