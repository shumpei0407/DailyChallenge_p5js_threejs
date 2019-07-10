let angle = 1;
let X = 10;
let shrinkY = 50;

function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
   background(245,222,179);
}

function draw() {
//   rotateX(50);
   rotateX(random(1000));
//   rotateX(90);
   stroke(random(0,25));
   strokeWeight(random(0.1,1));
   fill(random(100,150),20);
   rotateY(angle);
//   cone(X,shrinkY/2);
   cone(shrinkY,X);
   cone(X,shrinkY);
   angle += random(100);
   X += random(1);
   shrinkY -= random(100);
   if(shrinkY<10) {
      shrinkY+=120; 
   } else {
      shrinkY -= 100;
   }
}
