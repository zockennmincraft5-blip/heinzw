"use strict";

let div = document.createElement("div")
console.log(div)

let attr = document.createAttribute("id")
attr.value ="meine:id"

div.setAttributeNode(attr)
console.log(attr)
console.log(div)

div.setAttribute("class", "Meine_klasse")
console.log(div)

let text_node = document.createTextNode("lorem ipsum")
console.log(text_node)
console.log(div)