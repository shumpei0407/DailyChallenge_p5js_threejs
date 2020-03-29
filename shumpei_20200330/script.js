

function setup() {
  createCanvas(800, 800);
  background(255);
//  background(0, 6, 17);
    
  fill(0);
  textFont('Oswald');
  strokeWeight(2);
  noStroke(255);
  textAlign(LEFT);
  textSize(20);
  text('NUMBER', 50, 50);
  textSize(40);
  text('257', 52, 90);
    
  textSize(20);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 

  drawingContext.shadowOffsetX = 10+frameCount % 256;
  drawingContext.shadowOffsetY = 10+frameCount % 256;
  drawingContext.shadowBlur = 1;
  drawingContext.shadowColor = 'BLACK';  
//  drawingContext.shadowColor = 'white';  
}

function draw() {
  blendMode(BLEND);
  randomChord();
  randomChord();
}

function randomChord() {
  let x = random(1,10);
  let angle1 = random(0,2 * PI);
  let xpos1 = random(100) + 400 * cos(angle1);
  let ypos1 = 300 + 400 * sin(angle1);

  let angle2 = random(0,2 * PI);
  let xpos2 = random(100) + 200 * cos(angle2);
  let ypos2 = 100 + 200 * sin(angle2);
    
  let angle3 = random(0,2 * PI);
  let xpos3 = random(300,400) + 400 * cos(angle3);
  let ypos3 = 100 + 500 * sin(angle3);
   
  strokeWeight(4);
  stroke(0, 6, 17);
    
  fill(29, 41, 107);
  ellipse(xpos1*random(1,1.1), ypos1*random(1,1.1), random(1,150));
    
  fill(255);
  ellipse(xpos1*random(1,1.1), ypos1*random(1,1.1), random(1,60));
    
  fill(109, 204, 251);
  ellipse(xpos1*random(1,1.1), ypos1*random(1,1.1), random(10,30));
    
    
  fill(29, 41, 107);
  ellipse(xpos2*random(1,1.1), ypos2*random(1,1.1), random(1,80));
    
  fill(255);
  ellipse(xpos2*random(1,1.1), ypos2*random(1,1.1), random(1,60));
    
  fill(109, 204, 251);
  ellipse(xpos2*random(1,1.1), ypos2*random(1,1.1), random(10,30));
    
  fill(29, 41, 107);
  ellipse(xpos3*random(1,1.1), ypos3*random(1,1.1), random(1,80));
    
  fill(255);
  ellipse(xpos3*random(1,1.1), ypos3*random(1,1.1), random(1,60));
    
  fill(109, 204, 251);
  ellipse(xpos3*random(1,1.1), ypos3*random(1,1.1), random(10,30));
    
  ellipse(mouseX,mouseY,random(1,10));
    

}
