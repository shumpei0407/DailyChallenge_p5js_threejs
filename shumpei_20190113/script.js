var snow = [];
var snowNum = 50;
var xVariation = 0.5;
var x = 0;
var y = 0;
var xspeed = 7.5;
var yspeed = 4;
var s = "Snowboarding";

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textSize(200);
  noStroke();
  for (var i = 0; i < snowNum; i++) {
    snow[i] = {
      x: random(window.innerWidth),
      y: random(window.innerHeight),
      size: random(1, 50),
      speed: 0,
    };
  }
  fill("rgba(255,255,255)");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(28,48,91);
  snow.forEach(function(snow, index) {
    movesnow(snow);
    if (snow.y > innerHeight) newsnow(index);
  });
  fill(random(200, 255), random(200, 255), random(200, 255));
  textFont('Banana Yeti');
  text(s, x, y, 1000, 1100);
  this.speed();
  this.walls();
}

function newsnow(index) {
  snow[index] = {
    x: random(window.innerWidth),
    y: 0,
    size: random(1, 30),
    speed: 0,
  };
}

function movesnow(snow) {
  snow.x += random(-xVariation, xVariation);
  snow.speed += snow.size / 1000;
  snow.y += snow.speed;
  ellipse(
    Math.round(snow.x),
    Math.round(snow.y),
    Math.round(snow.size),
    Math.round(snow.size)
  );
}

function speed() {
  x = x + xspeed;
  y = y + yspeed;
}

function walls() {
  if((x > width) || (x < 0)) {
    xspeed = xspeed * -1;
  }
  if((y > height) || (y < 0)) {
    yspeed = yspeed * -1;
  }
}
