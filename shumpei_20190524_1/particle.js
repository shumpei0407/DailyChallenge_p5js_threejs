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
//    fill(random(255),random(255),random(255),60);
    ellipse(this.x,this.y,random(-300,300),random(-300,300));
    noFill();
    beginShape();
    for(var i = 0; i < this.history.length; i++){
        var pos = this.history[i];
        fill(random(255),random(255),random(255),60);
        ellipse(pos.x,pos.y,random(-500,500),random(-500,500));
//        vartex(pos.x,pos.y);
    }
    endShape();
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