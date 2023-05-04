//Alicia Kim
//Section B

var w = 26+(1/3);
var h = 26+(1/3);
var eyeWidth = 52+(2/3)
var eyeHeight =79
var v= 1
var r=255
var g=223
var b= 196
var change =0
var tear=0
var eyew=0
var eyeh=0


function setup() {
    createCanvas(480, 640);
}

function draw() {
    // background(180);
//normal happy
    if (v==1){
    tear=0
    background(245,245,220);// pastel yellow
    //ears
        fill(255,223,196); //skin
        ellipse(3.7*w, 11*h, 4*w, 3*h);
        ellipse(14.2*w,11*h, 4*w, 3*h);

    //inner ears //pink
        fill(222,165,164);
        ellipse(4*w, 11.2*h, 2*w, 2*h);
        ellipse(14*w,11.2*h, 2*w, 2*h);
        r=255;
        g=223;
        b=196;
    }
//surprised
    else if (v==2){
        background(153,153,204);// purple
    //ears
        fill(255,223,196); //skin
        ellipse(3.7*w, 11*h, 6*w, 1.5*3*h);
        ellipse(14.2*w,11*h, 6*w, 1.5*3*h);

    //inner ears //pink
        fill(222,165,164);
        ellipse(4*w, 11.2*h, 3*w, 3*h);
        ellipse(14*w,11.2*h, 3*w, 3*h);
        r=255;
        g=223;
        b=196;

    }
// shy
    else if (v==3){
        background(250,218,221); //shy pink
    //ears
        fill(255,204,203); //baby pink
        ellipse(3.7*w, 11*h, 4*w, 3*h);
        ellipse(14.2*w,11*h, 4*w, 3*h);

    //inner ears //pink
        fill(222,165,164);
        ellipse(4*w, 11.2*h, 2*w, 2*h);
        ellipse(14*w,11.2*h, 2*w, 2*h);

        r=252;
        g=202;
        b=191;

    }
// sad
    else if (v==4){
        background(100);
    //ears
        fill(255,223,196); //skin
        ellipse(3.7*w, 11*h, 4*w, 3*h);
        ellipse(14.2*w,11*h, 4*w, 3*h);

    //inner ears //pink
        fill(222,165,164);
        ellipse(4*w, 11.2*h, 2*w, 2*h);
        ellipse(14*w,11.2*h, 2*w, 2*h);

        r=255;
        g=223;
        b=196;

    }

//face outline
    strokeWeight(1);
    fill(155,103,60);
    beginShape();
  
    curveVertex(7*w,2*h);
    curveVertex(7*w,2*h);
    curveVertex(8*w,4.5*h);
    curveVertex(10*w,4.6*h);
    curveVertex(13*w,5*h);
    curveVertex(15.5*w,7*h);
    curveVertex(14*w,11*h);
    curveVertex(16*w,14*h);
    curveVertex(13*w,16*h);
    curveVertex(9.5*w,16.5*h);
    curveVertex(5*w,16*h);
    curveVertex(2*w,14*h);
    curveVertex(4*w,11*h);
    curveVertex(2.8*w,8.5*h);
    curveVertex(3*w,6*h);
    curveVertex(5*w,4.5*h);
    curveVertex(5.5*w,2.5*h);
    curveVertex(6.5*w,4.5*h);
    curveVertex(7*w,2*h);
    curveVertex(7*w,2*h);
    endShape();   


//inner face outline
    strokeWeight(1);
    fill(r,g,b);
    beginShape();
    curveVertex(9.5*w,8*h);

    curveVertex(9.5*w,8*h);
    curveVertex(11.3*w,7*h);
    curveVertex(13.3*w,8.5*h);
    curveVertex(12.8*w,12.5*h);
    curveVertex(14*w,14*h);
    curveVertex(12.5*w,16*h);
    curveVertex(5.7*w,15.9*h);
    curveVertex(4.4*w,14*h);

    curveVertex(5.5*w,12.5*h);

    curveVertex(5*w,8.5*h);
    curveVertex(7*w,7*h);
    curveVertex(9.5*w,8*h);

    curveVertex(9.5*w,8*h);
    endShape();

//normal happy
    if (v==1){
        eyeh=0
        eyew=0
        //eyes
        fill (255,255,255); //white
        ellipse(7.5*w,11.2*h, eyeWidth, eyeHeight);
        ellipse(11*w, 11.2*h, eyeWidth, eyeHeight);

        //mouth
        fill(255,120,144); //dark pink
        arc (9.25*w, 15*h, 2*w,1.5*h , 0, PI, CHORD);

        //blush
        fill(222,165,164); //pink
        ellipse(7.1*w,14.2*h,1*w,0.5*h);
        ellipse(11.4*w,14.2*h,1*w,0.5*h);

        // inner eyes
        fill(0,0,0);
        ellipse(7.8*w, 11.5*h, 0.5*eyeWidth, (2/3)*eyeHeight);
        ellipse(10.7*w, 11.5*h, 0.5*eyeWidth, (2/3)*eyeHeight);

        //nose
        fill(0,0,0);
        ellipse(9*w, 13.5*h, 0.3*w, 0.5*h);
        ellipse(9.5*w, 13.5*h, 0.3*w, 0.5*h);

    }
//surprised
    else if (v==2){
        //eyes
        fill (217,33,33); //red
        ellipse(7.5*w,11.2*h, eyeWidth*1.5, eyeHeight*1.5);
        ellipse(11*w, 11.2*h, eyeWidth*1.5, eyeHeight*1.5);

        //mouth
        fill(255,120,144); //dark pink
        arc (9.25*w, 15*h, 4.5*w,3*h , 0, PI, CHORD);

        // inner eyes
        // fill(0,0,0);
        // ellipse(7.8*w, 11.5*h, eyeWidth, (4/3)*eyeHeight);
        // ellipse(10.7*w, 11.5*h, eyeWidth, (4/3)*eyeHeight);

        fill(0,0,0);
        if (eyew<eyeWidth){
            eyew+=.4
        }
        
        if (eyeh<eyeHeight){
            eyeh+=.4
        }
        ellipse(7.8*w, 11.5*h, eyew, eyeh);
        ellipse(10.7*w, 11.5*h, eyew, eyeh);
        
        //nose
        fill(0,0,0); //black
        ellipse(8.9*w, 13.5*h, 0.7*w, 1*h);
        ellipse(9.7*w, 13.5*h, 0.7*w, 1*h);
    }

//shy
    else if (v==3){
        //eyes
        fill (255,255,255); //white
        ellipse(7.5*w,11.2*h, eyeWidth, eyeHeight);
        ellipse(11*w, 11.2*h, eyeWidth, eyeHeight);

        //heart eyes

        //mouth
        fill(255,120,144); //dark pink
        arc (9.25*w, 15*h, 2*w,1.5*h , 0, PI, CHORD);

        //blush
        fill(255,204,203); //baby pink
        ellipse(7.1*w,14.2*h,3*w,1.5*h);
        ellipse(11.4*w,14.2*h,3*w,1.5*h);

        // inner eyes
        fill(0,0,0);
        if (change>7){
            change=-2
        }
        else if (change<=-10){
            change=2
        }
        else {
            change+=0.5
        }

        ellipse(7.8*w+change, 11.5*h, 0.5*eyeWidth, (2/3)*eyeHeight);
        ellipse(10.7*w+change, 11.5*h, 0.5*eyeWidth, (2/3)*eyeHeight);

        //nose
        fill(0,0,0);
        ellipse(9*w, 13.5*h, 0.3*w, 0.5*h);
        ellipse(9.5*w, 13.5*h, 0.3*w, 0.5*h);
    }
//sad
    else if (v==4){
        //eyes
        fill (0,255,255); //cyan
        ellipse(7.5*w,11.2*h, eyeWidth, eyeHeight);
        ellipse(11*w, 11.2*h, eyeWidth, eyeHeight);

        //mouth
        fill(255,120,144); //dark pink
        arc (9.25*w, 15*h, 2*w,1.5*h , PI, 2*PI, CHORD);

        // inner eyes
        fill(0,0,0);
        ellipse(7.8*w, 11.5*h, 0.3*eyeWidth, (2/3)*eyeHeight);
        ellipse(10.7*w, 11.5*h, 0.3*eyeWidth, (2/3)*eyeHeight);

        //nose
        fill(0,0,0);
        ellipse(9*w, 13.5*h, 0.3*w, 0.5*h);
        ellipse(9.5*w, 13.5*h, 0.3*w, 0.5*h);
        //tears

        tear+=2
        fill (0,255,255); //cyan
        ellipse(11*w, 13*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(11*w, 13.5*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(11*w, 14*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(11*w, 12.5*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(7.5*w, 13*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(7.5*w, 13.5*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(7.5*w, 14*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);
        ellipse(7.5*w, 12.5*h+tear, 0.1*eyeWidth, 0.1*eyeHeight);

    }
   
   






 
 }
 function mousePressed(){
   
    v+=1;
    if (v>4){
        v=1;
    }

    }   







