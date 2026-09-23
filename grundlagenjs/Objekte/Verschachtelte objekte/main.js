"use strict"

// let iban = "DE38234567"
// let bic = "WASERZGS"
// let Kontostand = 3500
// let aktiv = true

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
// let auto ={
//     marke: "",
//     model: "",
//     kraftstoffart: "",
//     kilometerstand: 0,
//     ausstattung:{
//         navigationssytem: false,
//         klimaanlage: false,
//         sitzheizung: false,
//         tempomat: false,
//         panoramderdach: false
//     },
//     zustand: "",
//     Preis: 0
// }

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
console.log(Konto_1)
console.log(Konto_2)
console.log(Konto_3)
console.log(auto_1)