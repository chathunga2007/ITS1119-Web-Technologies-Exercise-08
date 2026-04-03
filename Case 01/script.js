const men = [
    document.getElementById("a"),
    document.getElementById("b"),
    document.getElementById("c"),
    document.getElementById("d"),
    document.getElementById("e"),
    document.getElementById("f")
];

let queue = ["A", "B", "C", "D", "E", "F"];

function renderQueue() {
    for (let i = 0; i < men.length; i++) {
        men[i].textContent = queue[i];
    }
}

function rotateQueue() {
    queue.unshift(queue.pop());
    renderQueue();
}

window.addEventListener('load', () => {
    renderQueue();
    setInterval(rotateQueue, 2000);
});