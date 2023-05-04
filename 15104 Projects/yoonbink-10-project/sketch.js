// sketch.js template for sound and DOM

//kirby eats 2 coins on the first lap, turns around reaches the cake and devours it. 
//The next lap, kirby reaches the star and flies away on it. 4 Characters are kirby, coin, cake, and a star. 

//Kirby produces boucing sound effect when it's jumping, coin sound effect when it hits the coin, 
//vacuum sound effect when it's consuming a cake, and ending music comes out when kirby flies away on the star.

var floating_kirby;
var eating_kirby;
var BG;
var cake;
var coin;
var star;
var star_kirby;
var floating_kirby_x=100;
var floating_kirby_y=150;
var kirby_right=true;
var cake_y=30;
var star_x=700;
var star_y=10;
var cake2_x=200;
var star_kirby_x=300;
var star_kirby_y=235;
var size = 130;
var x;
var frameCount_=0;


function preload() {
    // call loadImage() and loadSound() for all media files here
//loadImage
    floating_kirby= loadImage("https://i.imgur.com/4f28X9j.png");
    eating_kirby= loadImage("https://i.imgur.com/5ZJaP2p.png");
    cake = loadImage("https://i.imgur.com/f9Kyg70.png");
    coin = loadImage("https://i.imgur.com/Kr16u5n.png");
    star = loadImage("https://i.imgur.com/a6oRdaI.png");
    star_kirby = loadImage("https://i.imgur.com/NaEwsH3.png");
//loadSound
    jumpingSound = loadSound("http://localhost:8000/bouncing.flac");
    coinSound = loadSound("http://localhost:8000/coin.ogg");
    cakeVacuum = loadSound("http://localhost:8000/vacuum.flac");
    starFlying = loadSound("http://localhost:8000/ending.mp3");
}   


function setup() {
    BG = loadImage("https://i.imgur.com/QM3tWyy.png");
    createCanvas(800,450);
    frameRate(30);
    useSound();
}


function soundSetup() { // setup for audio generation
    // you can replace any of this with your own audio code:
    jumpingSound.setVolume(1);
    coinSound.setVolume(0.3);
    cakeVacuum.setVolume(0.5);
    starFlying.setVolume(0.2);
}


function draw() {
    
    // you can replace any of this with your own code:
    background(BG);
    if((frameCount_<=300||frameCount_>=330)&&(frameCount_<=470)){
        push();
        draw_floating_kirby();
        pop();
    }
    
    if (frameCount_<=55){
        drawCoin1();
    }
    if(frameCount_<=155){
        drawCoin2();
    }
    if (frameCount_ == 55 || frameCount_ ==155) {
        coinSound.play();
    }
    if(frameCount_>=155 && frameCount_<=300){
        drawCake();
    }
    if(frameCount_>300&& frameCount_<330){
        drawEatingKirby();
    }
    if(frameCount_>300&& frameCount_<310){
        cakeVacuum.play();
    }
    if(frameCount_>=335&& frameCount_<=470){
        drawStar();
    }
    if(frameCount_>470&& frameCount_<550){
        drawFlyingKirby();
    }

    frameCount_+=1;
}
function draw_floating_kirby(){
    floating_kirby_y+=3;
    floating_kirby_x+=3;
    
    if (floating_kirby_x>=700){
        kirby_right=!kirby_right;
        floating_kirby_x=100;
    }

    if (!kirby_right){
        translate(800,0);
        scale(-1,1);
    }

    if (floating_kirby_y>=240){
        floating_kirby_y-=75;
        jumpingSound.play();
    }
    image(floating_kirby,floating_kirby_x,floating_kirby_y,100,100);
}

function drawCoin1() {
    image (coin,320,150,55,55); 
}
function drawCoin2() {
    image (coin,620,150,55,55);
}

function drawCake() {

    if (cake_y >= 280){
        cake_y = 280; 
    } else {
        cake_y+=8;
    }
    image (cake,200,cake_y,65,65);
}

function drawStar() {

    if(star_x>=300){
        star_x-=8;
        star_y+=4.5;
    }
    image(star,star_x,star_y,90,90);
}

function drawEatingKirby(){
    push();
    translate(800,0);
    scale(-1,1);
    image(eating_kirby,400,240,110,110);
    pop();
    if(cake2_x<310){
        cake2_x+=3
        image(cake,cake2_x,280,65,65);
    }  
}

function drawFlyingKirby(){
    star_kirby_x+=12;
    star_kirby_y-=6.75;
    size-=2.2;
    image(star_kirby,star_kirby_x,star_kirby_y,size,size);
    starFlying.play();
}


