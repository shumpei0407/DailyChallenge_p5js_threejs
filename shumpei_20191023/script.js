let diameter;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  diameter = height - 100;
  noStroke();
  fill(255,25);
}

function draw() {
  background(20,25);
　
  let d1 = 10 + (tan(angle) * diameter) / 2 + diameter / 2;
  let d2 = 10 + (tan(angle + PI / 2) * diameter) / 2 + diameter / 2;
  let d3 = 10 + (tan(angle + PI) * diameter) / 2 + diameter / 2;
  
  rect(0, height / 2, -1*d1, -1*d1);
  rect(width, height / 2, d3, d3);
  ellipse(width / 2, height / 2, d2, d2);

  angle += 0.02;
    
//  fill(255);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('193', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
    
}

