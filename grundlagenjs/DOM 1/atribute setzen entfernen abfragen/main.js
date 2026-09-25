"use strict";

//atribute setzen
document.querySelector(".jumbotron").setAttribute("lang", "de")
//atribute entfernen
document.querySelector("head > meta:nth-of-type(3)").removeAttribute("content")
//atribute auslesen
console.log(document.querySelector("html").getAttribute("lang"))
//atribute Abfragen
console.log(document.querySelector("head > link").hasAttribute("rel"))