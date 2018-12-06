var ball = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 30; i++) { 
    ball [i] = new Ball();
  }
}

function draw(){
  background(25);
  for (var i = 0; i < ball.length; i++) { 
    ball[i].cria();
    ball[i].move(); 
  }
  
}

function Ball() {   
  this.r = random(180,255);
  this.g = random(180,255);
  this.b = random(180,255);
  this.rd = random(10,40);
  this.x = random(this.rd*2,width-this.rd*2);      
  this.y = random(this.rd*2,height-this.rd*2);
  this.spx = random(-10, 10); 
  this.spy = random(-10, 10); 
  

  this.move = function() {
    this.x += this.spx; 
    this.y += this.spy; 

    if (this.x > width-this.rd*2 || this.x < this.rd*2) {
      this.spx *= -1;
    }
    
    if (this.y > height-this.rd*2 || this.y < this.rd*2) {
      this.spy *= -1;
    }
  }

  this.cria = function() {
    
    stroke(this.r,this.g,this.b);
    strokeWeight(5);
    noFill();
    ellipse(this.x, this.y, this.rd*5, this.rd*5);
  }
}