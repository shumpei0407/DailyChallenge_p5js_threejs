 function setup() {
　createCanvas(displayWidth, displayHeight);
  background(0)
  noStroke()
　}

 function draw() {
  var count=0;
  for (var y=0; y<=10000; y+=30) {
    for (var x=0; x<=10000; x+=30) {
      if (count%10 == 0)fill(random(mouseX),random(mouseY),random(mouseX),100);
      else fill(0);
      ellipse(x, y, 30, 30);
      count++;
    }
  }
}
