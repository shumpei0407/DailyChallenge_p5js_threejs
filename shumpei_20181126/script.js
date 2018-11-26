function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  noStroke();

  // 線の色を変える
  //stroke(0,255,255);
  
  // 背景の色
  background(255);

}

function draw() {
  for (var y=0; y<=2000; y+=100) {
    for (var x=0; x<=2000; x+=100) {
      if (x%3 == 0 && y%3 == 0) {
        if (mouseIsPressed) {
      blendMode(DIFFERENCE);
      fill(random(255),255,255,100);
      ellipse(x, y, 1000, 1000);
      fill(random(204),204,204,90);
      ellipse(x, y, 900, 900);
      fill(random(204),160,160,80);
      ellipse(x, y, 800, 800);
      fill(140,random(140),140,70);
      ellipse(x, y, 700, 700);          
      fill(120,random(120),120,60);
      ellipse(x, y, 600, 600);
      fill(100,random(100),100,50);
      ellipse(x, y, 500, 500);
      fill(50,50,random(80),40);
      ellipse(x, y, 400, 400);
      fill(50,50,random(50),30);
      ellipse(x, y, 300, 300);
      fill(10,10,random(10),20);
      ellipse(x, y, 200, 200);
      fill(100,100,random(5),10);
      ellipse(x, y, 100, 100);
        }else{
      blendMode(DIFFERENCE);
      fill(255,255,255,100);
      ellipse(x, y, 1000, 1000);
      fill(204,204,204,90);
      ellipse(x, y, 900, 900);
      fill(160,160,160,80);
      ellipse(x, y, 800, 800);
      fill(140,140,140,70);
      ellipse(x, y, 700, 700);          
      fill(120,120,120,60);
      ellipse(x, y, 600, 600);
      fill(100,100,100,50);
      ellipse(x, y, 500, 500);
      fill(80,80,80,40);
      ellipse(x, y, 400, 400);
      fill(50,50,50,30);
      ellipse(x, y, 300, 300);
      fill(10,10,10,20);
      ellipse(x, y, 200, 200);
      fill(5,5,5,10);
      ellipse(x, y, 100, 100);
        }
      }
    }
  }
}

