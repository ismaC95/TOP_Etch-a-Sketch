const body = document.querySelector("body");
const container = document.querySelector("#container");


function makeDivs() {
    const divs = 256;

    for(i = 0; i < divs; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("divSquares");
        container.appendChild(newDiv);
        
    }
}

makeDivs();
