//var gravity = 0.1;

function Particle(x,y){
    this.x = x;
    this.y = y;

    this.history = [];
//    this.yspeed = 0;
    
    this.update = function(){
        this.x += random(-80,80);
        this.y += random(-80,80);
        
//    if(this.y > height){
//        this.y = height;
//        this.yspeed *= -0.9;   
//    }
        var v = createVector(this.x,this.y);
        this.history.push(v);
        
        if(this.history.length > 10){
            this.history.splice(0,1);
        }
    }
    
this.show = function(){
    stroke(random(200,255),random(200,255),255);
    strokeWeight(6);
//    ellipse(random(255),random(255),random(200,255),80);
//    (this.x,this.y,random(-80,80),random(-80,80));
    beginShape();
    for(var i = 0; i < this.history.length; i++){
        var pos = this.history[i];
        fill(random(200,255),random(200,255),random(200,255));
        ellipse(pos.x,pos.y,random(-1000,1000),random(-5,5));
        ellipse(pos.x,pos.y,random(-5,5),random(-1000,1000));
        rect(pos.x,pos.y,random(-10,10),random(-10,10));
//        vartex(pos.x,pos.y);
    }
    endShape();
    }
}
