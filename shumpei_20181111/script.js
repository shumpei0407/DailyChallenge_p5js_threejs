function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  noStroke();

  // 線の色を変える
  //stroke(0, 255, 255);
    
}

function draw() {
  // 背景の色
  background(249,37,0);
  //background(255,255,255,0.2);
    
  // 背景の動的な円
  //fill(random(255),random(255),random(255));
  //ellipse(width/ 2, height /2, random(1000));
    
  if (mouseIsPressed) {
    
    // ランダムに色を変える
    fill(random(0), random(255), random(255));
    
    // 円をマウスの位置にランダムな大きさで描く
    ellipse(random(mouseX), random(mouseY), random(1500));
  }
  
  // 文字の色
  fill(255);
  
  // 文字の大きさ
  textSize(200);
  
  // フォント
  textFont('Banana Yeti');
  
  // 文字を真ん中に表示
  text('Pocky', width/ 3, height /2);

　// 文字の大きさ
  textSize(100);
  
　// フォント
  textFont('Banana Yeti');
  
  // 文字を真ん中に表示
  text(' The share happi', width/ 3.5, height /1.5);
    
   // - - - - - - マウスが押されたら
    
}

