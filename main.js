noseX=0;
noseY=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/Nj4KsYL1/clownnose.png");
}
function setup(){
    canvas=createCanvas(500,360);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
 console.log("model has loaded");
}
function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-95;
        noseY=results[0].pose.nose.y-63;
    }
}
function draw(){
    image(video,0,0,500,360);
    image(clown_nose, noseX, noseY, 30, 30);
}
function download(){
    save('joker.png');
}