"use strict"

let Konto_1 = {
    iban:  "DE38234567",
    bic: "WASERZGS",
    Inhaber: {
        vorname: "Max",
        nachname: "Mustermann",
        Geschlecht: "Mänlich",
        Alter: 24
    },
    Kontostand: 3500,
    aktiv: true,
    einzahlen(einzahlen){
    this.Kontostand += einzahlen
    console.log(`${this.Inhaber.vorname} ${this.Inhaber.nachname} hat ${this.Kontostand}€ auf dem konto`)
    
    },
    auszahlen(einzahlen){
    this.Kontostand -= einzahlen
    console.log(`${this.Inhaber.vorname} ${this.Inhaber.nachname} hat ${this.Kontostand}€ auf dem konto`)
    }
}
Konto_1.einzahlen(500)
//challange
let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18,
    person_verarbeiten_v2(){ 
        return{
            name: `${this.vorname} ${this.nachname}`,
            zusammenfassung: `${this.vorname} ${this.nachname} (${this.alter})`,
            begruessung: `Hallo ${this.vorname} ${this.nachname}!`
        }
    }

}
console.log(person.person_verarbeiten_v2())
