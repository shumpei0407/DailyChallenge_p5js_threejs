//https://editor.p5js.org/techty/sketches/HUs2dx-vF
const tileCount = 80;
const noiseScale = 0.02;

var grid;
var xnoise;
var ynoise;
var t = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(141, 129, 102);
//  blendMode(BLEND);
  noStroke();
  fill(188, 159, 119, 200);
  ellipse(width/2,height/2,410,410);
  
  fill(159, 53, 58);
  // stroke(139, 132, 125);
  // strokeWeight(5);
  ellipse(width/2,height/2,400,400);
  stroke(255,100);
//  strokeWeight(random(2));
  fill(255);
  rect(800,10,10,10);
  createGrid();
  showGrid();
  t += 0.01;
    
  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(255);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('307', 52, 80);
//    fill(255);
//    stroke(0);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  noStroke();
  fill(159, 53, 58,100);
  text('After a calm comes a storm', width/2, 650);
  textAlign(CENTER);
  textSize(20);
}

function createGrid() {
  grid = [];
  let tileSize = width / tileCount;
  ynoise = t;
  for (let row = 0; row < tileCount; row++) {
    grid[row] = [];
    xnoise = t;
    for (let col = 0; col < tileCount; col++) {
      let x = col * tileSize;
      let y = row * tileSize;
      let a = noise(xnoise, ynoise) * 255;
      grid[row][col] = new Tile(x, y, tileSize, a);
      xnoise += noiseScale;
    }
    ynoise += noiseScale*2;
  }
}

function showGrid() {
  for (let row = 0; row < tileCount; row++) {
    for (let col = 0; col < tileCount; col++) {
      grid[row][col].show();
    }
  }
}

class Tile {
  constructor(x, y, size, a) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.c = color(2, a);
  }

  show() {
    noStroke();
    fill(this.c);
    rect(this.x, this.y, this.size, this.size);
  }
}
    


  


