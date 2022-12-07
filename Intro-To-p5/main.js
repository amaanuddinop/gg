function preload(){

}

function setup(){
canvas=createCanvas(640,480);
canvas.position(200,240);
video = createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw(){
image(video,0,0,640,480);
tint(tint_color);
}

function apply_fillter(){
    tint_color=document.getElementById("colorname").value;
}
 
function take_snapshot(){
  save('amaan_car.png');

}















