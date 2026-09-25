"use strict";

let jumbo = document.querySelector(".jumbotron")

let class_name = jumbo.className

console.log(class_name)

jumbo.className = "neue-klasse"
jumbo.className += " lorem"

jumbo.className = jumbo.className.replace("neue", "alte")
jumbo.className = jumbo.className.replace(" lorem", "")

document.querySelector("#navigation > ul > li:first-of-type > a").className =""
document.querySelector("#navigation > ul > li:nth-of-type(3) > a").className ="active"