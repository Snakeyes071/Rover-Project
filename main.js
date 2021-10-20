canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width="100";
rover_height="90";
backgroundimage="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;

function add() {
    background_imagetag=new Image();
    background_imagetag.onload=uploadBackground;
    background_imagetag.src=backgroundimage;

    rover_imagetag=new Image();
    rover_imagetag.onload=roverBackground;
    rover_imagetag.src=rover_image;
}

function uploadBackground () {
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function roverBackground() {
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypreesed=e.KeyCode;
    if (keypreesed=='38'){
        up ();
        console.log("up");
    }
    if (keypreesed=='40'){
        down ();
        console.log("down");
    }
    if (keypreesed=='37'){
        left();
        console.log("left");

    }
    if (keypreesed=='39'){
        right ();
        console.log("right");
    }
}
   function up (){
       if (rover_y>=0){
           rover_y=rover_y-10;
           console.log("When up is pressed x="+rover_x+"y="+rover_y);
           uploadBackground();
           roverBackground ();
       }
    }
    function down () {
        if (rover_y<=500){
            rover_y=rover_y+10;
            console.log("When down is pressed x="+rover_x+"y="+rover_y);
            uploadBackground();
            roverBackground ();
        }
    }
    function right () {
        if (rover_x<=700){
            rover_x=rover_x+10;
            console.log("When right is pressed x="+rover_x+"y="+rover_y);
            uploadBackground();
            roverBackground ();
        }
    }
    function left () {
        if (rover_x>=0){
            rover_x=rover_x-10;
            console.log("When right is pressed x="+rover_x+"y="+rover_y);
            uploadBackground () ;
            roverBackground () ;
        }
    }
