"use strict"
let vorname = "Maxim"
let zweitname = "Alexander"
let alter = 17

let name = vorname + " " + zweitname
let begruessung = `Hallo ${name}`
let zussamenfassung= `${vorname} ${zweitname} (${alter} Jahre)`
let mehrzeiliger_template_string = `Hallo ${name}!
Du bist ${alter} Jahre alt
wie geht es dir`

let einzeiliger_template_string = `Hallo ${name}! `+
`Du bist ${alter} Jahre alt `+
`wie geht es dir ?`

console.log(name)
console.log(begruessung)
console.log(zussamenfassung)
console.log(mehrzeiliger_template_string)
console.log(einzeiliger_template_string)