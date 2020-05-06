let font;
let pts;

let colour;

function preload() {
    font = loadFont('assets/Fort Foundry - Bourbon Oblique.otf');

}

function setup() {
    createCanvas(800, 800);
    frameRate(500);
    
    pts = font.textToPoints('N O I S E', 0, 0, 140, {
        sampleFactor: 0.3,
        simplifyThreshold: 0
    });
}

function ns(x, y, z, scale_, min_, max_) {
    return map(
        noise(x * scale_, y * scale_, z * scale_),
        0, 1, min_, max_);
}

let xz = 50;
let yz = 1000;

let xz2 = 50;
let yz2 = 1000;

let xz3 = 50;
let yz3 = 1000;

function draw() {
    blendMode(BLEND);
    background(239, 158, 214,50);
    
//    fill(166, 234, 236,80);
//    noStroke();
//    ellipse(410,410,510,510);
    
    fill(38,37,36);
    noStroke();
    rect(0,400,800,800);
    
//    fill(246, 79, 80);
//    noStroke();
//    rect(0,600,800,800);
    
    noStroke();
//    blendMode(ADD);
    push();
 translate(220, 450);
    for (let i = 0; i < pts.length; i++) {
        let xoff = ns(pts[i].x, pts[i].y, xz, 0.8, -20, 20);
        let yoff = ns(pts[i].y, pts[i].x, yz, 0.0005, -20, 20);

        let xoff2 = ns(pts[i].x, pts[i].y, xz2, 0.8, -25, 25);
        let yoff2 = ns(pts[i].y, pts[i].x, yz2, 0.0005, -25, 25);

        let xoff3 = ns(pts[i].x, pts[i].y, xz3, 0.8, -35, 35);
        let yoff3 = ns(pts[i].y, pts[i].x, yz3, 0.0005, -35, 35);

        fill(245);
        rect(pts[i].x + xoff, pts[i].y + yoff, 20, 5);

        fill(200);
        rect(pts[i].x + xoff2, pts[i].y + yoff2, 20, 1);

        fill(239, 158, 214,80);
        rect(pts[i].x + xoff3, pts[i].y + yoff3, 25, 5);
    }
    pop();
    xz += 4;
    yz += 4;
    xz2 += 2;
    yz2 += 2;
    xz3 += 2;
    yz3 += 2;
    
    textFont('Oswald');
    fill(25);
    strokeWeight(1);
    stroke(25);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('281', 52, 80);
    fill(255);
    stroke(255);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
}


