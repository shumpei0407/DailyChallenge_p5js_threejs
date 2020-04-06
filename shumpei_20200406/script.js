let birch;
let points;
let word = "桜";
let x;
let y;
let size = 520;

function preload(){
  birch = loadFont('assets/Hannari.otf');
}

function setup() {
  createCanvas(800,800);
  x = 170;
  y = 570;
  points = birch.textToPoints(word, x, y, size);
  noStroke();
  fill(0);

  
}

function draw() {
//  blendMode(MULTIPLY);
  background(25);
  textFont(birch);
  textSize(size);
  fill(220);
  
  for(let i = 0; i < points.length; i++){
    
    let c = noise(i + frameCount * 0.005 ) * 255;
    
    let pt = points[i];
    
    let nx = noise(i * 10.1 + frameCount * 0.01) * 10 - 5.0;
    let ny = noise(i * 10.2 + frameCount * 0.01) * 10 - 5.0;
    let rotX = sin(frameCount/20) * 15;
    let rotY = sin(frameCount/20) * 15;

    stroke(254,244,244);
    strokeWeight(1);
    noFill();
    rect(pt.x + nx*3- rotX, pt.y + ny*3- rotY,  rotX*1.5, rotY*1.5);
      
      
  }
  textFont('Oswald');
  fill(254,244,244);
  noStroke();
  textSize(20);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('266', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 25, height - 25); 
  
}

