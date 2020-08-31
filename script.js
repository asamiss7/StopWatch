var startButton = document.querySelector(".start-btn");
var stopButton = document.querySelector(".stop-btn");
var resetButton = document.querySelector(".reset-btn");
var lapButton = document.querySelector(".lap-btn");
var theTimer = document.querySelector("#timer");

var timer = [0,0,0,0];
var interval;
var i=1;

function leadingZero(time) {
    if (time<=9) {
        time= "0" + time;
    }
    return time;
}

//function to run the timer
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + "." + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60); //for minutes
    timer[1] = Math.floor((timer[3]/100) - (timer[0]*60)); //for seconds
    timer[2] = Math.floor(timer[3] - (timer[1]*100) - (timer[0]*6000));
}

startButton.onclick = function () {
    startButton.innerHTML = "Resume";
    clearInterval(interval);
    interval = setInterval(runTimer,10);
}

stopButton.onclick = function () {
    clearInterval(interval);
}

// clear the timer
resetButton.onclick = function () {
    startButton.innerHTML = "Start";
    clearInterval(interval);
    timer = [0,0,0,0];
    theTimer.innerHTML =  "00:00.00";
    i=1;
    // lap.remove();
    var clearlap = document.querySelector('#notelap');
    // clearlap.innerHTML = "";
    document.getElementById("main").removeChild(clearlap);
    
}

// function to show the lapvalues
lapButton.onclick = function () {
    var lap = document.createElement('div');
    lap.id = "notelap";
    // var lapvalues = document.createTextNode('p');
    // lap.appendChild(lapvalues);
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + "." + leadingZero(timer[2]);
    lap.innerHTML = "Lap" +  " " + i + " " + currentTime;
    i++;

    document.getElementById("main").appendChild(lap);

    // document.getElementById("main").removeChild(lap);
}

