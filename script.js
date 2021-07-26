let isDrawing = false;


function createGrid(gridSize) {
    const container = document.querySelector(".container");
    
    // cleans older grid
    while (container.firstChild) {
        console.log("im here!")
        container.lastChild.removeEventListener("mousemove", fillUp);
        container.removeChild(container.lastChild);
    }
    
    // creates grid
    container.style.display = "grid";
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    // populates grid with divs
    for (let col = 1; col < gridSize + 1; col ++) {
        for (let row = 1; row < gridSize + 1; row ++) {
            let pointDiv = document.createElement("div");
            pointDiv.style.gridColumnStart = col;
            pointDiv.style.gridColumnEnd = col + 1;
            pointDiv.style.gridRowStart = row;
            pointDiv.style.gridRowEnd = row + 1;
            pointDiv.setAttribute("draggable", false);
            pointDiv.style.backgroundColor = "rgba(0, 0, 0, 0.0)"
            pointDiv.classList.add("point-div")
            pointDiv.addEventListener("mousemove", fillUp);
            container.appendChild(pointDiv);
        }
    }

    // adds event listeners
    // const pointDivs = document.querySelectorAll(".point-div");
    // pointDivs.forEach(div => div.addEventListener("mouseover", fillUp));
}

function restartGrid() {
    const msj = "Please type in the desired grid size.\nIt should be a number between 2 and 80."
    let answer = -1;
    while (Object.is(answer, NaN) || answer < 2 || answer > 80) {
        answer = parseInt(window.prompt(msj, "16"));
    }
    createGrid(answer);
}

function rgba2array(rgbaString) {
    let array = rgbaString.split("(")[1];
    array = array.split(")")[0];
    array = array.split(", ");
    return array;
}

function array2rgba(array) {
    return `rgba(${array[0]}, ${array[1]}, ${array[2]}, ${array[3]})`;
}

function darkening(colorString) {
    let color = rgba2array(colorString);
    color[3] = parseFloat(color[3]) + 0.13;
    return array2rgba(color);
}

function fillUp(e) {
    if (!isDrawing) {return}
    const div = e.target;
    let color = div.style.backgroundColor;
    div.style.backgroundColor = darkening(color);
}

const restartButton = document.querySelector("#restart-button");
restartButton.addEventListener("click", restartGrid);

const body = document.querySelector("body");
body.addEventListener("mousedown", e => {
    isDrawing = true;
})
body.addEventListener("mouseup", e => {
    isDrawing = false;
})

createGrid(16);
s


