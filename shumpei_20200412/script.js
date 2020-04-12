let yoff = 1.0; 

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(241,86,154,1);
  stroke(29, 201, 213, 30);
  fill(255,10);

  beginShape();
  let xoff = 0; 
    
  for (let x = 0; x <= width; x += 5) {
   
    let y = map(noise(xoff, yoff), 0, 1, 550, 1000);
    vertex(x, y);
    xoff += 0.005;
  }
  yoff += 0.006;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
    
  noFill(0);
  strokeWeight(350);
  stroke(29, 201, 213);
  ellipse(400,400,800,800)
    
  textFont('Oswald');
  fill(254,244,244);
  noStroke();
  textSize(20);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('267', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 25, height - 25); 
}


