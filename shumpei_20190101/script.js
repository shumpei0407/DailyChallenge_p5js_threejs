var x = 0;
var y = 0;
var xspeed = 5;
var yspeed = 5;

function setup(){
createCanvas(displayWidth, displayHeight);
}


function draw(){
 displayBall();
 moveBall();
 checkedges();
}


function displayBall(){
  var r = map(x, 0, width, 192, 255);
  var g = map(y, 0, height, 192, 255);
  background(r,g,192);
  fill(255-r, 255-g, 255);
  stroke(random(192,255), r, g);
  ellipse(x,y,y-height,height-y);

}

function moveBall(){
  x = x + xspeed;
  y = y + yspeed;
}

function checkedges(){
  if (x > width || x < 0){
    xspeed = xspeed * -1;
  }
  if (y > height || y < 0){
    yspeed = yspeed * -1;
  }
  
}