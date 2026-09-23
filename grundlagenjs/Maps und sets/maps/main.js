"use strict"

let meine_map = new Map()

meine_map.set("test","wert zur eigentschaft test")
meine_map.set(13,"wert zur eigentschaft 13")
meine_map.set([],"wert zur eigentschaft array")
meine_map.set({},"wert zur eigentschaft objekt")
meine_map.set(function(){},"wert zur eigentschaft Funktion")


console.log(meine_map.get("test"))
console.log(meine_map.get(13))
console.log(meine_map.get([]))
console.log(meine_map.get({}))
console.log(meine_map.get(function(){}))
meine_map.delete("test")
console.log(meine_map.has(13))

console.log(meine_map)

console.log(meine_map.size)
meine_map.clear()
console.log(meine_map)