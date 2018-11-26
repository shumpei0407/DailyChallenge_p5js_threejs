function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  noStroke();

  // 線の色を変える
  //stroke(0, 255, 255);
  
  // 背景の色
  background(0);


}

function draw() {
  
  // ここから名前
  fill(255);
  textSize(110);
  textFont('yellowtail');
  text('#ffffff', width/4*3, height/10*9);

  // 色をマウスの位置で変える

  // - - - - - - マウスが押されたら
  if (mouseIsPressed) {
    blendMode(BLEND);
    fill(0, random(255), 0, 2);
    ellipse(width, 0, random(2000));
      
    fill(random(255), 0, random(255), 2);
    ellipse(0, 0, random(2000));
      
    fill(random(255), random(255), 0, 2);
    ellipse(0, height, random(2000));
      
    fill(65, 105, random(255), 2);
    ellipse(width, height, random(2000));
      
    //fill(random(255), random(255), random(255), 3);
    //triangle(random(255), random(255), random(255), random(255), random(255), random(255));
  }
    else { 
    blendMode(ADD);
    fill(0, random(255), random(255), 2);
    ellipse(width, 0, random(2000));
    fill(random(255), 0, random(255), 2);
    ellipse(0, 0, random(2000));
    fill(random(255), random(255), 0, 2);
    ellipse(0, height, random(2000));
    fill(random(255), random(255), random(255), 2);
    ellipse(width, height, random(2000));

  }

　//if (mouseIsPressed) {
    //fill(0, random(255), random(255), 5);
    //ellipse(mouseX, mouseY, random(2000));
  //}


}

