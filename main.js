video = "";

function preload(){
    video = createVideo(VIDEO);
    video.hide()
}

function setup(){
    canvas = createCanvas(480,320);
    canvas.center();
}

function draw(){
    image(video,0,0,480,320);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    status1 = true;
}