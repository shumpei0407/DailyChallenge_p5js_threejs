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
    
  fill(360);
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('164', 25, 100);
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
}

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
