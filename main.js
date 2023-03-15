var speechRecognition=window.webkitSpeechRecognition;

var recognition = new speechRecognition();
function start()
{
   document.getElementById("textbox").innerHTML = "";
   recognition.start()
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if(Content =="tire minha selfie")
    {
      console.log("tirando selfie ---");
      speak();
    }
}
function speak()
{
   var synth = window.speechSynthesis;

   speakData = "tirando sua selfie em três segundos";
   var utterThis = new SpeechSynthesisUtterance(speakData);
   synth.speak(utterThis);


   Webcam.attach(camera);

   setTimeout(function(){
    takeSelfie();
    save();

   },3000);
}
 camera = document.getElementById("camera");
 Webcam.set({
  width:360,
  height:250,
  image_format : 'jpeg',
  jpeg_quality:90
 });

 function takeSelfie()
    {
    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="selfieImage" src="'+data_uri+'"/>';
    });
    }
  
    function save()
    {
    link = document.getElementById("ancora");
    image = document.getElementById("selfieImage").src;
    link.href = image;
    link.click();
    }