var Recognition = new webkitSpeechRecognition;

function start() {
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}

Recognition.onresult = function(event) {
    console.log(event);
    output = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = output;
    if(output == "take my selfie") {
    speak();
    }
}

function speak() {
    var apicontainer = window.speechSynthesis;
    var apicontainercontainer = "taking your selfie in 5 seconds";
var contcontcont = new SpeechSynthesisUtterance(apicontainercontainer);
apicontainer.speak(contcontcont);
Webcam.attach(webera);
setTimeout(function() {snapshot();}, 5000);
}

webera = document.getElementById("picture_display");

Webcam.set({
   width: 320,
   height: 240,
   image_format: 'jpeg',
   jpeg_quality: 100
});

function snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("webcam").innerHTML = '<img id = "weam" src ="'+data_uri+'">';
    });
}

function save() {
    store = document.getElementById("atag");
    storeimgstore = document.getElementById("weam").src;
    store.href = storeimgstore;
}
