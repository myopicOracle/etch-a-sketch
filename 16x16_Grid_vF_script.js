// Create a 16 x 16 grid of div's using js only
const container = document.getElementById("container")


    // end of grid construction



//temporary out
    // let i = 0;
    // while (i < 16) {
    //     tileArray[i].addEventListener("mouseover", (event) => {
    //         event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
    //     });
    //     i++
    // }
    // end of color change 

const body = document.querySelector("body")

const button = document.createElement("button")
    button.textContent = "Change Grid Size"
    body.appendChild(button)


for (let i = 0 ; i < 16 ; i++) {
    container.innerHTML += `<div class="tile"></div>`;
}


// make tile change color when hover over
const tileNodeList = document.querySelectorAll(".tile")
const tileArray = Array.from(tileNodeList)


let i = 0;
while (i < 16) {
    tileArray[i].addEventListener("mouseover", (event) => {
        event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
    });
    i++
}

// this works - 2 below
//     button.addEventListener("click", function() {
//         const userEntry = prompt("Please enter the number of sides you would like in your grid.", "64");
//         console.log(userEntry);
//     })

// function (userEntry) {
//     let i = 0;
//     while (i < 16) {
//         tileArray[i].addEventListener("mouseover", (event) => {
//             event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
//         });
//         i++
//     }
// }

//================================================================================================
                    // function callbackOne(userEntry) {
                    //     for (let i = 0 ; i < userEntry ; i++) {
                    //         container.innerHTML += `<div class="tile"></div>`;
                    //     }
                    // }

                    // function callbackTwo(tileArray) {
                    //     for (const tile of tileArray) {
                    //         tile.addEventListener("mouseover", (event) => {
                    //         event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
                    //     })};
                    // }


                    // button.addEventListener("click", function(callbackOne, callbackTwo) {
                    //     const userEntry = prompt("Please enter the number of sides you would like in your grid.", "64");
                    //     console.log(userEntry);
                    //     callbackOne(userEntry);
                    //     callbackTwo(tileArray)
                    // })
//================================================================================================



/* Temporarily Retired
    let i = 0;
    while (i < userEntry) {
        tileArray[i].addEventListener("mouseover", (event) => {
            event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
        });
        i++
    }
*/


/*
button.addEventListener("click", (event) => {
    const input = prompt("Please enter the number of sides you would like in your grid.", "64")
})

button.addEventListener("click", callback)

function callback(input) {
    const input = prompt("Please enter the number of sides you would like in your grid.", "64")   
}
*/




// REFERENCE DO NOT DELETE
/* var button = document.createElement('button');
button.innerHTML="START";
button.addEventListener('click',function(){
  var val1=parseInt(prompt("First Val"));
  var op=prompt("Operator");
  var val2=parseInt(prompt("Second Val"));
  console.log(eval(val1+op+val2));
});
document.body.appendChild(button); */
