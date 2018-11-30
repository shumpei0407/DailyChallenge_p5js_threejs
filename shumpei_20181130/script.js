function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
  background(0);
}
function draw() {
  // Background
  background(0);
  //マウスを動かし、光を変える
  var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  directionalLight(0, 255, 255, -dirX, -dirY, 0.25);
  ambientMaterial(255);
  noStroke();
  sphere(250);
}

