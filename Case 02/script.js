const wrapper = document.getElementById('blocks-wrapper');

const colors = ['#FFC0CB', '#A020F0', '#FF0000', '#008000', '#0000FF', '#FFFF00']; 

let queue = [...colors]; 

function renderQueue() {
    wrapper.innerHTML = '';

    queue.forEach((color, index) => {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundColor = color;

        if (index === 0) {
            block.style.left = '50px';
            block.style.top = '40px';
        } 
        else if (index === 5) {
            block.style.left = '650px';
            block.style.top = '210px';
        } 
        else {
            let xPos = 50 + (index * 120);
            block.style.left = `${xPos}px`;
            block.style.top = '125px';
        }

        wrapper.appendChild(block);
    });
}

function shiftQueue() {
    const lastColor = queue.pop();
    queue.unshift(lastColor);
    
    renderQueue();
}

renderQueue();

setInterval(shiftQueue, 1500);