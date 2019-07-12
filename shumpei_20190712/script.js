let angle = 1;
let X = 10;
let shrinkY = 50;

function setup() {
   createCanvas(windowWidth, windowHeight, WEBGL);
//   background(245,222,179);
     background(0);
}

function draw() {
   blendMode(DIFFERENCE);
//   rotateX(50);
   rotateX(random(1000));
//   rotateX(90);
//   stroke(random(255),random(255),random(255));
   stroke(random(100,150),random(100,150),random(100,150));
   strokeWeight(2);
   fill(random(100,150),random(100,150),random(100,150),10);
   rotateY(angle);
//   cone(X,shrinkY/2);
   plane(shrinkY,X);
   plane(X,shrinkY);
//   fill(255,20);
//   box(X/2);
   angle += random(100);
   X += random(1);
   shrinkY -= random(100);
   if(shrinkY<10) {
      shrinkY+=120; 
   } else {
      shrinkY -= 100;
   }
}
