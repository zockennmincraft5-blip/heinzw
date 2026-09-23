"use strict"

let mein_array =[
    "Peter",
    "Mia",
    "Mark"
]

let mein_objekt ={
    name: "Max",
    vorname:"Mustermann",
    alter: 26
}

console.log(mein_array)
console.log(mein_objekt)

for (let eigenschaft in mein_array){
    console.log(eigenschaft)
}
for (let eigenschaft of mein_array){
    console.log(eigenschaft)
    
}
for (let eigenschaft in mein_objekt){
    console.log(eigenschaft)
    //console.log(mein_objekt[eigenschaft])
}