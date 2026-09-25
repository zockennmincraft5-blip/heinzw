"use strict";

let jumbo = document.querySelector(".jumbotron")
let jumbo_styles = getComputedStyle(jumbo)
console.log(jumbo_styles)

console.log(jumbo_styles.color)
console.log(jumbo_styles.width)
console.log(jumbo_styles.backgroundColor)
console.log(jumbo_styles.fontFamily)
console.log(jumbo_styles.animation)
