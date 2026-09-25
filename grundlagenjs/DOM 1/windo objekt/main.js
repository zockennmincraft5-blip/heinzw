"use strict";

console.log(window)

//eigenschaften
console.log(innerWidth)
console.log(innerHeight)
console.log(outerWidth)
console.log(outerHeight)
console.log(scrollX)
console.log(scrollY)
//für später
console.log(location)
console.log(localStorage)
console.log(sessionStorage)

//methoden
//für nutzer aktion

// alert("ACHTUNG!")
// let confimt = confirm("bst du sicher?")
// let antwort = prompt("Hi gib dein namen an")
// console.log(antwort)
// console.log(confimt)
// print()
//close()
//open("https://google.de")
let nav = document.querySelector("#navigation")
let nav_styles = getComputedStyle(nav)
console.log(nav_styles)