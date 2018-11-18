var t=1;

function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  // 線をなしに
  //noStroke();
  
  // 背景の色
  background(0);

}

var angle = 0;
var positionX = 0;

function draw() {
  background(0, 0, 100);  
  ambientLight(255, 241, 15);
  directionalLight(240, 179, 37, 0.1, -1, 0, cos(t / 2));
  directionalLight(255, 255, 255, 0.1, 1, 0, cos(t / 2));
  //directionalLight(239, 193, 196, 0.1, -1, 0, sin(t / 2));
  //directionalLight(50, 204, 18, 0.1, -1, 0, sin(t / 2));

  rotateY(frameCount / 200);
  rotateX(map(cos(t), -1, 1, -PI, PI));

  sphere(300, 300);

  t += 0.025;

}
