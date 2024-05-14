const GRIDSIZE = 600

let currentColor = "black"

let rows = 16
let cols = 16

const gridContainer = document.getElementById('grid-container')
gridContainer.style.width = `${GRIDSIZE}px`
gridContainer.style.height = `${GRIDSIZE}px`

function changeBackgroundColor () {
    this.style.backgroundColor = currentColor;
}

for (let i = 0; i < rows * cols; i++) {
    const gridCell = document.createElement('div')
    gridCell.style.width = `${GRIDSIZE / rows - 2}px`
    gridCell.style.height = `${GRIDSIZE / cols - 2}px`
    gridCell.classList.add('grid-cell')
    gridContainer.appendChild(gridCell)
    gridCell.addEventListener('mouseover', changeBackgroundColor)
}

const activateEraser = () => {
    currentColor = "white"
}

const activateRandom = () => {
    while (currentColor = 'random') {
        
    }
}


// query selectors
document.getElementById('eraser').addEventListener('click', () => activateEraser())

