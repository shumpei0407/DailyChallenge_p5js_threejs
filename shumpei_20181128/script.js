var angle = 0; // 角度
var r = 70; // 円周の半径
function setup() { 
    createCanvas(displayWidth, displayHeight); 
    noStroke();
    background(255);
}
 
function draw() { 
    background(random(5),random(5),random(120),80); 
    fill(random(255),random(255),random(255),80);
    ellipse(width/2, height / 2, 500, 500); 
    push(); // 座標をcanvasの中心にするため一時的に保存
    translate(width / 2, height / 2);
    blendMode(LIGHTEST);
     for (var i = 0; i < 30; i++) {
        x = sin(radians(angle - (i * 10))) * 4*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 10))) * 4*r; // 円周上のY座標の位置
        fill(255,255,127,100);
        ellipse(x, y, 80 - 3*i, 80 - 3*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 30; i++) {
        x = sin(radians(angle - (i * 10))) * 4.5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 10))) * 4.5*r; // 円周上のY座標の位置
        fill(255,127,127,100);
        ellipse(x, y, 90 - 3*i, 90 - 3*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 30; i++) {
        x = sin(radians(angle - (i * 10))) * 5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 10))) * 5*r; // 円周上のY座標の位置
        fill(127,191,255,100);
        ellipse(x, y, 100 - 3*i, 100 - 3*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 30; i++) {
        x = sin(radians(angle - (i * 10))) * 5.5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 10))) * 5.5*r; // 円周上のY座標の位置
        fill(127,255,191,100);
        ellipse(x, y, 110 - 3*i, 110 - 3*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 30; i++) {
        x = sin(radians(angle - (i * 10))) * 6*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 10))) * 6*r; // 円周上のY座標の位置
        fill(191,127,255,100);
        ellipse(x, y, 110 - 3*i, 110 - 3*i); // アニメーションする円の描画
     }
     for (var i = 0; i < 30; i++) {
        x = sin(radians(angle - (i * 10))) * 6.5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 10))) * 6.5*r; // 円周上のY座標の位置
        fill(255,127,255,100);
        ellipse(x, y, 110 - 3*i, 110 - 3*i); // アニメーションする円の描画
     }
    pop();
    angle += 20;
}

