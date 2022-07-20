const sketchBoard = document.querySelector('.board');
const sizeButton = document.querySelector('.sizeBtn');
let draw = false;

// Not letting the user draw if they are not clicking
window.addEventListener('mouseup', () => {
    draw = false;
})

// Creates a board based on the size the user wants
// Defaults to 16x16
function createBoard(size) {
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        // When you click, it allows you to draw
        div.addEventListener('mousedown', (e) => {
            draw = true;
            e.target.style.backgroundColor = 'black';
        });
        // For when you want to hold down the mouse, this enables that
        div.addEventListener('mouseover', changeColor);
        sketchBoard.appendChild(div);
    }
}

// Allows you to hold down the mouse and to draw on the board
function changeColor(e) {
    if (draw == false) return
    else {
        e.target.style.backgroundColor = 'black';
    }
}

// For when you click the button, it allows you to change the board's
// pixel density through a prompt 
sizeButton.addEventListener('click', () => {
    let size = prompt('How big do you want the canvas?');
    // Nothing more than 100, nothing less than 1 allowed
    while (size > 100 || size < 1) {
        size = prompt('Choose a number between 0-101');
    }
    // Clears the board of previous drawing
    while (sketchBoard.firstChild) {
        sketchBoard.removeChild(sketchBoard.firstChild);
    }
    // Alters the grid template so it can fit the new size
    sketchBoard.style.gridTemplateColumns = 'repeat(' + size +', 1fr)';
    sketchBoard.style.gridTemplateRows = 'repeat(' + size +', 1fr)';
    createBoard(size)
});

createBoard(16);