// Create a 16 x 16 grid of div's using js only

const container = document.getElementById("container")

    for (let i = 0 ; i < 16 ; i++) {
        container.innerHTML += `<div class="tile"></div>`
    }
    // end of grid construction

// make tile change color when hover over

const tileNodeList = document.querySelectorAll("div.tile")
const tileArray = Array.from(tileNodeList)


    let i = 0;
    while (i < 16) {
        tileArray[i].addEventListener("mouseover", (event) => {
            event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
        });
        i++
    }
