function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  // noStroke();

  // 線の色を変える
  stroke(0, 255, 255);
  
  // 背景の色
  background(255);


}

function draw() {
  
  // - - - - - ここから名前
  // 色
  fill(255);
  
  // 文字の大きさ
  textSize(150);
  
  // フォント
  textFont('cookie');
  
  // 文字と文字の位置
  text('SHUMPEI TAGUCHI', 200, 400);


  // - - - - - ここから好きなもの
  // 色をマウスの位置で変える
  fill(mouseX / 4, mouseX / 4, mouseX / 4);
  
  // 文字の大きさ
  textSize(50);
  
  // 文字と文字の位置
  text('Life is Tech School', 200, 500);

    // 色をマウスの位置で変える
  fill(mouseX / 4, mouseX / 4, mouseX / 4);
  
  // 文字の大きさ
  textSize(50);
  
  // 文字と文字の位置
  text('2018/11/07', 200, 500);    
    
  // - - - - - - マウスが押されたら
  if (mouseIsPressed) {
    
    // ランダムに色を変える
    fill(0, random(255), random(255), 5);
    
    // 円をマウスの位置にランダムな大きさで描く
    ellipse(mouseX, mouseY, random(2000));
  }


}

