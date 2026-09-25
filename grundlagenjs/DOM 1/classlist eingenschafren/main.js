"use strict";

let jumbo = document.querySelector(".jumbotron")
console.log(jumbo)

let class_List = jumbo.classList
jumbo.classList.add("meine-Klasse")
jumbo.classList.remove("jumbotron")
jumbo.classList.replace("meine-Klasse", "deine-Klasse")
console.log(jumbo.classList.contains("jumbotron"))
console.log(jumbo.classList.contains("deine-Klasse"))
jumbo.classList.toggle("auch-eine-Klasse")
console.log(class_List)
jumbo.classList.toggle("auch-eine-Klasse")
console.log(class_List)