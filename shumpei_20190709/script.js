let angle = 10;
let X = 1000;
let shrinkY = 5000;

function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
   background(0);
}

function draw() {
   rotateX(130);
//   rotateX(90);
   stroke(random(10,225),random(10,225),random(235,255));
   strokeWeight(random(1));
   fill(random(200,255),random(200,255),255,20);
   rotateY(angle);
   cone(X,shrinkY/2);
   cone(shrinkY,X);
   angle += 70;
   X += 40;
   shrinkY -= 1;
   if(shrinkY<10) {
      shrinkY+=10; 
   } else {
      shrinkY = 100;
   }
}
