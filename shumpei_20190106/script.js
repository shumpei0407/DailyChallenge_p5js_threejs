let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics2 = createGraphics(200,200);
 graphics3 = createGraphics(200,200);
 //graphics.background(100,100,100,20);
}

function draw(){
 background(0);
 push();
 graphics.fill(245,random(173,255),random(173,255),40);
 graphics.noStroke();
 graphics.ellipse(random(10,200),random(10,200),random(255));
 texture(graphics);
 plane(1500,1500);
 pop();
    
 push();
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(100);
 //ambientLight(200);
 //directionalLight(255,random(255),random(255));
 //translate(mouseX - width/2,mouseY - height/2);
 translate(0,0,mouseX);
 rotateX(angle);
 rotateY(angle*1.3);
 rotateZ(angle*0.7);
 angle += 0.03;
 graphics2.fill(random(100,255),random(100,255),255,30);
 graphics2.noStroke();
 //graphics2.strokeWeight(0.05);
 //graphics2.stroke(random(100,255),random(100,255),255);
 graphics2.blendMode(BLEND);
 graphics2.ellipse(random(300),random(300),200,200);
 texture(graphics2);
 box(300);
 pop();

}