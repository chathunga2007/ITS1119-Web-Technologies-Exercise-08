const men = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
    document.getElementById("e"),
    document.getElementById("f")
];

let queue = ["A", "B", "C", "D", "E", "F"];
let intervalId = null;

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

function renderQueue() {
    for (let i = 0; i < men.length; i++) {
        men[i].textContent = queue[i];
    }
}

function rotateQueue() {
    queue.unshift(queue.pop());
    renderQueue();
}

function startRotation() {
    if (intervalId !== null) return;

    intervalId = setInterval(rotateQueue, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopRotation() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

window.addEventListener('load', () => {
    renderQueue();
    startRotation();

    startBtn.addEventListener('click', startRotation);
    stopBtn.addEventListener('click', stopRotation);
});