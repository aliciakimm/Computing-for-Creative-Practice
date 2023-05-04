// Alicia Kim
// yoonbink
// Section B
// i used my portrait as an each pixel to create a whole portrait

function preload(){ //load the image
    alicia = loadImage("https://i.imgur.com/FPEjcyO.jpeg");
}


function setup() {
    createCanvas(480, 480);
    imageMode(CENTER);
    angleMode(DEGREES);
    background(220);
    alicia.resize(480,480); //resize alicia to canvas size
    alicia.loadPixels(); //load pixels
}

function draw() {
    var x = floor(random(alicia.width)); //random x-coordinate value
    var y = floor(random(alicia.height)); //random y-coordinate value
    var pixColor = alicia.get(x,y); //get random coordinate in the canvas
    tint(pixColor); //tint with the color of that coordinate 

// divide sections by hair and the rest

    if (pixColor[0]>130) { //face & background has smaller images
        image(alicia,x,y,9,9);
    }

    if (pixColor[0]<130) { //hair section has bigger & rotated images 
        push();
        translate(x,y);
        rotate(180);
        image(alicia,0,0,13,13);
        pop();   
    }
}