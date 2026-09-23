"use strict"

// GLobal variable: für alle code blöcke deffeniert
// Lokal variable:  nur in den code blöcke funktional auser es in diesem drinn

let var_1 = "var 1"
const miene_funktion = function(){
    let var_2 = "var 2"

    if(true){
        let var_3 = "var 3"
        console.log(var_1)
        console.log(var_2)
        console.log(var_3)
    }

    console.log(var_1)
    console.log(var_2)
    return var_2
}
let var_2 = miene_funktion()

console.log(var_1)
console.log(var_2)
console.log(var_3)