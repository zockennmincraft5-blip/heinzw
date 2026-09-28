"use strict"
let person_1 ={
    vorname: "max",
    nachname: "mustermnann",
    alter: 24,
    meine_methode() {console.log(this)}
}
let person_2 ={
    vorname: "max",
    nachname: "mustermnann",
    alter: 24,
    meine_methode() {
        const meine_funktion =function() {console.log(this)}
        meine_funktion()
    }
}
let person_3 ={
    vorname: "max",
    nachname: "mustermnann",
    alter: 24,
    meine_methode() {
        const meine_funktion =() =>console.log(this)
        meine_funktion()
    }
}
person_1.meine_methode()
person_2.meine_methode()
person_3.meine_methode()