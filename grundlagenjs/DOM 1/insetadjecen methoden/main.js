"use strict";

let li = document.createElement("li")
li.setAttribute("id","mein-listemelement")

let anker = document.createElement("a")
anker.setAttribute("id","mein-ankerelement")
anker.setAttribute("href", "#")
let text = document.createTextNode("Element")

anker.appendChild(text)
li.appendChild(anker)

let liste = document.querySelector("#navigation > ul")
//liste.appendChild(li)
//liste.insertAdjacentElement("beforebegin", li)
//liste.insertAdjacentElement("afterbegin", li)
//liste.insertAdjacentElement("beforeend", li)
//liste.insertAdjacentElement("afterend", li)
let dom_string = "<li id =\" mein-lisdtenelment\"><a id =\" mein-ankerelment\"href=\"#\">Element</a></li>"
liste.insertAdjacentHTML("afterbegin", dom_string) // das selbe wie oben alle 4 punkte

let text_2 ="lorem ipsum"
liste.insertAdjacentText("beforebegin", text_2)// das selbe wie oben alle 4 punkte