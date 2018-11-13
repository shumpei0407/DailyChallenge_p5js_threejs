function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  noStroke();
  
  // 背景の色
  background(0);


}

function draw() {
  
  // - - - - - ここから名前
  // 色
  fill(255);
  
  // 文字の大きさ
  textSize(150);
  
  // フォント
  textFont('Bourbon');
  
  // 文字と文字の位置
  text('c o s m o s', width/3, height/2);


  // - - - - - ここから好きなもの
    
  // - - - - - - マウスが押されたら
  if (mouseIsPressed) {
    
    // ランダムに色を変える
    fill(random(255), random(255), random(255), 10);
      
    // 線の色を変える
    //stroke(random(255), random(255), random(255));
    
    // 円をマウスの位置にランダムな大きさで描く
    triangle(0, 0, random(10000), random(10000), random(10000), random(10000));
  }
    
  //if (mouseIsPressed) {
    
    // ランダムに色を変える
    //fill(random(50), random(50), random(50), 10);
    
    // 円をマウスの位置にランダムな大きさで描く
    //triangle(width, height, random(mouseX), random(mouseY), random(mouseX), random(mouseY));
  //}

  //fill(random(255), random(255), random(255),50);
    
  //ellipse(50, 50,random(100));

}
