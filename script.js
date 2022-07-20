const sketchBoard = document.querySelector('.board');
const sizeButton = document.querySelector('.sizeBtn');
let draw = false;

window.addEventListener('mouseup', () => {
    draw = false;
})
function createBoard(size) {
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.addEventListener('mousedown', (e) => {
            draw = true;
            e.target.style.backgroundColor = 'black';
        });
        div.addEventListener('mouseover', changeColor);
        sketchBoard.appendChild(div);
    }
}

function changeColor(e) {
    if (draw == false) return
    else {
        e.target.style.backgroundColor = 'black';
    }
}

function clearBoard(e) {

}

sizeButton.addEventListener('click', () => {
    let size = prompt('How big do you want the canvas?');
    while (size > 100 || size < 1) {
        size = prompt('Choose a number between 0-101');
    }
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.firstChild);
    }
    sketchBoard.style.gridTemplateColumns = 'repeat(' + size +', 1fr)';
    sketchBoard.style.gridTemplateRows = 'repeat(' + size +', 1fr)';
    createBoard(size)
});

createBoard(16);