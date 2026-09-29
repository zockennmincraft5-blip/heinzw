"use strict"

//für funktionen

let meine_zahlen = [44, 51, 36]

const addiren = function(a,b,c) {
    console.log(a+b+c)
}
//addiren(meine_zahlen[0], meine_zahlen[1], meine_zahlen[2])
addiren(...meine_zahlen)

// für arrys

let kleines_array = ["Apfel","Banane","kiwi"]
let groesses_array = [...kleines_array, "orange", "weintraube"]
let sehr_groesses_array = [...kleines_array, "Kartoffek", ...groesses_array, "möhre"]
console.log(groesses_array)
console.log(sehr_groesses_array)

//für objekte

let kleines_objekt = {
    name: "ein Objekt",
    groesse: 3,
    Object: true
}
let groesses_objet ={
    ...kleines_objekt,
    betreff: "spread Syntaax",
    datum: new Date()
}
console.log(groesses_objet)

//für instanzen von Objekten
let datums_werte = [2020, 5, 14]
let datum = new Date(...datums_werte)
console.log(datum)