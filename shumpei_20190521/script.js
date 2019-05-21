let particles = [];

function setup(){
 createCanvas(windowWidth,windowHeight);
}

function draw(){
 background(0,43,51); 
 let p = new Particle();
 particles.push(p);
 for(let i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].show();
 }
}

class Particle{
    constructor(){
        this.x = windowWidth/4*3;
        this.y = windowHeight;
        this.x2 = windowWidth/4;
        this.y2 = windowHeight;
        this.vx = random(-20,20);
        this.vy = random(-20);
        this.vx2 = random(-20,20);
        this.vy2 = random(-20);
        this.alpha = random(255);
    }
    
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.x2 += this.vx2;
        this.y2 += this.vy2;
        this.alpha -= 3;
        
    }
    
    show(){
        stroke(random(200,255),random(200,255),204,this.alpha);
        strokeWeight(10);
        blendMode(BLEND);
        strokeWeight(5)
        fill(0,random(160,175),204,this.alpha);
        rect(this.x,this.y,random(10,500),random(10,500));
        fill(0,random(100,127),random(180,191),this.alpha);
        rect(this.x2,this.y2,random(10,500),random(10,500));
        
    }
}