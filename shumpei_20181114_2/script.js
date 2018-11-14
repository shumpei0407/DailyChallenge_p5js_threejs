 function setup() {
　createCanvas(displayWidth, displayHeight);
  background(0)
  noStroke()
　}
            
　function draw() {
　if (mouseIsPressed) {
     textSize(200);
     textFont('Snowboarding');
　　　fill(255);
     text('Vanish into the night', width/3, height/2);
     fill(random(0),random(0),random(0),50);
     triangle(random(mouseX), random(mouseY), random(mouseX), random(mouseY), random(mouseX), random(mouseY));
    } else {
　　　fill(random(255),random(255),random(255),30);
     ellipse(random(mouseX), random(mouseY), 100, 100);
    }
　}
