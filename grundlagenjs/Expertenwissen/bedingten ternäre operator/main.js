"use strict"
// Bedingung? ausdruck_1 : ausdruc_2
let meine_zahl = 10

if (meine_zahl> 10){
    console.log("Groeße als 10")
} else{
    console.log("Kleiner oder gleich 10")
}

console.log(meine_zahl > 10? "Groeße als 10" : "Kleiner oder gleich 10")
let geschlecht = 1
console.log(`Hallo ${geschlecht ? "frau" : "Herr"} Mustermann`)

let fuehreschein = true

// const fuehreschein_kontrolle = function(){
//     if(fuehreschein){
//         return "Darf Auto fahren"
//     } else{
//         return "Darf kein Auto fahren"
//     }
// }
const fuehreschein_kontrolle = function(){
    return fuehreschein ? "Darf Auto fahren" : "Darf kein Auto fahren"
}
console.log (fuehreschein_kontrolle())

let erdbeschleunigung = 8.5
let panik = false
erdbeschleunigung > 9.81 ? (panik = true, erdbeschleunigung = 9.81):(panik = false, erdbeschleunigung = 9.81)
console.log(erdbeschleunigung)
console.log(panik)

let farbe =  "rot"

console.log(farbe === "rot" ? "ich mag rot" : farbe === "blau" ? "Blau finde ich auch gut" : farbe === "grün" ? "grün mag ich nicht" : `zur ${farbe} habe ich keine meinung` )