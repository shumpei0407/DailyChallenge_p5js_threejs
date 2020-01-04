function Circle(x, y) {
  this.x = x;
  this.y = y;
  this.r = 1;
  this.growing = true;

  this.grow = function() {
    if (this.growing) {
      this.r += 1;
    }
  };

  this.show = function() {
    stroke(random(255));
    fill(random(250,255),random(250,255),random(250,255));

    strokeWeight(random(3));
    ellipse(this.x, this.y, this.r*1.2 , this.r*1.2);
//    rect(this.x, this.y, this.r * 2, this.r * 2);
  };

  this.edges = function() {
    return (
      this.x + this.r >= width ||
      this.x - this.r <= 0 ||
      this.y + this.r >= height ||
      this.y - this.r <= 0
    );
  };
}
