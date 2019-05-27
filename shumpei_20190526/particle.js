//var gravity = 0.1;

function Particle(x,y){
    this.x = x;
    this.y = y;

    this.history = [];
//    this.yspeed = 0;
    
    this.update = function(){
        this.x += random(-5,5);
        this.y += random(-5,5);
        
//    if(this.y > height){
//        this.y = height;
//        this.yspeed *= -0.9;   
//    }
        var v = createVector(this.x,this.y);
        this.history.push(v);
        
        if(this.history.length > 20){
            this.history.splice(0,1);
        }
    }
    
this.show = function(){
    stroke(random(200,255),random(200,255),255);
    strokeWeight(0.5);
//    ellipse(random(255),random(255),random(200,255),80);
//    (this.x,this.y,random(-80,80),random(-80,80));
    beginShape();
    for(var i = 0; i < this.history.length; i++){
        var pos = this.history[i];
        fill(random(100,255),random(100,255),random(200,255),100);
        ellipse(pos.x,pos.y,600,random(600));
        ellipse(pos.x,pos.y,random(600),600);
//        rect(pos.x,pos.y,random(100),random(100));
//        rect(pos.x,pos.y,random(100),random(100));
//        vartex(pos.x,pos.y);
    }
    endShape();
    }
}
