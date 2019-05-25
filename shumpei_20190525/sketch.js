var particles = [];
let graphics;

function setup(){
    createCanvas(windowWidth,windowHeight);
//    graphics = createGraphics(500,500);
////    graphics.fill(255);
////    graphics.ellipse(100,100,100);
}

function mousePressed(){
    particles.push(new Particle(mouseX,mouseY));
}

function draw(){
    background(50);
    blendMode(HARD_LIGHT);
    for(var i= 0;i < particles.length;i++){
    particles[i].update();
    particles[i].show();
    }
}
