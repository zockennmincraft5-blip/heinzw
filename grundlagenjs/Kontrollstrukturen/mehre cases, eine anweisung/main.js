"use strict"

let essen = "Pizza"
switch (essen) {
    case "Nudeln":
    case "Pizza":
    case "Steak":
        console.log("Das mag ich!")
        break
    case "Fisch":    
    case "Humer":
    case "Kaviar":
        console.log("Das mag ich nicht!")
        break
    default:
        console.log(`ich kenne "${essen}" nicht! was ist das?`)
        break
}