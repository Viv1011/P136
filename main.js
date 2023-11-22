status= "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(480, 380);
    video.hide();
}

function start() {
    objectDectector = ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status")
}