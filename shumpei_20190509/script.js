var x = 0;
var y = 0;
var stepSize = 1.0;

var font = 'Oswald';
var letters = 'Life is Tech ! School I love sushi.';
var fontSizeMin = 1;
var angleDistortion = 0.0;
var counter = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(25);
  cursor(CROSS);
    
  x = mouseX;
  y = mouseY;

  textFont(font);
  textAlign(LEFT);
  fill(240,248,255);
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
            translate(x,y);
            rotate(angle + random(angleDistortion));
            text(newLetter,0,0);
            pop();
            
            counter++;
            if (counter >= letters.length)counter = 0;
            
            x = x + cos(angle)*stepSize;
            y = y + sin(angle)*stepSize;
        }
    }
    
}
