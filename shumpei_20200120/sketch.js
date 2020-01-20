let i;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(30);
  noStroke();
  for (let i = 0; i < height; i += 45) {
    fill(217, 51, 63);
    rect(0, i, width, 25);
    fill(255);
    rect(i, 0, 25, height);
  }
  noFill();
  stroke(0);
  strokeWeight(300);
  ellipse(400,400,850,850);
    
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('243', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  textSize(20);
  text('JAPANESE PATTERN', width/2, 720);
}


