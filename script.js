const container = document.querySelector(".container");
container.style.display = "grid";
container.style.gridTemplateRows = "repeat(16, 1fr)";
container.style.gridTemplateColumns = "repeat(16, 1fr)";
for (let col = 1; col < 17; col ++) {
    for (let row = 1; row < 17; row ++) {
        let pointDiv = document.createElement("div");
        pointDiv.style.gridColumnStart = col;
        pointDiv.style.gridColumnEnd = col + 1;
        pointDiv.style.gridRowStart = row;
        pointDiv.style.gridRowEnd = row + 1;
        pointDiv.classList.add("point-div")
        container.appendChild(pointDiv);
    }
}