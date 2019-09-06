var j = 0;
var img;
var imgClone;
var mk;

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
  text('170', 25, 100);
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
  if (key == 'f') {
    animations.push(new AnimationF());
  }
  if (key == 'g') {
    animations.push(new AnimationG());
  }
  if (key == 'h') {
    animations.push(new AnimationH());
  }
  if (key == 'j') {
    animations.push(new AnimationJ());
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

// 2つの円の模様
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

//円と斜線の表示
class AnimationF {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.diameter = 400;  
    this.lifetime = 100;
    this.weight = 20;
  }
  draw() {
    fill(360);
    noStroke();
    ellipse(this.x, this.y, this.diameter);
    if (this.diameter < 500) {
      this.diameter += 5;

    stroke(360);
    strokeWeight(20);
    line(0,0,width,height);
    line(0,100,width,height+100);
    line(0,200,width,height+200);
    line(0,300,width,height+300);
    line(0,400,width,height+400);
    line(0,500,width,height+500);
    line(0,600,width,height+600);
        
    line(0,-100,width,height-100);
    line(0,-200,width,height-200);
    line(0,-300,width,height-300);
    line(0,-400,width,height-400);
    line(0,-500,width,height-500);
    line(0,-600,width,height-600);
        
    } else {
    this.lifetime -= 100;
    }
  }
}

//円と斜線の表示
class AnimationG {
  constructor() {
//    this.x = width/2;
//    this.y = width/2;
    this.diameter = width;
    this.lifetime = 100;
  }
  draw() {
//    stroke(this.hue1, 40, 100, 80);
//    strokeWeight(this.diameter);
    fill(this.hue1, 40, 100, 80);
    ellipse(0, 0, this.diameter);
    ellipse(0, height, this.diameter);
    ellipse(width, 0, this.diameter);
    ellipse(width, height, this.diameter);
    fill(360);
    ellipse(0, 0, this.diameter - 100);
    ellipse(0, height, this.diameter - 100);
    ellipse(width, 0, this.diameter - 100);
    ellipse(width, height, this.diameter - 100);
    ellipse(0, 0, this.diameter - 200);
    ellipse(0, height, this.diameter - 200);
    ellipse(width, 0, this.diameter - 200);
    ellipse(width, height, this.diameter - 200);
      
//    fill(360);
//    ellipse(this.x, this.y, this.diameter);
    if (this.diameter > 0) {
      this.diameter -= 60;
      strokeWeight(this.diameter);
    } else {
    this.lifetime -= 100;
    }
  }
}

class AnimationH {
  constructor() {
    this.lifetime = 100;
  }
  draw() {  
    stroke(0);
    fill(0);
    
    img = createGraphics(width, height);
      
    img.rect(0, 0, width, 30);
    img.rect(0, 50, width, 30);
    img.rect(0, 100, width, 30);
    img.rect(0, 150, width, 30);
    img.rect(0, 200, width, 30);
    img.rect(0, 250, width, 30);
    img.rect(0, 300, width, 30);
    img.rect(0, 350, width, 30);
//    img.rect(0, 400, width, 30);
//    img.rect(0, 450, width, 30);
//    img.rect(0, 500, width, 30);
//    img.rect(0, 550, width, 30);
 　
    mk = createGraphics(width, height);

    stroke(0);
    fill(0);
    mk.ellipse(width / 2, height / 2, 500, 500);
 
    ( imgClone = img.get() ).mask( mk.get() );
    image(imgClone, 0, 0);
    this.lifetime -= 100;
        
//    } else {
//    this.lifetime -= 100;
//    }
 }
}

class AnimationJ {
  constructor() {
    this.lifetime = 100;
  }
  draw() {  
  background(0);
  push();
  translate(width/2,height/2);
  rotate(frameCount / 10.0);
  translate(-100, -100);
  ellipse(random(10), random(10), 50,50);
  pop();
}
}