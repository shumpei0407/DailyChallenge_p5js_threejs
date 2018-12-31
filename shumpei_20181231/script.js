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
            pixels[index+0]=sin(x)*100-500;
            pixels[index+1]=cos(y)*y-100;
            pixels[index+2]=250;
            pixels[index+3]=255;          
      }  
    }
    
    updatePixels();
}