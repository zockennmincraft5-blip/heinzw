"use strict"
let minimum =40
let maximum = 60

console.log(Math.random())
console.log(Math.random()*(12))
console.log(Math.floor(Math.random()*(12+1)))
const zufallszahl1 = function(min, max){
    console.log(Math.floor(Math.random()*(max-min+1)+min))
}
console.log(zufallszahl1(minimum, maximum))