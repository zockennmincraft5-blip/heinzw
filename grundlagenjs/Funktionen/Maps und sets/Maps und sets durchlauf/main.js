"use strict"


let meine_map = new Map()

let mein_set = new Set()

meine_map.set("test","wert zur eigentschaft test")
meine_map.set(13,"wert zur eigentschaft 13")
meine_map.set([],"wert zur eigentschaft array")
meine_map.set({},"wert zur eigentschaft objekt")
meine_map.set(function(){},"wert zur eigentschaft Funktion")

console.log(meine_map)

mein_set.add("Test")
mein_set.add(13)
mein_set.add({})
mein_set.add([])
mein_set.add(function(){})

console.log(mein_set)

// Variante 1
console.log("Variante 1")
console.log("Meine map")
meine_map.forEach(function(wert, eigenschaft, map_objekt){
    console.log("Wert")
    console.log(wert)
    console.log("Eigenschaft")
    console.log(eigenschaft)
    console.log("Map objekt")
    console.log(map_objekt)
})
console.log("Mein set")
mein_set.forEach(function(wert, NULL,set_objekt){
    console.log("Wert")
    console.log(wert)  
    console.log("set objekt")
    console.log(set_objekt)
})
//Variante 2
console.log("Variante 2")
console.log("Meine map")
for (let paar of meine_map){
    console.log(paar)
}
//paar eigenschaft wert

for (let [eigenschaft, wert] of meine_map){
    console.log("eigenschaft")
    console.log(eigenschaft)
    console.log("wert")
    console.log(wert)
}


console.log("Mein set")
for (let wert of mein_set){
    console.log(wert)
}

//variante 3
console.log("Variante 3")
console.log("Meine map")
// console.log("Meine map- Entries")
// console.log(meine_map.entries())

// console.log("Meine map- Values")
// console.log(meine_map.values())

// console.log("Meine map- Keys")
// console.log(meine_map.keys())
console.log("Meine map- Entries")
for (let [eigenschaft, wert] of meine_map.entries()){
    console.log("eigenschaft")
    console.log(eigenschaft)
    console.log("wert")
    console.log(wert)
}

console.log("Meine map- Keys")

for (let eigenschaft of meine_map.keys()){
    console.log("eigenschaft")
    console.log(eigenschaft)
}
console.log("Meine map- Values")
console.log("wert")
for (let wert of meine_map.values()){
    
    console.log(wert)
}

console.log("Mein set")

console.log("Mein set- Values")
console.log("wert")
 for (let wert of mein_set.values()){
    console.log(wert)
}

