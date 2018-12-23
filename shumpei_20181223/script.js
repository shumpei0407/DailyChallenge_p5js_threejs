function setup(){
  createCanvas(windowWidth, windowHeight);
  background(22,22,22);
}

function draw(){
  background(22,22,22);
  stroke('#d6eaff');
  strokeWeight(5);
    
  fill(255,255,255);
  textSize(100);
  textFont('GRAYSTROKE');
  text('XmasCamp', width/3,height/1.9);
    
  noFill();
  ellipse(width/2,height/2,700,700);

  
  if (mouseIsPressed){
      background(40,40,40);
        ellipse(width/2,height/2,random(810,800),random(810,800));
    stroke(random(25),random(255),random(255));
        ellipse(width/2,height/2,random(810,800),random(810,800));
    stroke(random(255),random(25),random(255));
        ellipse(width/2,height/2,random(880,800),random(880,800));
    stroke(random(255),random(255),random(25));
        ellipse(width/2,height/2,random(890,820),random(890,820));
  
    fill(random(255),random(255),random(255));
    textSize(100);
    textFont('GRAYSTROKE');
    text('Are you ready?', width/3.7,height/1.9);
  }    
    
}
  