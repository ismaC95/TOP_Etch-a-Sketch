const body = document.querySelector("body");
const container = document.querySelector("#container");

//creating a grid of 16x16
function makeDivs() {
    const divs = 256;

    for(i = 0; i < divs; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("divSquares");
        container.appendChild(newDiv);
        
    }
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

makeDivs();
hoveringDivs();