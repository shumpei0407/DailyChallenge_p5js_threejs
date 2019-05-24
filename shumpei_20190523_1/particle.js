var gravity = 0.1;

function Particle(x,y){
    this.x = x;
    this.y = y;

    this.yspeed = 0;
    
    this.update = function(){
        this.y += this.yspeed;
        this.yspeed += gravity;
        
    if(this.y > height){
        this.y = height;
        this.yspeed += 0.9;   
    }
    }
    
this.show = function(){
    stroke(0);
    fill(0,150);
    ellipse(this.x,this.y,24,24);
    
}
}
//function Particle(x,y){
//    this.x = x;
//    this.y = y;
//    
//    this.history = [];
//    
//    this.update = function(){
//        this.x += random(-5,5);
//        this.y += random(-5,5);
//        
//        var v = createVector(this.x,this.y);
//        this.histroy.push(v);
//        
//        if(this.histroy.length > 25){
//            this.histroy.splice(0,1);
//        }
//   }
//    
//this.show = function(){
//    stroke(0);
//    fill(0,150);
//    ellipse(this.x,this.y,24,24);
//    
////    noFill();
//    beginShape();
//    for(var i = 0; i < this.history.length; i++){
//        var pos = this.history[i];
////        fill(random(255));
////        ellipse(pos.x,pos.y,i,i);
//        vartex(pos.x,pos.y);
//    }
//    endShape();
//}
//
//}