var pg;
var pg2;
var rad = 0;
var degree = 50;

rad = degree * Math.PI / 180;

function setup() {
  createCanvas(windowWidth, windowHeight);
//  colorMode(HSB,360,100,100,100);   
  colorMode(RGB, 255,255,255);
    
  pg = createGraphics(windowWidth, windowHeight);
  img = createImage(windowWidth, windowHeight);
  
  pg2 = createGraphics(windowWidth, windowHeight);

  pg2.background(0);
  pg2.stroke(255);
	
  for(var i = 0; i < width ; i+=3){
    pg2.strokeWeight(i/1000);
    pg2.stroke(255);
    pg2.strokeWeight(0.05);
//    pg2.ellipse(i,cos(rad)*i,500,3);
    pg2.ellipse(cos(rad)*i*2,cos(rad)*i*2,500,0.5);
    pg2.ellipse(sin(rad)*i*2,sin(rad)*i*2,500,0.5);
//    pg2.ellipse(i/3,i/3,10,3);
//    pg2.ellipse(i/1000,i/1000,10,3);
//    pg2.rect(i,i,200,random(2));
//    pg2.stroke(0);
//    pg2.line(0,i,random(0,1500),i);
//    pg2.stroke(0);
//    pg2.line(0,i,random(500,1500),i);
//    pg2.line(0,i,1500,i/2);
//    pg2.line(width,i,-1500,-i);
//    pg2.line(0,i,1500,i*6);
  }
}

function draw() {
//  blendMode();
  y = Math.sin(rad)*10;
  background(0,0,0);
　const distance = dist(mouseX, mouseY, pmouseX, pmouseY);
  pg.strokeWeight(distance);
  pg.background(0);
  pg.fill(255);
  pg.ellipse(mouseX, mouseY,450);
//  pg.fill(0);
//  pg.ellipse(mouseX, mouseY,480);
  var maskedImage = pgMask(pg2, pg);
  image(maskedImage, 0, 0);
    
  fill(360);
  noStroke();
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('177', 25, 100);
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