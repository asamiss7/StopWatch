var startButton = document.querySelector(".start-btn");
var stopButton = document.querySelector(".stop-btn");
var resetButton = document.querySelector(".reset-btn");
var theTimer = document.querySelector("#timer");

var timer = [0,0,0,0];

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
    // clearInterval(interval);
    interval = setInterval(runTimer,10);
}

stopButton.onclick = function () {
    clearInterval(interval);
}

resetButton.onclick = function () {
    clearInterval(interval);
    // timer = [0,0,0,0];
    theTimer.innerHTML =  "00:00.00";
}