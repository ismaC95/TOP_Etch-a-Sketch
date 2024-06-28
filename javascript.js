const body = document.querySelector("body");
const container = document.querySelector("#container");

//creating a grid
function makeDivs(rows) {
    //clearing existing grid
    container.innerHTML = '';

    const grid = rows * rows;
    for(let i = 0; i < grid; i++){
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
            const {red, blue, green} = randomColor();
            square.style.backgroundColor = `rgb(${red}, ${blue}
                , ${green})`;
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
        if(gridRows < 1 || gridRows > 100){
            alert("Please, add a number between 1 and 100 to continue")
        }
        else{
            makeDivs(gridRows);
            const grid = document.querySelectorAll(".divSquares");
            grid.forEach(square => {
                square.style.backgroundColor = "";
        });
        };
    });

}

//make that the maximum width of the container is the number of rows inputed by
//the user by the amount of pixels a square is
function containerWidth(gridRows){
    const grid = document.querySelectorAll(".divSquares");
    grid.forEach(square => {
    square.style.width = (500 / gridRows) + "px";
    square.style.heigth = (500 / gridRows) + "px";
    });
}

//randomize colors
function randomColor(){
    let red = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);

    return {red, blue, green};
}

newGrid();
