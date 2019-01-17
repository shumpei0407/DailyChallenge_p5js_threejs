var set = [];
function setup() {
    createCanvas(displayWidth, displayHeight);
    for (var x=0;x<1000;x++) {
        set[x]=[];
        }
        noStroke();
    for (var x=0;x<1000;x++) {
        for (var y=0;y<1000;y++) {
            var temp = abs(x-5*y);
            set[x][y] = temp;
        }
    }
}
function draw() {
    noLoop();
    background(255);
    for (var x=0;x<1000;x++) {
        for (var y=0;y<1000;y++) {
            fill(50-set[x][y],set[x][y],255);
            rect(x*10,y*10,10,10);
        }
    }
}