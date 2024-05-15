const GRIDSIZE = 700

let currentColor = "black"

let rows = 16
let cols = 16

const sizeValue = document.getElementById('size-value')
const gridContainer = document.getElementById('grid-container')
gridContainer.style.width = `${GRIDSIZE}px`
gridContainer.style.height = `${GRIDSIZE}px`

const activateRandom = () => {
    let randomColor = `rgba(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.random().toFixed(1)})`;
    return randomColor;
}

function changeBackgroundColor () {
    if (currentColor === 'random') {
        this.style.backgroundColor = activateRandom()
    } else {
    }
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

const changeGridSize = (size) => {
    rows = size
    cols = size
    sizeValue.textContent = `${size}x${size}`
    deleteCurrentGrid()
    renderGrid()
}

const activateEraser = () => {
    currentColor = "white"
}

const activateClear = () => {
    deleteCurrentGrid()
    renderGrid()
}

function changeActiveButton() {
    document.querySelectorAll('button').forEach(btn => {
        btn.style.background = 'transparent';
        btn.style.color = 'black';
    });
    this.style.background = 'black';
    this.style.color = 'white';
}


// query selectors
document.getElementById('eraser').addEventListener('click', function() {
    activateEraser()
    changeActiveButton.call(this)
})
document.getElementById('color-picker').addEventListener('change', function() {
    currentColor = this.value;
    document.querySelectorAll('button').forEach(btn => {
        btn.style.background = 'transparent';
        btn.style.color = 'black';
    });
});
document.getElementById('clear').addEventListener('click', function() {
    activateClear()
})
document.getElementById('grid-size').addEventListener('change', function() {
    changeGridSize(this.value)
})
document.getElementById('random').addEventListener('click', function () {
    currentColor = 'random'
    changeActiveButton.call(this)
})
document.getElementById('toggle-lines').addEventListener('click', function() {
    if (this.style.border !== "none") {
        this.style.background = "black" 
        this.style.color = 'white'  
        this.style.border = "none"
        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.style.border = "1px solid gray"
        })
    }
    else {
        this.style.background = 'transparent'
        this.style.color = 'black'
        this.style.border = "1px solid gray"
        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.style.border = "none"
        })
    }
})


renderGrid()

