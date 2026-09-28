"use strict";

document.addEventListener("keydown", event =>{
    // console.log(event)
    if (event.key ==="@")
        console.log("das @ zeichnen wurde gedrückt")
})

document.addEventListener("keyup", event =>{
    // console.log(event)
    if (event.key ==="p")
        console.log("das p zeichnen wurde gedrückt")
})
document.addEventListener("keypress", event =>{
    // console.log(event)
    if (event.key ===":")
        console.log("das : zeichnen wurde gedrückt")
})