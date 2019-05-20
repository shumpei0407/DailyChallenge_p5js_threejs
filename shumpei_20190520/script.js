let particles = [];

function setup(){
 createCanvas(windowWidth,windowHeight);
}

function draw(){
 background(30); 
 let p = new Particle();
 particles.push(p);
 for(let i = 0; i < particles.length; i++){
      particles[i].update();
      particles[i].show();
 }
}

class Particle{
    constructor(){
        this.x = windowWidth/2;
        this.y = windowHeight/2;
        this.vx = random(-10,10);
        this.vy = random(-10,10);
        this.alpha = random(255);
    }
    
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 3;
        
    }
    
    show(){
        noStroke();
        //blendMode(LIGHTEST);
        strokeWeight(0.1)
        fill(random(180,255),random(180,255),255,this.alpha);
        ellipse(this.x,this.y,random(10,200));
        
    }
}