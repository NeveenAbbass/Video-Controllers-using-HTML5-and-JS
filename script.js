var vid = document.getElementsByTagName("video")[0];
var durationSlider = document.getElementById("duration");
var durLabel = document.getElementById("dur");
var currentLabel = document.getElementById("current")
var sound = document.getElementById("sound");
var speed = document.getElementById("speed");
var muteBtn = document.getElementById("mute")

vid.onloadedmetadata = function(){
  durLabel.innerText += parseInt(this.duration);
  durationSlider.setAttribute("max",vid.duration);
}

vid.addEventListener("timeupdate", function(){
  currentLabel.innerHTML = "0:" +parseInt(this.currentTime);
  durationSlider.value = this.currentTime;
})

durationSlider.addEventListener("input", function(){
  vid.currentTime = durationSlider.value ;
})


function play(){
  vid.play();
}

function stop(){
  vid.pause();
}

function minusTen(){
  vid.currentTime-=10;
}

function minusFive(){
  vid.currentTime-=5;
}

function plusFive(){
  vid.currentTime+=5;
}

function plusTen(){
  vid.currentTime+=10;
}


sound.addEventListener("input", function(){
  vid.volume = sound.value;
  if(vid.muted=== true){
    muteBtn.innerHTML = "muted"
  }
  else{
    muteBtn.innerHTML = "mute"
  }
})

vid.addEventListener("timeupdate",function(){
  sound.value= this.volume;
})

speed.addEventListener("input", function(){
  vid.playbackRate = speed.value;
})

vid.addEventListener("timeupdate",function(){
  speed.value= this.playbackRate;
})

// function muteToggle(){}{
//   if(vid.muted === true){
//     this.innerHTML = "muted";
//   }
//   else{
//     vid.muted = true;
//   }

function mute(){
  if(vid.muted === true){
    vid.muted = false;
    vid.volume = sound.value;
    muteBtn.innerText = "mute"
  }
  else if(vid.muted === false){
    vid.muted = true;
    sound.value = 0;
    muteBtn.innerText = "muted"
  }
}
