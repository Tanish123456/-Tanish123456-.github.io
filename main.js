canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var Car_1_width = 120;
var Car_1_height = 50 ;
var Car_1_x = 10;
var Car_1_y = 10;
var Car_2_width = 120;
var Car_2_height = 50;
var Car_2_x = 10;
var Car_2_y = 100;
background_image = "Track.jpg";
Car_1_image = "Car 1.png";
Car_2_image = "M2.png";

function add() {
    background_image_tag = new Image();
    background_image_tag.onload = upload_background;
    background_image_tag.src = background_image;
    
    Car_1_image_tag = new Image();
    Car_1_image_tag.onload = upload_Car_1;
    Car_1_image_tag.src = Car_1_image;

    Car_2_image_tag = new Image();
    Car_2_image_tag.onload = upload_Car_2;
    Car_2_image_tag.src = Car_2_image;
}

function upload_background() {
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function upload_Car_1() {
    ctx.drawImage(Car_1_image_tag,Car_1_x,Car_1_y,Car_1_width,Car_2_height);
}

function upload_Car_2() {
    ctx.drawImage(Car_2_image_tag,Car_2_x,Car_2_y,Car_2_width,Car_2_height);
}
window.addEventListener("keydown",my_key_down);

function my_key_down(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("Car 1 up");
    }
        if (keyPressed == '40') {
            down();
            console.log("Car 1 down");
        }
    if (keyPressed == '39') {
            right();
            console.log("Car 1 right");
    }
    if (keyPressed == '37') {
        left();
        console.log("Car 1 left");
}

if (keyPressed == '87') {
    up();
    console.log("Car 2 up");
}
    if (keyPressed == '83') {
        down();
        console.log("Car 2 down");
    }
if (keyPressed == '68') {
        right();
        console.log("Car 2 right");
}
if (keyPressed == '65') {
    left();
    console.log("Car 2 left");
}
}
