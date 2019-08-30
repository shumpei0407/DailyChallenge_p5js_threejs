var j = 0;
var animations = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
  background(0);
    
  if (animations.length > 0) {
      for (var i = 0; i < animations.length; i++) {
        animations[i].draw();
        if (animations[i].lifetime < 0) {
          animations.splice(i, 1);
        }
      }
    }
    
  // アニメーションの数を管理する
  if (animations.length > 30) {
    animations.shift();
  }
    
  fill(360);
  noStroke();
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('166', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
    
}

function keyTyped() {
  if (key == 'a') {
    animations.push(new AnimationA());
  }
  if (key == 'r') {
    animations.push(new AnimationR());
  }
  if (key == 's') {
    animations.push(new AnimationS());
  }
  if (key == 't') {
    animations.push(new AnimationT());
  }
  if (key == 'd') {
    animations.push(new AnimationD());
  }
}

// 左上隅(0,0)から波形を出す
class AnimationA {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.diameter = 50;
    this.lifetime = 10;
    this.hue1 = random(150,250);
  }
  draw() {
    noStroke();
    fill(360);
    ellipse(this.x, this.y, this.diameter);
    fill(this.hue1, 40, 100, 80);
    ellipse(this.x, this.y, this.diameter - 50);
    if (this.diameter < 3000) {
      this.diameter += 100;
    }
  }
}

// 右下隅(width,height)から黒波形を出し、リセットする
class AnimationR {
  constructor() {
    this.x = width;
    this.y = height;
    this.diameter = 50;
    this.lifetime = 10;
    this.hue1 = 360;
  }
  draw() {
    noStroke();
    fill(360);
    ellipse(this.x, this.y, this.diameter);
    fill(0, 0, 0);
    ellipse(this.x, this.y, this.diameter - 50);
    if (this.diameter < 3000) {
      this.diameter += 100;
    }
  }
}
    
// 真ん中(width/2,height/2)から波形を中心に寄せる
class AnimationS {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.diameter = 1000;
    this.lifetime = 100;
    this.hue1 = random(150,250);
  }
  draw() {
    noStroke();
    fill(360);
    ellipse(this.x, this.y, this.diameter);
    fill(this.hue1, 40, 100, 80);
    ellipse(this.x, this.y, this.diameter - 50);
    if (this.diameter > 0) {
      this.diameter -= 50;
    } else {
    this.lifetime -= 100;
    }
  }
}

// 真ん中(width/2,height/2)から波形を中心に寄せる
class AnimationT {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.diameter = 1000;
    this.lifetime = 100;
  }
  draw() {
    noStroke();
    fill(360);
    ellipse(this.x, this.y, this.diameter);
    fill(0);
    ellipse(this.x, this.y, this.diameter - 50);
    if (this.diameter > 0) {
      this.diameter -= 50;
    } else {
    this.lifetime -= 100;
    }
  }
}

//
class AnimationD {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.diameter = 100;  
    this.lifetime = 100;
    this.weight = 20;
  }
  draw() {
    noFill();
    noStroke();
    strokeWeight(this.weight);
    stroke(360);
    ellipse(this.x, this.y, this.diameter);
    ellipse(this.x +100, this.y+100, this.diameter);
      if (this.diameter < 5000) {
      this.diameter += 50;
    }
  }
}