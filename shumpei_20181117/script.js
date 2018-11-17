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
  background(0,2);

  // 角度を変化させる
  angle += 0.01;

  // tan関数を使って縦の位置を計算する
  var positionY = tan(angle) * 150;
  
  // 右に移動し続ける
  positionX += 4;

  // 右端までいったら、左端に戻る
  if (positionX > width) {
      positionX = 0;
  }

  // 円を描く
  fill(random(255),255,random(255),5);
  ellipse(positionX, height/2 + positionY, 1200);

 // 色
  fill(255);
  
  // 文字の大きさ
  textSize(150);
  
  // フォント
  textFont('Asfalto');
  
  // 文字と文字の位置
  text('A U R O R A', width/3, height/2);

}
