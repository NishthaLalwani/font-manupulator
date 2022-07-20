rightWristX=0;
leftWristX=0;
difference =0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550,550);
    canvas.position(560,160);
    posenet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
    console.log('Posenet is Initialized');
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}

function draw(){
    background('#87CEEBx');
    textSize(difference);
    fill('#F8C8DC');
    stroke('#000000');
    text(Peter, 50, 400);
}

 
