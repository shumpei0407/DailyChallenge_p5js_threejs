var xSpawn = 0;
var ySpawn = 0;
var boxX = -1;
var R = 100000;
var G = 100000;
var B = 100000;

function setup() {
  createCanvas(800, 800);
  background(0);
  while (boxX < width) {
    boxX = boxX + 1;
    noStroke();
    fill(map(boxX, 0, width, 0, 255));
    rect(boxX, 0, 1, height);
  }
  boxX = -1;
}

function draw() {
  //xSpawn = random(0, width);
  //ySpawn = random(0, height);
  //fill(map(xSpawn, 0, width, 255, 0));
  //ellipse(xSpawn, ySpawn, 50);
  while (boxX < width) {
    boxX = boxX + 1;
    noStroke();
    chance = random(0, 10);
    R = R + random(-500, 0);
    G = G + random(-500, 0);
    B = B + random(-500, 0);
    fill(R, G, B);
    rect(boxX, 0, 1, height);
  }
  boxX = -1;
  R = 100000;
  G = 100000;
  B = 100000;
    
    
    
　fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('271', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
}


