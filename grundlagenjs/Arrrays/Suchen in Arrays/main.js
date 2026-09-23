"use strict"
let waren =[

        "Äpfel",
        "Birnen",
        "Bananen",
        "Möhren",
        "Sellerie",
        "Kohl",
        "Möhren",
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"

]

console.log(waren)
console.log("inclued")
console.log(waren.includes("Graubrot"))
console.log(waren.includes("kohl", 3))
console.log("indexof")
console.log(waren.indexOf("Möhren"))
console.log(waren.indexOf("Möhren", 5))
console.log(waren.indexOf("Möhr"))
console.log("lastindexof")
console.log(waren.lastIndexOf("Möhren"))

console.log(waren.lastIndexOf("Möhren", 4))