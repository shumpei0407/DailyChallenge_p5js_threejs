var pg;
var pg2;

function setup() {
  createCanvas(windowWidth, windowHeight);
//  colorMode(HSB,360,100,100,100);   
  colorMode(RGB, 255,255,255);
    
  pg = createGraphics(windowWidth, windowHeight);
  img = createImage(windowWidth, windowHeight);
  
  pg2 = createGraphics(windowWidth, windowHeight);

  pg2.background(0);
  pg2.stroke(255);
	
  for(var i = 0; i < width + 10; i+=20){
    pg2.strokeWeight(i/40)
    pg2.line(0,i,1000,i);
  }
}

function draw() {
  background(0,0,0,50);
  pg.background(0);
  pg.fill(255);
  pg.ellipse(mouseX,mouseY,450);
  var maskedImage = pgMask(pg2, pg);
  image(maskedImage, 0, 0);
    
  fill(360);
  noStroke();
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('171', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);
}

function pgMask(_content,_mask){
    
  var img = createImage(_mask.width,_mask.height);
  img.copy(_mask, 0, 0, _mask.width, _mask.height, 0, 0, _mask.width, _mask.height);

  img.loadPixels();
  for (var i = 0; i < img.pixels.length; i += 4) {
    var v = img.pixels[i];
    img.pixels[i] = 0;
    img.pixels[i+1] = 0;
    img.pixels[i+2] = 0;
    img.pixels[i+3] = v;
  }
  img.updatePixels();
  
  var contentImg = createImage(_content.width,_content.height);
  contentImg.copy(_content, 0, 0, _content.width, _content.height, 0, 0, _content.width, _content.height);

  contentImg.mask(img)

  return contentImg;
}