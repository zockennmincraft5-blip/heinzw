"use strict"
// let funk_1 = function(){
//     console.log("ich bin funktion 1")
// }

let funk_2 = function(funk){
    funk()
    console.log("ich bin funktion 2")
}

// funk_2(funk_1)
funk_2(function(){
    console.log("ich bin funktion 1")
})