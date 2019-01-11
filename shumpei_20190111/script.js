var bubbles = [];//holds bubble objects
var bubbleNum = 20;//# of bubbles?
var xVariation = 2;//how much the bubbles move in the x direction

//setup the canvas based on the window size
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
  //frameRate(10);
  //make random bubble objects {x,y,size,speed}
  for (var i = 0; i < bubbleNum; i++) {
    bubbles[i] = {
      x: random(window.innerWidth),
      y: random(window.innerHeight),
      size: random(3, 10),
      speed: 0
    };
  }
  //set color of the bubbles 'feel free to play with opacity, I think .4 looks nice'
  fill("rgba(255,255,255, 0.4)");
}
//handle window resize events and fix the canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
//animation loop
function draw() {
  background("#164899");
  bubbles.forEach(function(bub, index) {
    moveBubbles(bub);
    if (bub.y < -10) newBubble(index);
  });
}
//makes a new bubble at a specified index once its off screen
function newBubble(index) {
  bubbles[index] = {
    x: random(window.innerWidth),
    y: window.innerHeight,
    size: random(3, 10),
    speed: 0
  };
}

//move the bubbles based on their size
function moveBubbles(bubble) {
  bubble.x += random(-xVariation, xVariation);
  bubble.speed += bubble.size / 100;
  bubble.y -= bubble.speed;
  //draw the bubble NOTE they must be integer values to draw to the canvas
  ellipse(
    Math.round(bubble.x),
    Math.round(bubble.y),
    Math.round(bubble.size),
    Math.round(bubble.size)
  );
}
