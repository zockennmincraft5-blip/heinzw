"use strict";

"use strict";

let div = document.createElement("div")
div.setAttribute("id", "Meine_id")
div.setAttribute("class", "Meine_klasse")
console.log(div)

let text_node = document.createTextNode("lorem ipsum")
console.log(text_node)

div.appendChild(text_node)

console.log(div)

let jumbo = document.querySelector(".jumbotron>section")
jumbo.appendChild(div)

let li = document.querySelector("#navigation>ul>li")
console.log(li)

let ul = document.querySelector("#navigation>ul")
ul.appendChild(li)