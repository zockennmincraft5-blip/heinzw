"use strict";

let  ul = document.querySelector("#navigation>ul")
console.log(ul)

//wie selkterie ich kindelemnte
let childe_nodes = ul.childNodes //alle elemente inkl. texte und kommentarknotten
let children = ul.children //alle elemnte   exkl. texte und kommentarknotten
let first_child = ul.firstChild //das erste elemente inkl. texte und kommentarknotten
let last_child = ul.lastChild //das letzte elemente inkl. texte und kommentarknotten
let first_element_child = ul.firstElementChild //das erste elemente exkl. texte und kommentarknotten
let last_element_child = ul.lastElementChild //das letzte elemente exkl. texte und kommentarknotten

//wie selkterie ich Geschwisster elemtnte
let next_sibling = ul.nextSibling// nextes geschwissterelementelemente inkl. texte und kommentarknotten
let previous_sibbling = ul.previousSibling //vorangehendes geschwissterelementelemente inkl. texte und kommentarknotten
let next_element_sibling = ul.firstElementChild.nextElementSibling// nextes geschwissterelementelemente inkl. texte und kommentarknotten
let previous_element_sibbling = ul.lastElementChild.previousElementSibling //vorangehendes geschwissterelementelemente inkl. texte und kommentarknotten

//elternelement
let paarent_element =ul.parentElement

//allgemeines navegieren
let anker = ul.querySelectorAll("li>a")

//ausgaben
console.log(childe_nodes)
console.log(children)
console.log(first_child)
console.log(last_child)
console.log(first_element_child)
console.log(last_element_child)
console.log(next_sibling)
console.log(previous_sibbling)
console.log(next_element_sibling)
console.log(previous_element_sibbling)
console.log(paarent_element)
console.log(anker)