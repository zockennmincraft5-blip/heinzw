"use strict"

console.log("---------------Local Storage--------------------")
// Local Storage items setzen
localStorage.setItem("name", "Max Mustermann")
localStorage.setItem("alter", "30")
// Local Storage items auslesen
console.log(localStorage.getItem("alter"))
// Local Storage items löschen
localStorage.removeItem("alter")
console.log(localStorage)
// Local Storage alle items löschen
// localStorage.clear()
console.log(localStorage)

console.log("---------------Session Storage--------------------")
// Session Storage items setzen
sessionStorage.setItem("name", "Max Mustermann")
sessionStorage.setItem("alter", "30")
// Session Storage items auslesen
console.log(sessionStorage.getItem("alter"))
// Session Storage items löschen
sessionStorage.removeItem("alter")
console.log(sessionStorage)
// Session Storage alle items löschen
// sessionStorage.clear()
console.log(sessionStorage)