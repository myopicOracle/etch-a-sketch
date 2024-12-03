// Create a 16 x 16 grid of div's using js only

const container = document.getElementById("container")

    for (let i = 0 ; i < 16 ; i++) {
        // tileArray += container.appendChild(createTile);
        // container.appendChild(document.createElement("div"))
        container.innerHTML += `<div class="tile"></div>`
    }
    // end of grid construction

// make tile change color when hover over

const tileNodeList = document.querySelector("div.tile")

//const tileArray = Array.from(tileNodeList)


tileNodeList.addEventListener("mouseover", (event) => {
    event.target.style.cssText = "background-color: blue";
})