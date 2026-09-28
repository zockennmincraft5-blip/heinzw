"use strict";

let el_1 = document.querySelector("#navigation > ul >li:nth-of-type(1) > a")
let el_1_paarent = el_1.parentElement 
let el_2 = document.querySelector("#navigation > ul >li:nth-of-type(2) > a")
let el_2_paarent = el_2.parentElement

el_1.addEventListener("click", element => {
    element.preventDefault()
    console.log("el_1 hat es mitbekommen")
})
el_1_paarent.addEventListener("click", element => {
    console.log("el_1_paarent hat es mitbekommen")
})
el_2.addEventListener("click", element => {
    element.stopPropagation()
    console.log("el_2 hat es mitbekommen")
})
el_2_paarent.addEventListener("click", element => {
    console.log("el_2_paarent hat es mitbekommen")
})