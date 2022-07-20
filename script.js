const sketchBoard = document.querySelector('.board');
const sizeButton = document.querySelector('.sizeBtn');
let size = 16;
let draw = false;

window.addEventListener('mouseup', () => {
    draw = false;
})

for (let i = 0; i < size * size; i++) {
    let div = document.createElement('div');
    div.addEventListener('mousedown', (e) => {
        draw = true;
        e.target.style.backgroundColor = 'black';
    });
    div.addEventListener('mouseover', changeColor);
    sketchBoard.appendChild(div);
}

function changeColor(e) {
    if (draw == false) return
    else {
        e.target.style.backgroundColor = 'black';
    }
}

sizeButton.addEventListener('click', () => {
    size = prompt('How big do you want the canvas?', '16');
});