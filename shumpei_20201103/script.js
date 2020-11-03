function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(20, 34, 69,100);
  noFill();
  strokeWeight(10);
  stroke(255);
  
  for(let i = 0; i < 1000; i++){
      strokeWeight(0.1);
      stroke(255-i, 1000-i, i,i);
      ellipse(i,i,2000-i,800+i); 
      ellipse(0,0,800+i,2000-i); 

  }
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('308', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  noStroke();
}
