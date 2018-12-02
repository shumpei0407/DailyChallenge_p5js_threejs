function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
}

function draw() {
  background(50);
  push();
  noStroke();
  fill(255, 239, 239);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
    
  rotateX(map(mouseY, 0, height, 0, PI)); 
  rotateY(map(mouseX, 0, width, 0, PI));
    
  var dirX = (mouseX / width - 0.1) * 2;
  var dirY = (mouseY / height - 0.1) * 2;
  pointLight(0, 239, 239, dirX, dirY, 0.5);
  ambientMaterial(200);
  noStroke();
  box(400);
}