function Box(x,y,w,h){
    var options = {
     friction:1,
     restitution:0
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w=w;
    this.h=h;
    World.add(world,this.body);
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    noStroke();
    //strokeWeight(3);
    //stroke(random(200,255));
    fill(random(200,255),random(200,255),255); 
    rect(0,0,this.w,this.h);
    pop();
    }
    
}