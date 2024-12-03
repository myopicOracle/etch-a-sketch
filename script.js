// Create a 16 x 16 grid of div's using js only

const bodyContainer = document.querySelector("body")

const divContainer = document.getElementById("container")

// const tile1 = document.createElement("div")
// tile1.textContent = "O";
// container.appendChild(tile1)

// const tile2 = document.createElement("div")
// container.appendChild(tile2)


    for (let i = 0 ; i < 16 ; i++) {
        divContainer.appendChild(
            document.createElement("div"))
    }


// const newTile = document.createElement("div")

// container.appendChild()





// function addTiles() {
//     let tileGrid;
//     for (let i = 0 ; i < 16 ; i++) {
//         tileGrid = container.appendChild(document.createElement("div"))
//     }
//     return tileGrid;
// }

// addTiles()
