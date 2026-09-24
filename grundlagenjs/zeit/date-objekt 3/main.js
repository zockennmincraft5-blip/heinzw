"use strict"

let d = new Date()
console.log(d)
//d.toLocaleString([Schema], [optionen])

console.log(d)

let de_DE = d.toLocaleString("de-DE")
console.log(de_DE)

let en_US = d.toLocaleString("en-US")
console.log(en_US)


let de_DE_optionen = d.toLocaleString("de-DE", {
    year: "numeric",
    month:"long",
    day: "2-digit",
    weekday: "long",
    hour:"numeric",
    minute: "2-digit",
    second: "2-digit"
})
console.log(de_DE_optionen)
let de_DE_datum = d.toLocaleDateString("de-DE", {
    hour:"numeric",
    minute: "2-digit",
    second: "2-digit"
})
console.log(de_DE_datum)
let de_DE_zeit = d.toLocaleTimeString("de-DE", {
    year: "numeric",
    month:"long",
    day: "2-digit",
    weekday: "long",
})
console.log(de_DE_zeit)