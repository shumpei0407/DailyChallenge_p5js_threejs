var spacing = 100;
var circleSize;
var col1;
var col2;
var col3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  col1 = color('#8EDAE5');
  col2 = color('#F99695');
  
  console.log(col1);
}

function draw() {
  background(255);
  circleSize = map(mouseX, 0, width, 2, 100);
  noFill(); 
  noStroke();
  for (var x = 0; x <= width; x += spacing) {
    for (var y = 0; y <= height; y += spacing) {    
      fill(col1);
      rect(x, y, circleSize + 50, circleSize + 50); 
    }
  }

  fill(col1);
  ellipse(width/2,height/2,500,500);
  fill(col2);
  ellipse(100+width/2,height/2,500,500);

  fill(col2);
  strokeWeight(1);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('204', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
}

