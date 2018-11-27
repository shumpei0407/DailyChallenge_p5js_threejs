var angle = 0; // 角度
var r = 70; // 円周の半径
function setup() { 
    createCanvas(displayWidth, displayHeight); 
    noStroke();
    background(0);
}
 
function draw() { 
    background(0); 
    push(); // 座標をcanvasの中心にするため一時的に保存
    translate(width / 2, height / 2);
    for (var i = 0; i < 10; i++) {
        x = sin(radians(angle - (i * 45))) * 2*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 2*r; // 円周上のY座標の位置
        fill(224);
        ellipse(x, y, 30 - 4*i, 30 - 4*i); // アニメーションする円の描画
    }
        for (var i = 0; i < 10; i++) {
        x = sin(radians(angle - (i * 45))) * 2.5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 2.5*r; // 円周上のY座標の位置
        fill(192);
        ellipse(x, y, 40 - 4*i, 40 - 4*i); // アニメーションする円の描画
    }
            for (var i = 0; i < 10; i++) {
        x = sin(radians(angle - (i * 45))) * 3*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 3*r; // 円周上のY座標の位置
        fill(160);
        ellipse(x, y, 50 - 4*i, 50 - 4*i); // アニメーションする円の描画
    }
            for (var i = 0; i < 10; i++) {
        x = sin(radians(angle - (i * 45))) * 3.5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 3.5*r; // 円周上のY座標の位置
        fill(128);
        ellipse(x, y, 60 - 4*i, 60 - 4*i); // アニメーションする円の描画
    }
            for (var i = 0; i < 10; i++) {
        x = sin(radians(angle - (i * 45))) * 4*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 4*r; // 円周上のY座標の位置
        fill(96);
        ellipse(x, y, 70 - 4*i, 80 - 4*i); // アニメーションする円の描画
    }
     for (var i = 0; i < 10; i++) {
        x = sin(radians(angle - (i * 45))) * 4.5*r; // 円周上のX座標の位置
        y = cos(radians(angle - (i * 45))) * 4.5*r; // 円周上のY座標の位置
        fill(64);
        ellipse(x, y, 80 - 4*i, 80 - 4*i); // アニメーションする円の描画
    }
    pop();
    angle += 8;
}

