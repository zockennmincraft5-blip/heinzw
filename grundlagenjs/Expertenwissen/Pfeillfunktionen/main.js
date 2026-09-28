"use strict"

//const multiplizeiren = function(a,b) {return a*b}
//const multiplizeiren = (a,b) => {return a*b}
// const multiplizeiren = (a,b) => a*b
// console.log(multiplizeiren(5, 10))

//const begruessung = function(name) {return `Hallo ${name}`}
// const begruessung = name => `Hallo ${name}`
// console.log(begruessung("Max"))

// const sin_des_lebens = function() {return 42}
// const sin_des_lebens = ()=> 42
// console.log(sin_des_lebens())

let einkaufsliste = [
    "brot",
    "Käse",
    "Tomaten",
    "Butter",
    "Eier",
    "Orangesaft"
]

einkaufsliste.forEach(function(e) {console.log(e)})
einkaufsliste.forEach(e => console.log(e))