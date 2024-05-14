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
const renderGrid = () => {
    for (let i = 0; i < rows * cols; i++) {
        const gridCell = document.createElement('div')
        gridCell.style.width = `${GRIDSIZE / rows - 2}px`
        gridCell.style.height = `${GRIDSIZE / cols - 2}px`
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)
        gridCell.addEventListener('mouseover', changeBackgroundColor)
    }
}

const deleteCurrentGrid = () => {
    gridContainer.textContent = "";
}

changeGridSize = (size) => {
    rows = size
    cols = size
    deleteCurrentGrid()
    renderGrid()
}

const activateEraser = () => {
    currentColor = "white"
}



const activateRandom = () => {
    while (currentColor = 'random') {
        
    }
}

const activateClear = () => {
    deleteCurrentGrid()
    renderGrid()
}


// query selectors
document.getElementById('eraser').addEventListener('click', () => activateEraser())
document.getElementById('colorPicker').addEventListener('change', function() {
    currentColor = this.value;
});
document.getElementById('clear').addEventListener('click', () => activateClear())
document.getElementById('16').addEventListener('click', () => changeGridSize(16))
document.getElementById('32').addEventListener('click', () => changeGridSize(32))
document.getElementById('64').addEventListener('click', () => changeGridSize(64))
document.getElementById('100').addEventListener('click', () => changeGridSize(100))


renderGrid()

