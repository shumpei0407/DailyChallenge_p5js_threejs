let pi;
let digits;
let extDigit;
let counts = new Array(10);
let index = 0;
var img;


function preload() {
  pi = loadStrings('pi.txt');
  img = loadImage('tokyo.jpg');
}

function setup() {
  createCanvas(800, 800);

  //println(pi.length());
  const sdigits = pi[0].split('');

  //println(sdigits.length);
  digits = int(sdigits);

  //printArray(digits);
  background(0);
  stroke(255);
  noFill();
  translate(width / 2, height / 2);
  ellipse(0, 0, 400, 400);
}

function draw() {
  blendMode(DIFFERENCE);
//  for(var i = 0; i < 255 ; i++ ){
//     tint(20,100,random(200,255),150);   
//     image(img, 0, 0);
//  }
  fill(10,10,10,20);
  ellipse(width / 2, height / 2, 400, 400);


  textFont('Oswald');
  fill(255);
  strokeWeight(1);
  stroke(100);
  textAlign(LEFT);
  textSize(15);
  text('NUMBER', 50, 50);
  textSize(30);
  text('233', 52, 80);
  textSize(15);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50); 
  textAlign(CENTER);
  textSize(20);
  text('Slashing', width/2, 650);
    
  translate(width / 2, height / 2);

  const digit = digits[index];
  const nextDigit = digits[index + 1];
  index++;

  const diff = TWO_PI / 10;

  const a1 = map(digit, 0, 10, 0, TWO_PI) + random(-diff, diff);
  const a2 = map(nextDigit, 0, 10, 0, TWO_PI) + random(-diff, diff);

  const x1 = 200 * cos(a1);
  const y1 = 200 * sin(a1);

  const x2 = 200 * cos(a2);
  const y2 = 200 * sin(a2);

  strokeWeight(2);
  stroke(random(255));
  curve(x1, y1,x1/random(1,5), y1/random(1,2),x2/random(1,1.5), y2/random(1,1.5),x2, y2);
  curve(x1, y1,x1/random(1,5), y1/random(1,2),x2/random(1,1.5), y2/random(1,1.5),x2, y2);
//  curve(x1, y1,x1/random(1,1.5), y1/random(1,2),x2/random(1,1.5), y2/random(1,1.5),x2, y2);
//  curve(x1, y1,x1/random(1,1.5), y1/random(1,2),x2/random(1,1.5), y2/random(1,1.5),x2, y2);
  line(x1, y1, x2, y2);
//  line(x1, y1, x2, y2);
//  fill(random(255),random(255),random(255));
//  ellipse(x1/2, y1/2, 200,200);
//  ellipse(x1/2, y1/2, 200,200);
//  rect(x1/2, y1/2, 200,200);
//  ellipse(x1, y1, x2, y2);
    
}

