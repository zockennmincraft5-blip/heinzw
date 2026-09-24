"use strict"

let d = new Date()
console.log(d)

console.log(Date.now())

let e = new Date(2390233430823)
console.log(e)

let f = new Date("Sep 23 2003 19:43:50 GMT+0200 ")
console.log(f)

//syntax new Date(Jahr, monat [tag[, stunde[, minute[, sekunde[, millisekunde]]]]])

let g = new Date(2021, 5)
console.log(g)

g = new Date(2021, 5, 21, 15, 15,15,155)
console.log(g)