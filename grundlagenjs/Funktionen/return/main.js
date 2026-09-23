"use strict"

let a = 92
let b = 65

const log_it = function(paarameter_1 = 10, paarameter_2=10){
    return(paarameter_1* paarameter_2)

}

let ergebnis = log_it(a, b)
let ergebnis_2 = log_it(ergebnis, ergebnis)
console.log(ergebnis)
console.log(ergebnis_2)