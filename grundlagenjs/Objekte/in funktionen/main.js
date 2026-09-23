"use strict"
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

let Konto_2 = {
    Inhaber: {
        vorname: "Wiebke",
        nachname: "Mustermann",
        Geschlecht: "weiblich",
        Alter: 23
    },
    iban:  "DE38334556",
    bic: "WASERZGS",
    Kontostand: 5500,
    aktiv: true
}
let Konto_3 = {
    Inhaber: {
        vorname: "Massel",
        nachname: "Mustermann",
        Geschlecht: "Mänlich",
        Alter: 18
    },
    iban:  "DE38245757",
    bic: "WASERZGS",
    Kontostand: 500,
    aktiv: false
}

const kontostand_auslesn= function(konto){
    console.log(`${konto.Inhaber.vorname} ${konto.Inhaber.nachname} hat ${konto.Kontostand}€ auf dem konto`)
}
kontostand_auslesn(Konto_1)
kontostand_auslesn(Konto_2)
kontostand_auslesn(Konto_3)