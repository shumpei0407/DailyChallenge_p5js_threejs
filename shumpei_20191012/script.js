var count = 0;
var tileCountX = 5;
var tileCountY = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  clear();
  noFill();
  count = mouseX / 10;
  var para = mouseY / height;
  var tileWidth = width / tileCountX;
  var tileHeight = height / tileCountY;

  for (var gridY = 0; gridY <= tileCountY; gridY++) {
    for (var gridX = 0; gridX <= tileCountX; gridX++) {

      var posX = tileWidth * gridX + tileWidth / 5;
      var posY = tileHeight * gridY + tileHeight / 5;

      push();
      translate(posX, posY);

        noStroke();
        for (var i = 0; i < count; i++) {
          var gradient = lerpColor(color(0, 0, 0), color(255), i / count);
          fill(gradient, 100);
          push();
          translate(i*4, 0);
          ellipse(0, 0, tileWidth / 8, tileHeight / 8);
          pop();

          push();
          translate(-4 * i, 0);
          ellipse(0, 0, tileWidth / 8, tileHeight / 8);
          pop();

          scale(1 - 1.2 / count);
          rotate(para * 1.5);
        }
      pop();
      fill(20);
      noStroke();
      ellipse(windowWidth/2, windowHeight/2,400);
      noStroke();
        
      textFont('Oswald');
      textAlign(LEFT);
      textSize(22);
      text('NUMBER', 25, 40);
      textSize(50);
      text('186', 25, 100);
      textSize(22);
      textAlign(RIGHT);
      text('@shumpei0407', width - 50, height - 50);

    }
  }
}

