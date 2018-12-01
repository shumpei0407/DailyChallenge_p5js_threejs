function setup() {
  createCanvas(displayWidth, displayHeight,WEBGL);
}
function draw() {
  background(0);
  //move your mouse to change light position
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  pointLight(198, 198, 255, locX, locY, 0.5);
  //ambientMaterial(250);
  //noStroke();
  //sphere(300);
    
  var dirX = (mouseX / width - 0.5) * 2;
  var dirY = (mouseY / height - 0.5) * 2;
  directionalLight(198, 255, 255, -dirX, -dirY, 0.5);
  ambientMaterial(255);
  noStroke();
  sphere(250);
    
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  rotateZ(frameCount * 0.005);
  torus(400,5,80,80);
  torus(408,5,80,80);
}