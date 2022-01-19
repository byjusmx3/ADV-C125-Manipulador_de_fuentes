difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('¡PoseNet está inicializado!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(resultados);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("muñecaIzquierda  = " + leftWristX  + " muñecaDerechaX = "+ rightWristX + " diferencia = " + difference);
  }
}

function draw() {
background('#6C91C2');

  document.getElementById("font_size").innerHTML = "El tamaño de fuente del texto será de = " + difference +"px";
textSize(difference);
fill('#FFE787');
text('Peter', 50, 400);
}
