function setup() {
  createCanvas(windowWidth, windowHeight);
　background(25,25,200,100);
}

function draw() {
  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('203', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
    
//  blendMode(SUBTRACT);
  fill(255,5);
  stroke(255);
  strokeWeight(0.5);
  ellipse(width/2, height/2, 400, 400)
    
  noStroke();
  fill(25,200,250,random(10));
  ellipse(random(80)+width/2, random(80)+height/2, 1000, 1000);
  fill(20,20,200,5);
  ellipse(random(80)+width/2, random(80)+height/2, 800, 800);
  fill(255,1);
  ellipse(random(80)+width/2, random(80)+height/2, 600, 600);
  fill(20,20,20,5);
  ellipse(random(80)+width/2, random(80)+height/2, 500, 500);
  fill(255,20,200,10);
  ellipse(random(80)+width/2, random(80)+height/2, 400, 400);
//  fill(20,20,255,10);
//  fill(10,10,255,10);
//  ellipse(random(50)+width/2, random(50)+height/2, 300, 300);
  

}