let t = 0; 

function setup() {
  createCanvas(800, 800);
  noStroke();
  fill(241, 241, 241,1);
}

function draw() {
//  blendMode(MULTIPLY);
  background(243, 8, 7,20); 

  for (let x = 0; x <= width; x = x + 60) {
    for (let y = 0; y <= height; y = y + 60) {

      const xAngle = map(mouseX, 0, width, -10 * PI, 10 * PI, true);
      const yAngle = map(mouseY, 0, height, -10 * PI, 10 * PI, true);

      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 20 * sin(2 * PI * t + angle);
      const myY = y + 20 * cos(2 * PI * t + angle);

      noFill();
      strokeWeight(1);
      stroke(255,255,255,150);
      line(myX, myY, 0,0); 
//      rect(myX, myY, 100,100); 
//      line(150,150,myX, myY); 
    }
  }

  t = t + 0.01;
    
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
  text('246', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  textSize(20);
  text('JAPANESE PATTERN', width/2, 720);

}

