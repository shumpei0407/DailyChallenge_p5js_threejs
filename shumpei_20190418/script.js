function setup(){
    createCanvas(displayWidth, displayHeight);  
    pixelDensity(1);
}

function draw(){
    background(0);
    
    loadPixels();
    
    for (var y = 0; y < height; y++){
      for (var x = 0; x < width; x++){
         var index = (x+y*width)*4;
            pixels[index+0]=x;
            pixels[index+1]=200+random(50);
            pixels[index+2]=y;
            pixels[index+3]=255;          
      }  
    }
    
    updatePixels();
}