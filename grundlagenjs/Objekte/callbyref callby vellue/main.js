"use strict"

let meine_variable = "name"
let mein_onjekt ={
    zahl:500
}

const meine_funktion =function(v, o){
    v="vorname"
    o.zahl =2500;
}

meine_funktion(meine_variable, mein_onjekt)
console.log(meine_variable)
console.log(mein_onjekt)

// call by vallue wird nur bei strings numbers oder Boolean werdfen nur mit ein wert übergeben
// call by refrence gilt nur für komplexe Datentypen (objekte, Funktionen, Arrays)

let Konto_1 = {
    Inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        Geschlecht: "Mänlich",
        Alter: 24
    },
    iban:  "DE38234567",
    bic: "WASERZGS",
    Kontostand: 3500,
    aktiv: true
}
console.log(Konto_1)
const geld_einzahlen = function(ziel_konto ,einzahlen){
    ziel_konto.Kontostand += einzahlen
    console.log(`${ziel_konto.Inhaber.vorname} ${ziel_konto.Inhaber.nachname} hat ${ziel_konto.Kontostand}€ auf dem konto`)
}
const geld_auszahlen = function(ziel_konto ,einzahlen){
    ziel_konto.Kontostand -= einzahlen
    console.log(`${ziel_konto.Inhaber.vorname} ${ziel_konto.Inhaber.nachname} hat ${ziel_konto.Kontostand}€ auf dem konto`)
}

geld_einzahlen(Konto_1, 500)
geld_auszahlen(Konto_1, 1500)