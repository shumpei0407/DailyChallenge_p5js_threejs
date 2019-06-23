function Particle(x, y) {
  this.x = x;
  this.y = y;
//  this.r = random(4, 32);
  
  this.update = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);

//    this.x = constrain(this.x, 0, width);    
//    this.y = constrain(this.y, 0, height);    
  }
  
  this.show = function() {
//    noStroke();
    var px = floor(this.x / vScale);
    var py = floor(this.y / vScale);
    var col = video.get(px, py);
    //console.log(col);
//    noFill();
//    blendMode(SCREEN);
    fill(col[0], col[1], col[2]);
    rect(this.x, this.y,40,40);  
    stroke(0);
    strokeWeight(3);
//    rect(this.x, this.y,10,10);    
  }
  
}