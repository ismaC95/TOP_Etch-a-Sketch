const body = document.querySelector("body");
const container = document.querySelector("#container");

//creating a grid of 16x16
function makeDivs(rows) {
    //clearing existing grid
    container.innerHTML = '';

    const grid = rows * rows;
    for(i = 0; i < grid; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("divSquares");
        container.appendChild(newDiv);
    }
    containerWidth(rows);
    hoveringDivs();
}

//function to change the color of the div that the mouse hovers
function hoveringDivs() {
    const grid = document.querySelectorAll(".divSquares");
    grid.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "pink";
        });
        /*square.addEventListener("mouseout", () =>{
            square.style.backgroundColor="";
        }); */
    });
}

//when clicking the button, the grid will come up with as many rows as the user inputs
function newGrid(){
    const btn = document.querySelector("button");
    btn.addEventListener("click", () => {
        const gridRows = prompt("How many rows?");
        makeDivs(gridRows);
        const grid = document.querySelectorAll(".divSquares");
        grid.forEach(square => {
            square.style.backgroundColor = "";
        });
    });

}

//make that the maximum width of the container is the number of rows inputed by
//the user by the amount of pixels a square is
function containerWidth(gridRows){
    container.style.width = (gridRows * 30) + "px";
}

newGrid();
