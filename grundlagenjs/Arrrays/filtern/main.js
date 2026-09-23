"use strict"

let zahlen = [12, 23, 34,77,2,32,9,55,43,11,1]

let gefilterte_zahl = zahlen.filter(function(zahl){
    if (zahl<=20){
        return true
    } else{
        return false
    }
})

console.log(zahlen)
console.log(gefilterte_zahl)