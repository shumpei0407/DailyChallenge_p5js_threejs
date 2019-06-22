function Particle(x, y) {
  this.x = x;
  this.y = y;
//  this.r = random(4, 32);
  
  this.update = function() {
    this.x += random(-100, 100);
    this.y += random(-100, 100);

//    this.x = constrain(this.x, 0, width);    
//    this.y = constrain(this.y, 0, height);    
  }
  
  this.show = function() {
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    blendMode(HARD_LIGHT);
    //console.log(col);
    stroke(col[0], col[1], col[2],5);
    strokeWeight(2);
//    noFill();
    fill(col[0], col[1], col[2],1000);
//    rect(this.x, this.y,10,10);    
    ellipse(this.x, this.y,random(40,50),random(40,50)); 
    strokeWeight(0.1);
    fill(random(100,255),random(100,255),random(220,255),80);
    ellipse(this.x, this.y,random(1000),2);  
//    line(this.x, this.y,20,20);  
  }
  
}