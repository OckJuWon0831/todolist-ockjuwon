
const autoClock = document.querySelector("#auto-clock h2")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    autoClock.innerText = `${hours}:${minutes}:${seconds}`
}

// initiate getClock()
getClock();
setInterval(getClock, 1000);