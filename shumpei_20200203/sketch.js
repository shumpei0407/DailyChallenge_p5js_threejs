let t = 0; 

function setup() {
  createCanvas(800, 800);
  noStroke();

}

function draw() {
  background(1, 4, 87,100); 
  fill(1, 4, 87,100);
  stroke(0);


  for (let x = 0; x <= width; x = x + 10) {
    for (let y = 0; y <= height; y = y + 200) {

      const xAngle = map(mouseX, 0, width, -10 * PI, 10 * PI, true);
      const yAngle = map(mouseY, 0, height, -10 * PI, 10 * PI, true);

      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 100 * cos(2 * PI * t + angle);
      const myY = y + 100 * sin(2 * PI * t + angle);

      strokeWeight(3);
      stroke(179,255,255,30);
      ellipse(400,400,myX/2, myX/2); 
      stroke(255,179,255,30);
      ellipse(400,400,myY/2, myY/2); 
        
    }
  }

  t = t + 0.01;
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('250', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
//  textSize(35);
//  text('Glow', width/2, 705);

}

