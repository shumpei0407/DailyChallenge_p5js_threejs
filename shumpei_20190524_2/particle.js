//var gravity = 0.1;

function Particle(x,y){
    this.x = x;
    this.y = y;

    this.history = [];
//    this.yspeed = 0;
    
    this.update = function(){
        this.x += random(-10,10);
        this.y += random(-10,10);
        
//    if(this.y > height){
//        this.y = height;
//        this.yspeed *= -0.9;   
//    }
        var v = createVector(this.x,this.y);
        this.history.push(v);
        
        if(this.history.length > 25){
            this.history.splice(0,1);
        }
    }
    
this.show = function(){
    stroke(random(255),random(255),random(255));
    fill(random(255),random(255),random(200,255),20);
    ellipse(this.x,this.y,random(-400,400),random(-400,400));
    beginShape();
    for(var i = 0; i < this.history.length; i++){
        var pos = this.history[i];
        fill(random(255),random(255),random(200,255),20);
        rect(pos.x,pos.y,random(-30,30),random(-30,30));
//        vartex(pos.x,pos.y);
    }
    endShape();
    }
}
