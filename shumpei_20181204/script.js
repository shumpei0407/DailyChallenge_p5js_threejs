function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
}

function draw() {
  background(255,229,255);
  push();
  noStroke();
  //fill(139, 69, 19);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
    
  rotateX(map(mouseY, 0, height, 0, PI)); 
  rotateY(map(mouseX, 0, width, 0, PI));
    
  var dirX = (mouseX / width - 0.1) * 2;
  var dirY = (mouseY / height - 0.1) * 2;
  pointLight(191, 121, 78, dirX, dirY, 0.5);
  ambientMaterial(200);
  noStroke();
  torus(200,100);
}