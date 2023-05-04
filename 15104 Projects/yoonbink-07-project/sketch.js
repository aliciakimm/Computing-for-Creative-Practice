//Alicia Kim
//yoonbink@andrew.cmu.edu
//Section B

var nPoints = 100;
var r;

function setup() {
    createCanvas(480, 480);
    background(220);
    
    r=0;

    
}

function draw() {

// gradient background (adapted from my project 6)
    for(var j=0; j<height; j+=1) {
        stroke(lerpColor(color(127,255,212) ,color(255,253,208),j/height));
        line(0,j,width,j);
    }

    noStroke();

    push();
    translate (width/2, height/2); 

    noFill();
    if (r<=15){
        r+=0.17;
    }
    else{r=0}
    drawHeart2(r);
    drawDevil();
    pop();

    drawHeart1();
}

function drawDevil() {
    // https://mathworld.wolfram.com/DevilsCurve.html
    // adapted from drawCranoid example from Wk 7 Deliverable example

    
    var x;
    var y;

    
    
    fill(250,250,210);
    beginShape();
    for (var i = 0; i < nPoints; i++) {
        
      
        var a = constrain((mouseX / width), -16.0, 16.0);
        var b = constrain((mouseY / height), -16.0, 16.0);
        var t = map(i, 0, nPoints, 0, TWO_PI);
    

        x = 100*cos(t)*sqrt((sq(a)*sq(sin(t))-(sq(b)*sq(cos(t)))/(sq(sin(t))-sq(cos(t)))));
        y = 100*sin(t)*sqrt((sq(a)*sq(sin(t))-(sq(b)*sq(cos(t)))/(sq(sin(t))-sq(cos(t)))));
        vertex(x, y);
    }
    endShape();
}

//cursor  heart
function drawHeart1(){

    var x2;
    var y2;

    fill(250);
    beginShape();
    for (var j = 0; j < nPoints; j++) {
     
        var t2 = map(j, 0, nPoints, 0, TWO_PI);
        

        x2 = mouseX+2*16*pow(sin(t2),3);
        y2 = 2*(13*cos(t2)-5*cos(2*t2)-2*cos(3*t2)-cos(4*t2));
        y2= mouseY-y2 
        vertex(x2, y2);
    }
    endShape();
}

//background heart
function drawHeart2(r){

    var x3;
    var y3;
    // var r;
    fill(173,216,230);
    beginShape();
    // r=10;
    // r+=1;
    
    for (var j = 0; j < nPoints; j++) {
        
        var t2 = map(j, 0, nPoints, 0, TWO_PI);
        

        x3 = r*16*pow(sin(t2),3);
        y3 = -r*(13*cos(t2)-5*cos(2*t2)-2*cos(3*t2)-cos(4*t2));
      
        vertex(x3, y3);
    }
    endShape();
}