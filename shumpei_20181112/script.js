function setup() {
  
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
  
  // 線をなしに
  //noStroke();

  // 線の色を変える
  //stroke(random(255),random(255),random(255) );
    
}

function draw() {
  // 背景の色
  background(0);
  //background(255,255,255,0.2);
    
  //背景の円
  //fill(0,0,0);
  //テープの白穴
  fill(255);
  ellipse(width/ 4, height /2, 100);
  ellipse(width* 3/4, height /2, 100);
    
  //テープの黒穴  
  fill(0);
  ellipse(width/ 4, height /2, 50);
  ellipse(width* 3/4, height /2, 50);
    
  if (mouseIsPressed) {
    
　// ランダムに色を変える
    fill(random(255), 255, random(255));
    
　// 円をマウスの位置にランダムな大きさで描く
    ellipse(width/ 4, height /2, random(700));
  }
    
  if (mouseIsPressed) {
    
    // ランダムに色を変える
    fill(255, random(255), random(255));
    
    // 円をマウスの位置にランダムな大きさで描く
    ellipse(width * 3/4 , height /2, random(700));
  }
  
  // 文字の色
  fill(255);
  
  // 文字の大きさ
  textSize(200);
  
  // フォント
  textFont('Snowboarding');
  
  // 文字を真ん中に表示
  text('No  Music', width/ 3, height /2);
    
  // 文字を真ん中に表示
  text('No  Life :)', width/ 3.2, height /1.5);
    
  // テープ右上
  text('┌', width/ 100, height /5);

  // テープ左上
  text('┐', width * 85/100, height /5);
    
  // テープ右下
  text('└', width/ 100, height * 98/100);

  // テープ左上
  text('┘', width * 85/100, height * 98/100);

　// 文字の大きさ
  textSize(200);
  
　// フォント
  textFont('Snowboarding');
  
    
}

