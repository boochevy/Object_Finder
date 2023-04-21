objects = [];
status="";



function preload(){
video = createVideo('video.mp4');
video.hide();
}
function setup() {
 canvas = createCanvas(380, 380);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(380,380);
 video.hide();

 function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
        objectDetecter.detect(video, gotResult);
        for (i - 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "&", objects[i].height);
            nofill();
            stroke("#FF0000");
            Rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,)

            if(objects )[i].label == object_name
        {
            video.stop();
            objectDetector.detect(video, gotresult);
            document.getElementById("object_status").innerHTML = object_name + "Found";
            synth = window.SpeechSynthesis;
            utterThis = new SpeechSynthesisUtterance(object_name + "Found");
            synth.speak(utterThis);

        }
        else
        {
            document.getElementById("object_status".innerHTML = object_name + "Not Found");
        }
    
    }
} 
