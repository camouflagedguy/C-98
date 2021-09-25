var SpeechRecognition =window.webkitSpeecRecognition;

var recognition = new SpeechRecognition();

function start() {
document.getElementById("textarea").innerHTML = "";
recognition.start
}

recognition.onresult = function(event) {
var Content = event.results[0][0].transcript;
document.getElementById("textarea").innerHTML = Content;
}

function speak() {
var synth = window.speechSynthesis
speak_data = document.getElementById("textarea").value;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis)
}

function speak() {
var synth = window.speechSynthesis
speak_data = document.getElementById("textarea").value
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak("utterThis");    
}

Webcam.set({
width:360,
height:250,
image_format : 'png',
png_quality:1000
})
camera = document.getElementById("camera");