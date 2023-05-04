// sketch.js template for sound and DOM
//
// This is the 15104 Version 1 template for sound and Dom.
// This template prompts the user to click on the web page
// when it is first loaded.
// The function useSound() must be called in setup() if you
// use sound functions.
// The function soundSetup() is called when it is safe
// to call sound functions, so put sound initialization there.
// (But loadSound() should still be called in preload().)

var BG;
var kirbyL_x=50;
var kirbyL_y=300;
var king_x = 600;
var king_y = 0;
var kirbyW_x=50;
var kirbyW_y=270;
var splash_x=200;
var angle = 0;


function preload() {
    // call loadImage() and loadSound() for all media files here
//loadImage
    oasis = loadImage("https://i.imgur.com/6Y2Bikl.jpeg");
    kirbyL = loadImage("https://i.imgur.com/eP7nuDH.png");
    waterKirby = loadImage("https://i.imgur.com/g6l9HMY.png");
    king =loadImage("https://i.imgur.com/vS4p76b.png");
    splash = loadImage("https://i.imgur.com/OemNQig.png");
}


function setup() {
    BG = loadImage("https://i.imgur.com/Dsc6OMO.jpeg");
    createCanvas(800, 450);
    // frameRate(30);
    // useSound();
}


// function soundSetup() { // setup for audio generation
//     // you can replace any of this with your own audio code:
//     osc = new p5.TriOsc();
//     osc.freq(880.0);
//     osc.amp(0.1);
//     osc.start();
// }


function draw() {
//     // you can replace any of this with your own code:
//     if (millis() > 2000 + soundStart) {
//         osc.stop();
//         noLoop();
//     }
   background(BG);
   if(frameCount<280){
        drawKirby();
   }
   if(frameCount>280){
        BG = oasis;
        push();
        drawKing();
        pop();
        drawWaterKirby();
   }
   if(frameCount>330){
        drawSplash();
   }
   
}
function drawKirby(){
    //kirby
    kirbyL_x+=3;
    kirbyL_y+=3;

    if (kirbyL_y == 324) { 
        kirbyL_y = 276;
    }
    image(kirbyL,kirbyL_x,kirbyL_y,100,100);
}

function drawKing(){
    //king
    
    if(king_y<230){
        king_y += 5;
        king_x -= 4;
    }
    if (frameCount<=380){
        image(king,king_x,king_y,220,220);
    }
    if (frameCount>380){
        translate(king_x,king_y);
        king_x+=8.5;
        king_y-=10;
        angle+=10;
        rotate(radians(angle));
        image(king,0,0,220,220);
    }
    
  

    
}
function drawWaterKirby(){
    //water kirby
    print(kirbyW_x);
    if (kirbyW_y == 270) { 
        kirbyW_y = 222;
    }
    if (kirbyW_x < 200) { 
        kirbyW_x+=3;
        kirbyW_y+=3;
    }
   
    
    image(waterKirby,kirbyW_x,kirbyW_y,200,200);
    // print(frameCount);
}

function drawSplash(){
    splash_x+=4;
    if (splash_x<300){
        image(splash,splash_x,250,200,100);
    }
    
}

