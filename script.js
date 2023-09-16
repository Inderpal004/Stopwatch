let [hour, minutes, seconds] = [0, 0, 0];
let displayTime = document.getElementById('displayTime');
let startTimer = document.getElementById('startTimer');
let stopTimer = document.getElementById('stopTimer');
let resetTimer = document.getElementById('resetTimer');

let intervalId = null; // Storing interval ID

function startWatch() {
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hour++;
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    displayTime.innerHTML = h + ":" + m + ":" + s;
    seconds++;
}

startTimer.addEventListener('click', () => {
    if (intervalId === null) { // Check if the timer is not already running
        intervalId = setInterval(startWatch, 1000);
    }
});

stopTimer.addEventListener('click', () => {
    if (intervalId !== null) { // Check if the timer is running
        clearInterval(intervalId);
        intervalId = null; // Reset the interval ID
    }
});

resetTimer.addEventListener('click', () => {
    if (intervalId !== null) { // Check if the timer is running
        clearInterval(intervalId);
        intervalId = null; // Reset the interval ID
    }
    [hour, minutes, seconds] = [0, 0, 0]; // Reset the time variables
    displayTime.innerHTML = '00:00:00';
});
