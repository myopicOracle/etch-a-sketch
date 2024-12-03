// Create a 16 x 16 grid of div's using js only

const body = document.querySelector("body")
const container = document.getElementById("container")

const tileNodeList = document.querySelectorAll(".tile")
    const tileArray = Array.from(tileNodeList)

const button = document.createElement("button")
    button.textContent = "Change Grid Size"
    body.appendChild(button)


// 16x16default


for (let i = 1 ; i < 17 ; i++) {
    container.innerHTML += `<div class="tile" id="${i}"></div>`;
    const tileSelect = document.getElementById(`${i}`)
    tileSelect.addEventListener("mouseover", (event) => {
        event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
    });
}
    
// user input


function callbackOne(num) {
    for (let i = 1 ; i < num ; i++) {
        container.innerHTML += `<div class="tile" id="${i}"></div>`;
        const tileSelect = document.getElementById(`${i}`)
        tileSelect.addEventListener("mouseover", (event) => {
            event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
        })
    }   
}

button.addEventListener("click", () => {
    const userEntry = prompt("Please enter the number of sides you would like in your grid.", "64");
    callbackOne(userEntry);
});



// for(const tile of tileArray) {
//     tile.addEventListener("mouseover", (event) => {
//         event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
//     });
// };

// const userEntry = prompt("Please enter the number of sides you would like in your grid.", "64");

// const tracking = tileArray.map(tile => {
//     tile.addEventListener("mouseover", (event) => {
//         event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
//     });
// });


// button.addEventListener("click", callbackOne, tracking)


// // function callbackTwo() {
//     let i = 0;
//     while (i < userEntry) {
//         tileArray[i].addEventListener("mouseover", (event) => {
//             event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
//         });
//         i++
//     }
// // }



// button.addEventListener("click", () => {
//     const userEntry = prompt("Please enter the number of sides you would like in your grid.", "64");
//     console.log(userEntry);
//     callbackOne(userEntry);
//     callbackTwo(tileArray);
// });

// button.addEventListener("click", function(callbackOne, callbackTwo) {
//     const userEntry = prompt("Please enter the number of sides you would like in your grid.", "64");
//     console.log(userEntry);
//     callbackOne(userEntry);
//     callbackTwo(tileArray)
// });


    ``
/*    
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
*/
//=====



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


//temporary out
    // let i = 0;
    // while (i < 16) {
    //     tileArray[i].addEventListener("mouseover", (event) => {
    //         event.target.setAttribute("style", "background-color: blue; border: 6px solid gold;")
    //     });
    //     i++
    // }
    // end of color change 