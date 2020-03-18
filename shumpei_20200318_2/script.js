function setup() {
  createCanvas(800, 800);
  background(245);
    
  drawingContext.shadowOffsetX = 100+frameCount % 256;
  drawingContext.shadowOffsetY = 100+frameCount % 256;
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = 'black';  
}


function draw() {
  background(245);
  strokeWeight(10);
  noStroke();
  fill(120, 255,frameCount % 256,55);
  ellipse(400,400,500,500);


  fill(200);
  textFont('Oswald');
  strokeWeight(2);
  noStroke();
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('255', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

}