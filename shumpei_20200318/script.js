function setup() {
  createCanvas(800, 800);
  background(255);
    
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 40;
  drawingContext.shadowColor = 'white';  
}


function draw() {
  background(255);
  strokeWeight(950);
  stroke(1);
  fill(10,10,10);
  ellipse(400,400,500,500);


  fill(255);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('255', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

}