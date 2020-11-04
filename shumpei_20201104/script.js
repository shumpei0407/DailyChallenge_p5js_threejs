function setup() {
  createCanvas(800, 800);
}

function draw() {
　frameRate(4);
  background(239, 187, 36, 80);
  noFill();
//  strokeWeight(0);
//  stroke(255);
  
  for(let i = 0; i < 100; i++){
      fill(255,107,140,60);
      strokeWeight(5);
      noStroke();
      ellipse(i*10*random(10),800,100*i,8*i); 

//      blendMode(ADD);
      noStroke(25);
      fill(255,235,25,5);
      ellipse(400+random(-50,50),300+random(50),random(80)+300,random(80)+300);

  }
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('309', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  noStroke();
}
