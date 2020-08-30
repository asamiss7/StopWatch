var startButton = document.querySelector(".start-btn");
var stopButton = document.querySelector(".stop-btn");
var resetButton = document.querySelector(".reset-btn");
var theTimer = document.querySelector("#timer");

var timer = [0,0,0,0];
var interval;

function leadingZero(time) {
    if (time<=9) {
        time= "0" + time;
    }
    return time;
}

//function to start the timer
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + "." + leadingZero(timer[2]);
    theTimer.innerHTML= currentTime;
    timer[3]++;

    timer[0]= Math.floor((timer[3]/100)/60); //for minutes
    timer[1]= Math.floor((timer[3]/100) - (timer[0]*60)); //for seconds
    timer[2]= Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}

startButton.onclick = function () {
<<<<<<< HEAD
    startButton.innerHTML= "Resume";
=======
>>>>>>> 22f053c93f90967ac7bb1dc185d27c0aaee5bf6c
    clearInterval(interval);
    interval = setInterval(runTimer,10);
}

stopButton.onclick = function () {
    clearInterval(interval);
}

resetButton.onclick = function () {
    startButton.innerHTML= "Start";
    clearInterval(interval);
    timer = [0,0,0,0];
    theTimer.innerHTML =  "00:00.00";
}
<<<<<<< HEAD

=======
>>>>>>> 22f053c93f90967ac7bb1dc185d27c0aaee5bf6c
