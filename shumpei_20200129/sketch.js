let t = 0; 

function setup() {
  createCanvas(800, 800);
  noStroke();
//  fill(186, 221, 214,1);
//  frameRate(20);
}

function draw() {
//  blendMode(DIFFERENCE);
  background(47, 52, 80); 

  for (let x = 0; x <= width; x = x + 10) {
    for (let y = 0; y <= height; y = y + 200) {

      const xAngle = map(mouseX, 0, width, -10 * PI, 10 * PI, true);
      const yAngle = map(mouseY, 0, height, -10 * PI, 10 * PI, true);

      const angle = xAngle * (x / width) + yAngle * (y / height);

      const myX = x + 50 * sin(2 * PI * t + angle);
      const myY = y + 50 * sin(2 * PI * t + angle);

      strokeWeight(1);
      stroke(35, 159, 196,50);
      rect(myX, myY, 100,100); 
      line(150,150,myX, myY); 
      stroke(35, 159, 196,50);
      line(width,height/2,myX, myY); 
      stroke(35, 159, 196,50);
      line(0,height/2,myX, myY); 
    }
  }

  t = t + 0.01;
    
  noFill();
  stroke(47, 52, 80);
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
  text('248', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  textSize(20);
  text('WAVE', width/2, 720);

}

