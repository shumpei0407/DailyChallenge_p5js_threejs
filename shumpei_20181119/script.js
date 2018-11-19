function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  noStroke();
  
  // 背景の色
  //background(82,162,197);

}

var angle = 0;
var positionX = 0;

function draw() {
    
  // 背景を黒くして、残像をつける
  background(0,10);

  // 角度を変化させる
  angle += 0.5;

  // 縦の位置を計算する
  var positionY = sin(angle) * 10;
  
  // 右に移動し続ける
  positionX += 0.8;

  // 右端までいったら、左端に戻る
  if (positionX > width) {
      positionX = 0;
  }

  // 円を描く
  fill(random(255),10,10,100);
  ellipse(positionX, height/2 + positionY, 1200);
  //fill(random(255),random(255),random(255),10);
  //ellipse(positionX, height/2 + positionY, 2000);

 // 色
 //fill(255);
  
 // 文字の大きさ
 //textSize(150);
  
 // フォント
 //textFont('Asfalto');
  
 // 文字と文字の位置
 //text('S  u  n', width/3, height/2);

}
