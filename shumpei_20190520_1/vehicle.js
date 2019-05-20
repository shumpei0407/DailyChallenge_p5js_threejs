function Vehicle(){
    var x;
    var y;
    this.pos = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();    
    this.acc = createVector();  
    this.r = 8;
}

Vehicle.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
}

Vehicle.prototype.show = function(){
    stroke(255);
    strokeWeight(8);
    point(this.pos.x,this.pos.y);
}
