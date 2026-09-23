"use strict"

// let zahlen = [1,20,2000,10000000,50]

// let neu_sotiert = zahlen.sort()
// console.log(zahlen)
// console.log(neu_sotiert)
let worte = [
    "Zahl",
    "Wahnsinn",
    "Mangel",
    "Abspann"
]
console.log(worte)

let worte_sotiert = worte.sort()

console.log(worte_sotiert)

let zahlen = [1,20,2000,10000000,50]
console.log(zahlen)
let neu_sotiert = zahlen.sort(function(a, b){
    return a-b
})

console.log(neu_sotiert)
let neu_sotiert_umgekehrt = zahlen.sort(function(a, b){
    return b-a
})

console.log(neu_sotiert_umgekehrt)