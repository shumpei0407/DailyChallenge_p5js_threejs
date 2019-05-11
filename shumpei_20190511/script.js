var x = 0;
var y = 0;
var stepSize = 1.0;

var font = 'Yellowtail';
var letters = 'Life is Tech !';
var fontSizeMin = 1;
var angleDistortion = 0.0;
var counter = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(random(255),random(255),random(255));
  cursor(CROSS);
    
  x = mouseX;
  y = mouseY;

  textFont(font);
  textAlign(LEFT);
  fill(random(255),random(255),random(255));
}

function draw(){
    if(mouseIsPressed && mouseButton == LEFT){
        var d = dist(x,y,mouseX,mouseY);
        textSize(fontSizeMin+d);
        var newLetter = letters.charAt(counter);
        stepSize = textWidth(newLetter);
        
        if (d > stepSize){
            var angle = atan2(mouseY - y,mouseX - x);
            
            push();
            blendMode(SOFT_LIGHT);
            translate(x,y);
            rotate(angle + random(angleDistortion));
            text(newLetter,0,0);
        
        
           noStroke(random(255), random(255), random(255),10);
           fill(random(255), random(255), random(255),10);
           ellipse(mouseX,mouseY,random(1000));
            pop();
            
            counter++;
            if (counter >= letters.length)counter = 0;
            
            x = x + cos(angle)*stepSize;
            y = y + sin(angle)*stepSize;
        }
    }
    
}
