var idx1;
var idx2;
var idy1;
var idy2;
var iNumLines=60;

var ox;
var oy;
var ox2;
var oy2;



function setup() {
    createCanvas(400, 300);
    background(0);
    idx1=100/iNumLines;
    idx2=200/iNumLines;
    idy1=100/iNumLines;
    idy2=200/iNumLines;


    r=70;
    r2=0.3;

    ox=width/2;
    oy=height/2;
    ox2=width;
    oy2=height;

}

function draw() {
    fill(200,0,0)
    
    //lightening
    var ix1=150;
    var ix2=300;
    var iy1=130;
    var iy2=80;
    strokeWeight(1);
    for (var i=0;i<=iNumLines;i+=1){
        stroke(255,20,147); //deep pink
        line(ix1+=idx1,iy1-=idy1,ix2-=idx2,iy2+=idy2);
    }
    noLoop();

    //vertical hole
    //loop over 2pi and the origin circulates.
    for (var t=0;t<=360;t+=4){
        strokeWeight(2.5);
        stroke(255,250,205); //lemon
        line(-30+ox+ox2*r2*Math.cos(radians(t)), 170+oy2*r2*Math.sin(radians(t))-5,
            -30+ox+ox2*r2*Math.cos(radians(t)),150+oy2*r2*Math.sin(radians(t))+5);
    }

    noLoop();
    //horizontal hole
    //loop over 2pi and the origin circulates.
    for (var t=0;t<=360;t+=4){
        stroke(0,206,209); // turquoise
        line(30+ox+5+ox2*r2*Math.cos(radians(t))-5, 170+oy2*r2*Math.sin(radians(t)),
            30+ox+5+ox2*r2*Math.cos(radians(t))+5,150+oy2*r2*Math.sin(radians(t)));
    }

    noLoop();

   
   //middle circle
    strokeWeight(1);
    //loop over 2pi
    for (var theta=0;theta<=360;theta+=10){
        //change origin 10 times
        for (var change=0; change<=10;change+=10){
            stroke(255);
            line(ox+change+r*Math.cos(radians(theta)),oy+r*Math.sin(radians(theta)),
                ox+change-r*Math.cos(radians(theta)),oy-r*Math.sin(radians(theta)));
        }
    }
    noLoop();
    
}
