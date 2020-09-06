//Rispect https://www.openprocessing.org/sketch/857874
//水墨画
let pallete = ["#1C1C1C", "#0C0C0C", "#434343", "#373C38", "#4F4F48","#91989F"];
//赤・金
//let pallete = ["#1C1C1C", "#EFBB24", "#434343", "#CB1B45", "#4F4F48","#91989F"];
let sep = 5;
let rs;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100, 100);
	rs = random(10);
} 

function draw() {
  background(0);
  randomSeed(rs);
  
  drawingContext.shadowColor = color(100);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowOffsetY = 2;
  drawingContext.shadowOffsetX = 2;
  
  for (let y = -height/3; y < height; y += height / 100) {
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
    gradient.addColorStop(random(0.1,0.7), c2);
    gradient.addColorStop(1.0, c3);

    drawingContext.fillStyle = gradient;
    noStroke();
    beginShape();
    for (let x = -100; x <= width+100; x+=2) {
      let yy = x-10 + map(noise(rs+y, x / 100+y, frameCount / 30), 0, 1, -height / sep, height / sep);
      vertex(x, yy);
    }

    vertex(width+10, height);
    vertex(0, height);
    endShape();
    
  }
    ellipse(700,80,100,100);
//    blendMode(SOFT_LIGHT);
//    ellipse(400,400,400,400);
    
    textFont('Oswald');
    fill(100);
    strokeWeight(1);
    stroke(100);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('305', 52, 80);
//    fill(255);
//    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
    
    noLoop();
}


  


