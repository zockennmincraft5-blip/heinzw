"use strict"

console.log(Math)

//Kreis flächem mit raidus berechnen
// a = pi  *r^2
let a = Math.PI*Math.pow(12,2)
console.log(a)
console.log(Math.round(a))
console.log(Math.floor(a))
console.log(Math.ceil(a))

let a_gerundet = a.toFixed(2)
console.log(a_gerundet)

let a_int = parseInt(a_gerundet)
console.log(a_int)
let a_float = parseFloat(a_gerundet)
console.log(a_float)