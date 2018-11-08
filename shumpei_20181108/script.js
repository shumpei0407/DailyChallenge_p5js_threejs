function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  noStroke(255, 255, 0);

  // 線の色を変える
  //stroke(255, 255, 0);
  
  // 背景の色
  background(255,255,255,0.2);

}

function draw() {
  
  // - - - - - ここから名前
  // 色
  fill(0, 0, 0);
  
  // 文字の大きさ
  textSize(150);
  
  // フォント
  textFont('sacramento');
  
  // 文字と文字の位置
  text('K A N P A I', 200, 400);

  // - - - - - ここから好きなもの
  // 色をマウスの位置で変える
  fill(mouseX / 4, mouseX / 4, mouseX / 4);
  
  // 文字の大きさ
  textSize(50);

    // 色をマウスの位置で変える
  fill(mouseX / 4, mouseX / 4, mouseX / 4);
  
  // 文字の大きさ
  textSize(50);
  
  // 文字と文字の位置
  text('2018/11/08', 200, 600);    
    
  // - - - - - - マウスが押されたら
  if (mouseIsPressed) {
    
    // ランダムに色を変える
    fill(255, 255, random(255), 5);
    
    // 円をマウスの位置にランダムな大きさで描く
    ellipse(mouseX, mouseY, random(500));
  }


}

