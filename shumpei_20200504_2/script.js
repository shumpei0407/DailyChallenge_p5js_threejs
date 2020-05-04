let font;
let pts;

let colour;

function preload() {
    font = loadFont('assets/SUNSET__.TTF');

}

function setup() {
    createCanvas(800, 800);
    
    pts = font.textToPoints('Sunset', 0, 0, 200, {
        sampleFactor: 0.5,
        simplifyThreshold: 0
    });
}

function ns(x, y, z, scale_, min_, max_) {
    return map(
        noise(x * scale_, y * scale_, z * scale_),
        0, 1, min_, max_);
}

let xz = 10;
let yz = 1000;

let xz2 = 20;
let yz2 = 1000;

let xz3 = 30;
let yz3 = 1000;

function draw() {
    blendMode(BLEND);
    background(20,20,20,50);
    noStroke();
//    blendMode(ADD);
    push();
 translate(195, 400);
    for (let i = 0; i < pts.length; i++) {
        let xoff = ns(pts[i].x, pts[i].y, xz, 0.005, -20, 20);
        let yoff = ns(pts[i].y, pts[i].x, yz, 0.005, -20, 20);

        let xoff2 = ns(pts[i].x, pts[i].y, xz2, 0.005, -25, 25);
        let yoff2 = ns(pts[i].y, pts[i].x, yz2, 0.005, -25, 25);

        let xoff3 = ns(pts[i].x, pts[i].y, xz3, 0.005, -35, 35);
        let yoff3 = ns(pts[i].y, pts[i].x, yz3, 0.005, -35, 35);

        fill(169,240,243,50);
        ellipse(pts[i].x + xoff, pts[i].y + yoff, 10, 10);

        fill(240,243,169,30);
        ellipse(pts[i].x + xoff2, pts[i].y + yoff2, 10, 10);

        fill(243,169,240,30);
        ellipse(pts[i].x + xoff3, pts[i].y + yoff3, 10, 10);
    }
    pop();
    xz += 4;
    yz += 4;
    xz2 += 2;
    yz2 += 2;
    xz3 += 2;
    yz3 += 2;
    
    textFont('Oswald');
    fill(255);
    strokeWeight(1);
    stroke(100);
    textAlign(LEFT);
    textSize(15);
    text('NUMBER', 50, 50);
    textSize(30);
    text('279', 52, 80);
    textSize(15);
    textAlign(RIGHT);
    text('@shumpei0407', width - 50, height - 50); 
    textAlign(CENTER);
    textSize(20);
}


