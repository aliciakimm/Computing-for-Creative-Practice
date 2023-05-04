//Alicia Kim
//Section B

var terrainHeight = [];
var noiseParam = 0;
var noiseStep = 0.1;
var offset=0;
var maxi=1;
var fish = [];
var loc1 = 600;
var loc2 = 400;
var loc3 = 100;
var loc4 = 230;
var starX=[];
var starY=[];
var r = 144;
var g = 209;
var b = 206;
var by = 240;
var sx =240;
var sy = 60;
var frameCount_=0;

function setup() {
    createCanvas(480, 240);
    background(144, 209, 206);
    frameRate(8);
    for (var i=0; i<=width/5; i++) {
        noiseParam += noiseStep; 
        var n = noise (noiseParam);
        var value = map (n, 0, 1, 0, height);
        terrainHeight.push(value);
        noiseParam += noiseStep
    }   
    for (var i=0;i<20;i++){
        starX.push(random(0,width));
        starY.push(random(0,height-100));
    }
}

function draw() {

    background(r, g, b);
    loc1-=5;
    loc2-=5;
    loc3-=5;
    loc4-=5;
    if (loc1<-100){
        loc1 = 600;
    }
    if (loc2<-100){
        loc2 = 600;
    }
    if (loc3<-100){
        loc3 = 600;
    }
    if (loc4<-100){
        loc4 = 600;
    }
    
    noStroke();
    drawSun();
    
    if (frameCount_>50 && frameCount_<103) {
        r-=20;
        g-=8;
        b-=2;
    }
    

    if (r<180 && g<180 && b<180) {
        stars();
    }
    if (r<=0 && g<=0 && b<=0) { //reset
        r=144; 
        g=209; 
        b=206;

        sy = 60;
        sx = 240;
        frameCount_=0;
    } else {
        r+=6;
        g-=0.1;
        b-=1;
    }
    drawCloud(loc1,loc2,loc3,loc4);
    drawMountain();
    drawLake();
    drawBoat();
   frameCount_+=1;
}

function drawSun(){
    fill (255, 150, 51); //yellow
    circle (sx,sy,40,40);
    sy+=1.5;
    sx+=3;
}

function drawLake(){  
    fill (60, 111, 166,220); //blue
    beginShape();
    vertex(0,height);
     for (var x = 0; x < width; x++) { 
        // wave
        var theta = offset+0.07*x;
        var y = map(sin(theta),-maxi,maxi,height-60,height-70);
        vertex(x,y);  
    }
    vertex(width, height);
    endShape();
    offset += 0.4;
}

function drawBoat(){
    fill(235, 100, 52); //orange
    strokeWeight(1);
    ellipse(width/2,by,300,60);
    fill(100);
    ellipse(width/2,by,80,30);
// make boat float
    if (by <= 210) { // when it gets higher than lake
        by += 4;
    } else {
        by -= 1;
    }
}

function drawCloud(loc){
    drawCloudHelper(1.3,loc1,-4);
    drawCloudHelper(1,loc2,25);
    drawCloudHelper(0.8,loc3,15);
    drawCloudHelper(1.6,loc4,0);
}

function drawCloudHelper(scale,loc,dy){
    fill(255);
    circle(loc,30+dy,30*scale);
    circle(loc-10,36+dy,25*scale);
    circle(loc-20,43+dy,20*scale);
    circle(loc-3,40+dy,25*scale);
    circle(loc+10,38+dy,25*scale);
    circle(loc+21,41+dy,14*scale);
}

function drawMountain(){
    terrainHeight.shift();
    var n = noise(noiseParam);
    var value = map (n, 0, 1, 0, height);
    terrainHeight.push(value);
    noiseParam += noiseStep

    for (var i = 0; i < width/5; i++) { 
        noStroke();
        fill (101, 138, 41); //green
        beginShape();
        vertex(i*5,terrainHeight[i]);
        vertex((i+1)*5, terrainHeight[i+1]);
        vertex ((i+1)*5, height-40);
        vertex(i*5, height-40);
        endShape();
    }
}

function stars (){
    for (var i=0;i<20;i++){
        drawStar(starX[i],starY[i],1,4,5);
    }
}

// adapted from p5js website (https://p5js.org/examples/form-star.html)
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}