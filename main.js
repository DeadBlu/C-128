song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet Is initialized');
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results)
        leftWrist = results[0].pose.leftWrist.X;
        leftWrist = results[0].pose.leftWrist.Y;
        console.log("LeftWristX = " + leftWristX +" LeftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " + rightWristX +" RightWristY = " + leftWristY);
    }
}