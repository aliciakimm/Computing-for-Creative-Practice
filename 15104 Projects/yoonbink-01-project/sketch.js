function setup() {
    createCanvas(400, 500);
    background(220);
    text("p5.js vers 0.9.0 test.", 10, 15);
}

function draw() {
    background(182, 173, 237); //light purple

    //background hair
    fill(51,25,0); //brown
    rect(width/2-105,height/2-80,210,300);

    //neck
    fill(245, 228, 201); //skin
    rect(width/2-30,height/2+120,60,70);

    //body
    fill(245, 228, 201); //skin
    square(width/2-120,height/2+170,240)

    //outfit
    fill(204,255,255); //skyblue
    rect(width/2-80,height/2+215,160,1000);;

    //face
    fill(245, 228, 201); //skin
    ellipse ((width/2), (height/2)-10, 220, 280);

    //top left eye
    fill(255, 255, 255); //white
    arc (width/2-50, height/2-30, 60, 40, 0, PI, OPEN);

    //bot left eye
    fill(255, 255, 255); //white
    arc (width/2-50, height/2-30, 60, 30, PI, 2*PI, OPEN);

    //top right eye
    fill(255, 255, 255); //white
    arc (width/2+50, height/2-30, 60, 40, 0, PI, OPEN);

    //bot right eye
    fill(255, 255, 255); //white
    arc (width/2+50, height/2-30, 60, 30, PI, 2*PI, OPEN);

    //right eye pupil
    fill(0,0,0); //black
    circle(width/2+50,height/2-30,25);

    //left eye pupil
    fill(0,0,0); //black
    circle(width/2-50,height/2-30,25);

    //eyebrow left
    fill(0,0,0); //black
    quad(width/2-75, height/2-67, width/2-30, height/2-67
        ,width/2-30,height/2-60, width/2-80,height/2-60);

    //eyebrow right
    fill(0,0,0); //black
    quad(width/2+30, height/2-67, width/2+75, height/2-67
        ,width/2+80,height/2-60, width/2+30,height/2-60);

    //nose
    fill (255, 231, 174); // skin2
    triangle (width/2-12, height/2+40, width/2, height/2-5, width/2+12, height/2+40);

    fill (255, 231, 174); //skin2
    triangle (width/2-12, height/2+40, width/2, height/2+35, width/2+12, height/2+40);

    //lips bot
    fill (255, 102, 102); // pink
    arc (width/2, height/2+80, 56, 25, 0, PI , CHORD);

    //lips topleft
    fill (255, 102, 102); // pink
    arc (width/2-14, height/2+77.5 ,28, 15, PI, 2*PI , CHORD);

    //lips topright
    fill (255, 102, 102); // pink
    arc (width/2+14, height/2+77.5 ,28, 15, PI, 2*PI , CHORD);

    //hair right
    fill(51,25,0); //brown
    arc (width/2+40, height/2-50,140, 220, 
        PI+3/2*(QUARTER_PI), 2*PI+1/4*(QUARTER_PI), OPEN);

    //hair left
    fill(51,25,0); //brown
    arc (width/2-30, height/2-50,180, 240, 
        PI-1/2*(QUARTER_PI), PI+2/3*PI, OPEN);

    //hair1
    strokeWeight(2);
    line(width/2, height/2-180, width/2+15, height/2-150);
    noLoop();

    //hair2
    strokeWeight(2);
    line(width/2+15, height/2-180, width/2+15, height/2-150);
    noLoop();
    
    //hair3
    strokeWeight(3);
    line(width/2+15, height/2-150, width/2+30, height/2-180);
    noLoop();

    }










