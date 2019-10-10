let container = document.querySelector("#container");

function gridDraw (squares) {
    for (let i = 0; i < squares; i++) {
        for (let x = 0; x < squares; x++) {
            let boxes = document.createElement("div");
            gridStyle(boxes, i, x, squares);
            container.appendChild(boxes);
        }
    }
}

function gridSize() {
    let pickSize = prompt("What size should your grid be?");
    if (!Number.isInteger(+pickSize) | pickSize > 100 | isNaN(pickSize)) {
        alert("Pick a number between 1 - 100");
        gridSize();
    } else if (pickSize == null) {
        return;
    } else {
        gridDraw(pickSize);
    }
}

function newGrid() {
    let gridNum = container.childElementCount;
    for (let i = 0; i < gridNum; i++) {
        container.removeChild(container.children[0]);
    }
}

function cleanGrid() {
    let clearSquares = document.querySelectorAll("#container div");
    clearSquares.forEach((clearSquares) => {
        clearSquares.classList.remove("hover");
    });
}

function createSketch(squares) {
    container = document.createElement("div");
    container.classList.add("container");
    container.style.display = "grid";
    container.style.border = "3px solid white";
    container.style.borderRadius = "3px";
    container.style.width = "900px";
    container.style.margin = "auto";

    squareSide = parseInt(900/squares);
    container.style.gridTemplate = `repeat(${squares}, ${squareSide}px)/repeat(${squares}, ${squareSide}px)`
    document.querySelector("#container").appendChild(container);

    gridDraw(squares);
}

function gridStyle(boxes, i, x, squares) {
    boxes.classList.add("boxes");
    boxes.addEventListener("mouseover", () => boxes.style.backgroundColor = getRandomColor(i, x, squares));
}

function getRandomColor (i, x, squares) {
    let red = parseInt(556 / squares * i);
    let green = parseInt(556 / squares * x);
    let blue = "66";
    return `rgb(${red}, ${green}, ${blue})`;
}

let reset = document.querySelector("#reset-button");
    reset.addEventListener("click", newGrid);
let gridBig = document.querySelector("#resize-button");
    gridBig.addEventListener("click", gridSize);


createSketch(16);