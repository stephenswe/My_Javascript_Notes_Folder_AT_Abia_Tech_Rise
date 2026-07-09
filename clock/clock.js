const clockP = document.getElementById("clock");

function addZero (num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return num;
    }
}

function updateClock() {
    //this gets the current or present time we are in
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = "AM";
    if (hours >= 12) {
        ampm = "PM";
    }
    //converting from 24hrs to 12hrs clock
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    clockP.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + " " + ampm;
    }
    updateClock();
    setInterval(updateClock, 1000);