const sketchBoard = document.querySelector('.board');
let draw = false;

window.addEventListener('mouseup', () => {
    draw = false;
})

for (let i = 0; i < 16 * 16; i++) {
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