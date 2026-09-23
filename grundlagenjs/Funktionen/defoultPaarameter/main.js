"use strict"
// let a = 92
// let b = 65

// const log_it = function(paarameter_1 = 10, paarameter_2=10){
//     console.log(paarameter_1)
//     console.log(paarameter_2)
//     console.log(paarameter_1* paarameter_2)

// }

// log_it(a)
// log_it(a, b)

let vor = "Maxim"
let nach = "Must"
let alter = 24

const bergeussung = function(vorname = "Max", nachname = "Mustermann",alter = "18") {
    console.log(`Hallo ${vorname} ${nachname}, du bist ${alter} Jahre alt`)
}

bergeussung(vor, nach, alter)
bergeussung(undefined, nach, alter)
bergeussung()