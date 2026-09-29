"use strict"

// const addiren = function(array){
//     let summe = 0
//     array.forEach(element => summe+=element)
//     return summe
// }
//console.log(addiren([20,9,34,2345,12234]))
const addiren = function(...sumanden){
    let summe = 0
    sumanden.forEach(element => summe+=element)
    return summe
}
console.log(addiren(20,9,34,2345,12234))

const personen_addieren =function (name_1, name_2, ...sumanden){
    let summe = 0
    sumanden.forEach(element => summe+=element)
    return`${name_1} und ${name_2} haben zusammen ${summe} punkte gesammelt`
}
console.log(personen_addieren("jan", "Mona", 56,89,13,67,98, 100, 69, 42))