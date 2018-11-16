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
  text('s u p e r', width/3, height/2);
  text(' s t a r',width/3, height*7/10 );


  // - - - - - ここから好きなもの
    
  // - - - - - - マウスが押されたら
  if (mouseIsPressed) {      
    // 線の色を変える
    //stroke(random(255), random(255), random(255));
    
    // ランダムに青系の色を変える
    fill(random(100), random(255), random(255), 3);
    // 円をマウスの位置にランダムな大きさで描く
    triangle(0, 0, width-random(600),height,width, height);
      
    // ランダムに赤系の色を変える    
    fill(random(255), random(100), random(255), 3);    
    triangle(0, height, width, 0, random(600), height); 
    
    // ランダムに黄系の色を変える
    fill(random(255), random(255), random(100), 1);
    // 円をマウスの位置にランダムな大きさで描く
    triangle(0, 0, width-random(600),height,width, height);
    triangle(0, height, width, 0, random(600), height); 
  }

}
