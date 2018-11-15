 function setup() {
　createCanvas(displayWidth, displayHeight);
  background(0)
  noStroke()
　}

 function draw() {
  var count=0;
  for (var y=0; y<=10000; y+=50) {
    for (var x=0; x<=10000; x+=50) {
      if (count%10 == 0)fill(random(mouseX),random(mouseY),random(mouseX),3);
      //else fill(255);
      if (mouseIsPressed) {
      rect(x+10,y+10,30,30);
      }else{
      ellipse(x, y, 80,80);
      }
      count++;
    }
  }
}

