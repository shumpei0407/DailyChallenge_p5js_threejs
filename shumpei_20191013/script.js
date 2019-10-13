var count = 0;
var tileCountX = 5;
var tileCountY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  clear();
  noFill();
  count = mouseX/8;
  var para = mouseY / height;
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {

      var posX = tileWidth * gridX + tileWidth / 2;
      var posY = tileHeight * gridY + tileHeight / 2;

      push();
      translate(posX, posY);

        noStroke();
        for (var i = 0; i < count; i++) {
          var gradient = lerpColor(color(0, 0, 0), color(255), i / count);
          fill(gradient, 10);
          push();
          translate(i*random(4), random(4));
          ellipse(50, 50, 10, tileHeight / 10);
          pop();

          push();
          translate(-1*random(4) * i, random(4));
          ellipse(50, 50, 10, tileHeight / 10);
          pop();

          scale(1 - 1.2 / count);
          rotate(para * 3);
        }
      pop();
      blendMode(ADD);
      fill(255);
      noStroke();
      ellipse(windowWidth/2, windowHeight/2,400);
      noStroke();
        
      textFont('Oswald');
      textAlign(LEFT);
      textSize(22);
      text('NUMBER', 25, 40);
      textSize(50);
      text('187', 25, 100);
      textSize(22);
      textAlign(RIGHT);
      text('@shumpei0407', width - 50, height - 50);

    }
  }
}

