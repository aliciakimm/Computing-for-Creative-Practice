var BG;
var kirbyW_x=50;
var kirbyW_y=270;
var splash_x=200;
var angle = 0;
var tired_x =350;
var tired_y=300;
var rking_x=-230;
var rking_y=230;
var x =[]; 
var y =[];
var celeb_y = 270;
var celeb_dy = 5;
var tubeKirby_x=250;
var tubeKirby_y = 180;
var tubeKirby_dx=2;
var sx=0;
var b=false;



function preload() {
//loadImages
    oasis = loadImage("https://i.imgur.com/6Y2Bikl.jpeg");
    kirbyL = loadImage("https://i.imgur.com/eP7nuDH.png");
    waterKirby = loadImage("https://i.imgur.com/g6l9HMY.png");
    king1 =loadImage("https://i.imgur.com/vS4p76b.png");
    splash = loadImage("https://i.imgur.com/OemNQig.png");
    tiredKirby = loadImage("https://i.imgur.com/rbAxdfX.png");
    tubeKirby = loadImage("https://i.imgur.com/6uDPSz9.png");
    kingRun = loadImage("https://i.imgur.com/kGeeH9A.png");
    star = loadImage("https://i.imgur.com/CpXLx9f.png");
    celebKirby = loadImage("https://i.imgur.com/MayjKym.png");
}

function setup() {
    BG = loadImage("https://i.imgur.com/Dsc6OMO.jpeg");
    createCanvas(800, 450);
    kirby = makeKirby(50,300);
    king = makeKing(600,0);
    frameRate(47);
    for (var j =0; j<30;j++){
        x.push(floor(random(0,800))); //stars for celebration
    }
    for (var k =0; k<30;k++){
        y.push(floor(random(0,450)));
    }
}

function draw() {

   background(BG);
   if (frameCount<100||frameCount>200){
        kirby.show();
   }
   else{
        push();
        drawTiredKirby(); //dehydrated and needs water
        pop();
   }
   if(frameCount<380){
        kirby.move();
        chaseKing(); //enemy is chasing kirby, making kirby even more tired

   }
   if(frameCount>380&&frameCount<=560){
        BG = oasis;
        push();
        king.show();
        pop();
        drawWaterKirby(); // kirby finds oasis and gains power to defeat the king
   }
   if(frameCount>430){
        drawSplash(); //use water power to defeat the king
   }
   if (frameCount>560){
        drawStar();
        celebration(); 
   }
   if (frameCount>700){
        drawTube(); //go to swim with tube and disappears
   }
   
   if (b=true){
    bullet();
   }
   sx+=10;
}

function makeKirby(kx,ky) {
    var kirby = {x: kx, y:ky, show:drawKirby, move:moveKirby}; //new object
    return kirby;
};

function makeKing(kgx,kgy) {
    var king = {x:kgx, y:kgy, show:drawKing}; //new object
    return king;
};

function drawKirby(){
    image(kirbyL,this.x, this.y,100,100);
};

function moveKirby() {
    if (frameCount<100 || frameCount>200){
        this.x+=3;
        this.y+=3;

        if (this.y == 324) { 
            this.y = 276;
    }
    }
}

function drawKing(){
    
    if(this.y<230){
        this.y += 5;
        this.x -= 4;
    }
    if (frameCount<=470){
        image(king1,this.x, this.y,220,220);
    }
    if (frameCount>470){
        translate(this.x,this.y);
        this.x+=8.5;
        this.y-=10;
        angle+=10;
        rotate(radians(angle));
        image(king1,0,0,220,220);
    }
};
    

function drawWaterKirby(){
    //water kirby
    if (kirbyW_y == 270) { 
        kirbyW_y = 222;
    }
    if (kirbyW_x < 200) { 
        kirbyW_x+=3;
        kirbyW_y+=3;
    }
       
    image(waterKirby,kirbyW_x,kirbyW_y,200,200);
}

function drawSplash(){
    splash_x+=4;
    if (splash_x<300){
        for (var i = 0; i<3; i++){
            image(splash,splash_x,200+i*50,200,100);
        }
    }
    
}

function drawTiredKirby(){
    translate(800,0);
    scale(-1,1);
    image(tiredKirby,tired_x,tired_y,100,100);
}

function chaseKing(){
    image(kingRun, rking_x,rking_y,200,200);
    rking_x+=2;
}

function drawStar(){
    for (var q = 0 ; q<30; q++){
        image(star, x[q], y[q], 30,30);
    }
    if (frameCount>560){
        for (var i =0;i<30;i++){
            y[i]+=3
        }
    }
}
function celebration(){

    if (celeb_y>230){
        celeb_dy=-celeb_dy;
    }
    if (celeb_y<310){
        celeb_dy=-celeb_dy;
    }
    if (frameCount<670){
        celeb_y+=celeb_dy;
    }
    else{
        celeb_y-=5;
    }
    if (frameCount<700){
        image(celebKirby, 230, celeb_y, 150, 150);
    }
}

function drawTube(){

    if (keyIsDown(LEFT_ARROW)){
        tubeKirby_x-=3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        tubeKirby_x+=3;
    }
    if (keyIsDown(DOWN_ARROW)){
        tubeKirby_y+=3;
    }
    if (keyIsDown(UP_ARROW)){
        tubeKirby_y-=3; 
    }

    image(tubeKirby,tubeKirby_x,tubeKirby_y,100,100);
}

function mousePressed(){
    b=true;
    sx=0;
}

function bullet(){
   if (frameCount>700){
        image(splash,tubeKirby_x+sx,tubeKirby_y-10,200,100);
   }
}
