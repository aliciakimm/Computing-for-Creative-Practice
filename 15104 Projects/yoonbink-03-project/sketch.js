//Alicia Kim
//Section B

var r = 80;
var angle = 0;

function setup() {
    createCanvas(450, 600);
    background(220);
}

function draw() {
    noStroke ();
    //limiting y from 0 to 600
    var y = max(min(mouseY, 600), 0);  
    // as y increases background gets lighter
    background (255*y/650); 


//top ellipse
    fill (255,232,124); // star yellow
    ellipse (width/2,37.5,25,25);

//trunk
    fill (58.8,29.4,0); // brown
    rect(width/2-17.5,65,35,450);

//leaves
// as y increases, size of the leaves increases & y position changes 
    push();
    // higher the y, leaves get darker 
    fill (157-120*y/650,205-140*y/650,143-120*y/650); //frog
    triangle(width/2, 50, width/3, 120, 2/3*width,120);

    translate (-45*y/650,-25*y/650);
    scale (1+0.2*y/650);
    triangle(width/2, 50+65*y/650, width/3-8*1/3*y/650, 
        120+55*y/650, 2/3*width+8*1/3*y/650, 120+55*y/650);

    translate (-45*y/650,-25*y/650);
    scale (1+0.2*y/650);
    triangle(width/2, 50+95*y/650, width/3-12.121212*y/650, 120+100*y/650,
     width*2/3+12.121212*y/650, 120+105*y/650);

    translate (-45*y/650,-25*y/650);
    scale (1+0.2*y/650);
    triangle(width/2, 50+140*y/650, width/3-15.68627*y/650, 120+150*y/650,
     width*2/3+15.68627*y/650, 120+150*y/650);
   

    translate (-45*y/650,-25*y/650);
    scale (1+0.2*y/650);
    triangle(width/2, 50+175*y/650, width/3-18.05956*y/650, 120+185*y/650,
     width*2/3+18.05956*y/650, 120+185*y/650);
    pop();

//ornaments 
// higher the y, more ornaments appear

    if (y>125){
        fill (251,209,225); // ornaments pink
        ellipse (width/2-10,88,25,25);

    }
    if (y>165){
        fill (255,232,124); // ornaments yellow
        ellipse (width/2+27,138,25,25);
    }

    if (y>210){
        fill (255,218,173); // ornaments orange
        ellipse (width/2,200,25,25);
    }
    if (y>270){
        fill (250,128,114); // ornaments salmon
        ellipse (width/3,220,25,25);
    }
    if (y>330){
        fill (255,232,124); // ornaments yellow
        ellipse (width/2-8,300,25,25);
    }
    if (y>390){
        fill (255,218,173); // ornaments orange
        ellipse (width-width/3,280,25,25);
    }

    if (y>440){
        fill (255,232,124); // ornaments yellow
        ellipse (width/3,360,25,25);

    }

    if (y>495){
        fill (251,209,225); // ornaments pink
        ellipse (width/2+14,400,25,25);
    }

    if(y>550){
        fill (250,128,114); // ornaments salmon
        ellipse (width-width/4,420,25,25);

        fill (255,218,173); // ornaments orange
        ellipse (width/4,450,25,25);
    }
    
}








