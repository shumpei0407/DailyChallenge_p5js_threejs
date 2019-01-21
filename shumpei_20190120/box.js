function Circle(x,y,r){
    var options = {
     friction:0.3,
     restitution:0.5
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r=r;
    World.add(world,this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    //noStroke();
    strokeWeight(4);
    stroke(random(100,255),random(100,255),random(200,255));
    fill(0); 
    ellipse(0,0,this.r);
    pop();
    }
    
}