"use strict"

let konto1 = new Konto("DE1234567890", "Max Mustermann", 1000)
console.log(konto1)

//Json.stringify() wandelt ein JavaScript-Objekt in einen JSON-String um
let k_als_json = JSON.stringify(konto1)
console.log(k_als_json)
//Json.parse() wandelt einen JSON-String in ein JavaScript-Objekt um
let k_als_objekt = JSON.parse(k_als_json)
console.log(k_als_objekt)

let k_neues_konto = new Konto(k_als_objekt._iban, k_als_objekt._inhaber, k_als_objekt._saldo)
console.log(k_neues_konto)