let grid, zoom, cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = [];
  zoom = 40;
  cellSize = width / zoom;
  //noLoop();
}

function draw() {
  background('#043c78');
  fill(255,255,178,1);
  noStroke();
  for (let col = 0; col < zoom; col+=1) {
    for (let row = 0; row < zoom; row+=2) {
      x = cellSize / 2 + (cellSize * col);
      y = cellSize / 2 + (cellSize * row);
      d = dist(x, y, mouseX, mouseY);
      stroke(255,255,180,d/30);
      line(x, y, mouseX, mouseY);
      stroke(255,180,255,d/30);
      line(x, y, mouseX-1, mouseY-1);
      stroke(180,255,255,d/30);
      line(x, y, mouseX+1, mouseY+1);
      ellipse(x, y, mouseX, mouseY);
    }
  }
}