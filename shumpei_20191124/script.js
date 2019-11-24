let revealSize = 200;
let seaimage;

function preload(){
    seaimage = loadImage('seaimage2.jpg');
    seaimage2 =  loadImage('lake2.jpg');
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function draw(){
//  image(seaimage2, 0, height/2, width, 0);
  image(seaimage, 0,0, width, height);
  fill(25);
  strokeWeight(0.1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('207', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
    
  filter(INVERT);
//  filter(GRAY);
//  filter(BLUR, 3);
  filter(POSTERIZE, 5);
  
  fill(255,100,255,80);
  translate(mouseX, mouseY);
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
    
  fill(255,100,255,80);
  strokeWeight(0.1);
  stroke(255);
  rect(-150,-150,400,400);
  
//  strokeWeight(200);
//  noFill();
//  stroke(0);
//  ellipse(0,0,600);

}

//
//
//let pg;
//let img;
//
//function preload() {
//  img = loadImage('seaimage.jpg');
//}
//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
////  pg = createGraphics(windowWidth/4, windowHeight/4);
////　angleMode(DEGREES);
//}
//
//function draw() {
//  for (var i = 0; i < width ; i += 100) {
//  image(img, 1*i, 1*i);
//  }
////  blendMode(BLEND);
//  filter(INVERT);
//  strokeWeight(10);
//  stroke(255,1);
//  fill(255,30);
//  ellipse(width/2, height/2,400);
//    
//  fill(255);
//  strokeWeight(1);
//  textFont('Oswald');
//  textAlign(LEFT);
//  textSize(22);
//  text('NUMBER', 25, 40);
//  textSize(50);
//  text('205', 25, 100);
//  textSize(22);
//  textAlign(RIGHT);
//  text('@shumpei0407', width - 50, height - 50);
//
//}
//
//        
//
