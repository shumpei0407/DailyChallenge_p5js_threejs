var spacing = 100;
var circleSize;
var col1;
var col2;
var col3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  col1 = color(65, 105, 225);
  col2 = color(15, 24, 51);
  col3 = color(180, 191, 224);
  
  console.log(col1);
}

function draw() {
  background(255,10);
  circleSize = map(mouseX, 0, width, 25, 100);
  noFill(); 
  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {
      stroke(col1);
      ellipse(x, y, circleSize+50, circleSize + 50); 
      stroke(col2);
      ellipse(x, y, circleSize+40, circleSize + 40);
      stroke(col3);
      ellipse(x, y, circleSize+30, circleSize + 30);
    }
  }
}

function mousePressed() {
  col1 = color(random(255), 100, 0);
  col2 = color(100, random(255), 0);
  col3 = color(100, 0, random(255));
}

//
//function setup() {
//  createCanvas(windowWidth, windowHeight);
//　background(25,25,200,100);
//}
//
//function draw() {
//  fill(255);
//  strokeWeight(1);
//  textFont('Oswald');
//  textAlign(LEFT);
//  textSize(22);
//  text('NUMBER', 25, 40);
//  textSize(50);
//  text('203', 25, 100);
//  textSize(22);
//  textAlign(RIGHT);
//  text('@shumpei0407', width - 50, height - 50);
//    
////  blendMode(SUBTRACT);
//  fill(255,5);
//  stroke(255);
//  strokeWeight(0.5);
//  ellipse(width/2, height/2, 400, 400)
//    
//  noStroke();
//  fill(25,200,250,random(10));
//  ellipse(random(80)+width/2, random(80)+height/2, 1000, 1000);
//  fill(20,20,200,5);
//  ellipse(random(80)+width/2, random(80)+height/2, 800, 800);
//  fill(255,1);
//  ellipse(random(80)+width/2, random(80)+height/2, 600, 600);
//  fill(20,20,20,5);
//  ellipse(random(80)+width/2, random(80)+height/2, 500, 500);
//  fill(255,20,200,10);
//  ellipse(random(80)+width/2, random(80)+height/2, 400, 400);
////  fill(20,20,255,10);
////  fill(10,10,255,10);
////  ellipse(random(50)+width/2, random(50)+height/2, 300, 300);
//  
//
//}