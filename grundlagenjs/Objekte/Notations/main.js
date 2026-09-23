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

//=============Dot-Notaion============

//werte auslessen
let wert_1 = Konto_1.iban
let wert_2 = Konto_2.bic
let wert_3 = Konto_3.Inhaber.vorname

//Eigenschaten setzten
Konto_1.abhebelimet =1000

//werte setzten bzw. verändern
Konto_1.Kontostand -=300
//entfernen
delete Konto_1.abhebelimet

console.log(Konto_1)
console.log(wert_1)
console.log(Konto_1.abhebelimet)
console.log(Konto_2)
console.log(wert_2)
console.log(Konto_3)
console.log(wert_3)
console.log(`${Konto_1.Inhaber.vorname} ${Konto_1.Inhaber.nachname} hat ${Konto_1.Kontostand}€ auf seinem Konto`)

let auto_1 ={
    marke: "Hyundai",
    model: "i30",
    kraftstoffart: "Benzin",
    kilometerstand: 15650,
    ausstattung:{
        navigationssytem: true,
        klimaanlage: true,
        sitzheizung: true,
        tempomat: true,
        panoramderdach: false
    },
    zustand: "gebraucht",
    Preis: 15499
}
auto_1.ps = 101
auto_1.model = "i02"

console.log(`EIn ${auto_1.marke} ${auto_1.marke} hat ${auto_1.ps} PS.`)

//============= Breaket============


console.log("Breaket Notion")
let eigenschaft ="iban"

//vorteil man kann strings angeben um in die klammer variablen einsetzen
let wert_6 =Konto_1[eigenschaft]
console.log(wert_6)

//werte auslessen
let wert_4 = Konto_1["iban"]
console.log(wert_4)
let wert_5 = Konto_1["Inhaber"]["Geschlecht"]
console.log(wert_5)
//Eigenschaten setzten
Konto_2["abhebelimit"] =1000
console.log(Konto_2["abhebelimit"])

//werte setzten bzw. verändern
Konto_1["Kontostand"] -=500
console.log(Konto_1["Kontostand"])
//entfernen
delete Konto_2["abhebelimit"]


let neuer_wert ="ps"
auto_1[neuer_wert] = 102
auto_1["model"] = "i10"
console.log(`EIn ${auto_1["model"]} ${auto_1["marke"]} hat ${auto_1[neuer_wert]} PS.`)

