let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
 background(25);
 //graphics.fill(random(220,255),random(220,255),random(220,255));
 //graphics.noStroke();
 //graphics.line(random(500),random(500),random(500),random(500));
 //graphics.stroke(255);
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(100);
 //ambientLight(0);
 //directionalLight(255,random(255),random(255));
 //translate(mouseX - width/2,mouseY - height/2);
 pointLight(255, 255, 255, dx, dy, 100);
 rotateX(angle*2);
 rotateY(angle*1.2);
 rotateZ(angle*3);
 angle += 0.005;
 //fill(255);
 //texture(graphics);
 translate(width / 4, -height / 4, 0);
 normalMaterial();
 //directionalLight(random(200,255),random(200,255), 255, dx, dy, 50);
 sphere(250);
}