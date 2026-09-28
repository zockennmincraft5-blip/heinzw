"use strict";

let jumbo = document.querySelector(".jumbotron")

jumbo.addEventListener("click",event=>{
    console.log(event)
    console.log(event.clientX)
    console.log(event.clientY)
    console.log(event.target)
})
jumbo.addEventListener("dblclick", event => {
    console.log("DBLCLICK: ")
    console.log(event)
})

jumbo.addEventListener("mousedown", event => {
    console.log("MOUSEDOWN: ")
    console.log(event)
})
jumbo.addEventListener("mouseup", event => {
    console.log("MOUSEUP: ")
    console.log(event)
})
jumbo.addEventListener("mouseover", event => {
    console.log("MOUSEOVERE: ")
    console.log(event)
})
jumbo.addEventListener("mouseout", event => {
    console.log("MOUSEOUT: ")
    console.log(event)
})