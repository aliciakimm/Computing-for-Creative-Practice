//Alicia Kim
//Section B
//yoonbink@andrew.cmu.edu
//Project-05

function setup() {
    createCanvas(420, 420);
    background(175,238,238);
}

function draw() {
    for (r=0;r<8;r++){
        for(c=0;c<8;c++){
            if (r%2==0 && c%2==0){
                drawFlower(r*60,c*60,255,209,193);
            }
            else{
                drawFlower(r*60,c*60,255,250,245);
            }
            
        }
    }
    noLoop();
}


function drawFlower (x,y,fillR,fillG,fillB) {
    
// leaves
    push();
    noStroke();
    translate(x+30,y+25);
    var randomR=floor(random(360));
    for (var j=0;j<3;j++){
        
        fill(144,238,144); //light green
        rotate(radians(randomR));
        ellipse(13,13,10,20);     
    }
    pop();

// stem
    push();
    noStroke();
    translate(x+30,y+25);
    var randomS=floor(random(360));
    fill(60,179,113,191); //sea green
    rotate(radians(randomS));
    rect(13,13,12,4.5);
    print(randomS);
    
    pop();

// flower petals
    push();  
    noStroke();
    translate(x+30,y+25);
    fill(fillR,fillG,fillB); // lavender blush
    var petal = floor(random(3,7));
    for (var i=0 ; i<petal ;i++){    
        ellipse(0,0,25,50);
        rotate(2*PI/petal);    
    }
    pop();
    noLoop();

// circle in the middle
    push();
    noStroke();
    fill(249,139,136); //pink
    circle (x+28,y+28,20);
    fill(255,209,193); //peach
    circle(x+30,y+25,12);
//small circles
    fill(128,128,0); //olive
    circle(x+28,y+23,4);
    circle(x+32,y+25,3);
    circle(x+28,y+28,4.5);
    circle(x+29,y+27,2.5);
    circle(x+23,y+23,3);

    pop();

}