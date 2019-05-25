//var gravity = 0.1;

function Particle(x,y){
    this.x = x;
    this.y = y;

    this.history = [];
//    this.yspeed = 0;
    
    this.update = function(){
        this.x += random(-100,100);
        this.y += random(-100,100);
        
//    if(this.y > height){
//        this.y = height;
//        this.yspeed *= -0.9;   
//    }
        var v = createVector(this.x,this.y);
        this.history.push(v);
        
        if(this.history.length > 100){
            this.history.splice(0,10);
        }
    }
    
this.show = function(){
    stroke(random(255),random(255),255);
    strokeWeight(30);
//    ellipse(random(255),random(255),random(200,255),80);
//    (this.x,this.y,random(-80,80),random(-80,80));
    beginShape();
    for(var i = 0; i < this.history.length; i++){
        var pos = this.history[i];
        fill(random(255),random(255),random(200,255));
        rect(pos.x,pos.y,random(-80,80),random(-80,80));
//        vartex(pos.x,pos.y);
    }
    endShape();
    }
}
