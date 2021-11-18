nose_x = 0;
nose_y = 0;

function preload()
{
img = loadImage("https://i.postimg.cc/j2CLmJCf/Clown-Nose-PNG-Image.png");
}


function setup()
{
    canvas = createCanvas(400, 400);
    canvas.position(420, 190);
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log('Posenet Is Initiliazed');
}


function draw()
{
image(video, 0, 0, 400, 400);
image(img, nose_x, nose_y, 30, 30);
}


function take_snapshot()
{
    save('Shourya.png');
}