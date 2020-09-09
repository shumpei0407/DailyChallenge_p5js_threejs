// 変数
var angle = 0;
var video;


// 全体の初期化（最初に一回だけ呼ばれる）
function setup() {
  createCanvas(800, 800);
//   四角形を真ん中から描く
  rectMode(CENTER);
  // 輪郭（りんかく）を消す
  noStroke();
    
//  video = createVideo('beach.mp4');
//  video.hide();
//  video.loop();
}

// 計算と表示
function draw() {
  // 背景をぬりつぶす
  background(140, 232, 211,50);
//  image(video,0,0);

  // 時間差を入れる変数
  var difference = 0;

  // 繰り返す
  for (var i = 10; i < 800; i += 10) {
    // ぬりつぶす
    fill(77, 219, 187,1);

    // 時間差をつける
    difference += 10;

    // 四角形を描く
    stroke(82, 213, 218);
    strokeWeight(random(10*sin(angle))*sin(angle + difference));
    rect(i, 400, 0.1, sin(angle + difference) * 800);
    rect(400, i, sin(angle + difference) * 800,0.1);
  }

  // 角度を増やす
  angle += 0.01;
    
    textFont('Oswald');
    fill(255);
    strokeWeight(1);
    stroke(255);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('306', 52, 80);
//    fill(255);
//    stroke(0);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
}

  


