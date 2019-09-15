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
	
  for(var i = 0; i < width + 10; i+=50){
//      pg2.strokeWeight(i/40)
//    pg2.line(0,i,1000,i);
      pg2.stroke(255);
      pg2.strokeWeight(5);
      pg2.noFill();
      pg2.rect(i,100,random(40),random(40));
      pg2.rect(i,200,random(40),random(40));
      pg2.rect(i,300,random(40),random(40));
      pg2.rect(i,400,random(40),random(40));
      pg2.rect(i,500,random(40),random(40));
    
//      pg2.fill(100);
//      pg2.stroke(100);
      pg2.rect(i,50,random(40),random(40));
      pg2.rect(i,150,random(40),random(40));
      pg2.rect(i,250,random(40),random(40));
      pg2.rect(i,350,random(10),random(10));
      pg2.rect(i,450,random(10),random(5));
//    pg2.line(0,i,1000,2*tan(i));

  }
}

function draw() {
  y = Math.sin(rad)*10;
  background(0,0,0);
  pg.background(0);
  pg.fill(255);
  pg.ellipse(mouseX,mouseY,random(420,450));
  var maskedImage = pgMask(pg2, pg);
  image(maskedImage, 0, 0);
    
  fill(360);
  noStroke();
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('173', 25, 100);
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