//Rispect https://www.openprocessing.org/sketch/857874
let pallete = ["#CB4042", "#D0104C", "#434343", "#373C38", "#EFBB24","#F19483"];
let sep = 5;
let rs;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
	rs = random(100);
} 

function draw() {
  background(0);
  randomSeed(rs);
  
  drawingContext.shadowColor = color(10, 0, 0);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowOffsetY = 10;
  drawingContext.shadowOffsetX = 10;
  
  for (let y = -height/3; y < height; y += height / 3) {
    let c1 = random(pallete);
    let c2 = random(pallete);
    let c3 = random(pallete);
    while (c1 == c2 || c2 == c3 || c3 == c1) {
      c1 = random(pallete);
      c2 = random(pallete);
      c3 = random(pallete);
    }
    let gradient = drawingContext.createLinearGradient(0, 0, width, height);

    gradient.addColorStop(0.1, c1);
    gradient.addColorStop(random(0.3,0.7), c2);
    gradient.addColorStop(1.0, c3);

    drawingContext.fillStyle = gradient;
    noStroke();
    beginShape();
    for (let x = -100; x <= width+100; x+=3) {
      let yy = y + map(noise(rs+y, x / 500, frameCount / 300), 0, 1, -height / sep, height / sep);
      vertex(x, yy);
    }
    vertex(width+100, height);
    vertex(0, height);
    endShape();
    
  }
    blendMode(SOFT_LIGHT);
    ellipse(400,400,400,400);
    
    textFont('Oswald');
    fill(200);
    strokeWeight(1);
    stroke(0);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('293', 52, 80);
    fill(255);
    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
    
    noLoop();
}


  


