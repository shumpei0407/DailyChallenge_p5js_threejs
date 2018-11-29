var angle = 0; // 角度
var r = 60; // 円周の半径
function setup() { 
    createCanvas(displayWidth, displayHeight); 
    noStroke();
    background(255);
}
 
function draw() { 
    background(0); 
    push(); // 座標をcanvasの中心にするため一時的に保存
    blendMode(BLEND);
    translate(width / 2, height / 2);
     for (var i = 0; i < 20; i++) {
        x = sin(radians(angle - (i * 35))) * 4*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 35))) * 4*r; // 円周上のY座標の位置
        fill(255,255,127,100);
        ellipse(x, y, 15*i, 15*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 20; i++) {
        x = sin(radians(angle - (i * 40))) * 4*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 40))) * 4*r; // 円周上のY座標の位置
        fill(255,127,127,100);
        ellipse(x, y, 15*i, 15*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 20; i++) {
        x = sin(radians(angle - (i * 45))) * 4*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 4*r; // 円周上のY座標の位置
        fill(127,191,255,100);
        ellipse(x, y, 15*i, 15*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 20; i++) {
        x = sin(radians(angle - (i * 50))) * 4*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 50))) * 4*r; // 円周上のY座標の位置
        fill(127,255,191,100);
        ellipse(x, y, 15*i, 15*i); // アニメーションする円の描画
     }
    pop();
    angle += 50;
}

