let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}`;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        document.getElementById("display").innerHTML = timeToString(elapsedTime);
    }, 1000);
    document.getElementById("start").disabled = true;
}

function stop() {
    clearInterval(timerInterval);
    document.getElementById("start").disabled = false;
}

function reset() {
    clearInterval(timerInterval);
    document.getElementById("display").innerHTML = "00:00";
    elapsedTime = 0;
    document.getElementById("start").disabled = false;
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
