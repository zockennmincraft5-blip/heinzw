"use strict"
let person = {
    vorname: "Max",
    nachname: "Mustermann",
    alter: 18
}

const person_verarbeiten_v1 = function(p){
    let name = `${p.vorname} ${p.nachname}`
    let zusammenfassung =`${p.vorname} ${p.nachname} (${p.alter})`
    let begruessung = `Hallo ${p.vorname} ${p.nachname}!`
    return rueckgabe_objekt ={
        n: name,
        z: zusammenfassung,
        b: begruessung
    }
    
}
console.log(person_verarbeiten_v1(person))
const person_verarbeiten_v2 = function(p){ 
    return rueckgabe_objekt ={
        name: `${p.vorname} ${p.nachname}`,
        zusammenfassung: `${p.vorname} ${p.nachname} (${p.alter})`,
        begruessung: `Hallo ${p.vorname} ${p.nachname}!`
    }
}

console.log(person_verarbeiten_v2(person))

const person_verarbeiten_v3 = function(p){
    let name = `${p.vorname} ${p.nachname}`
    let zusammenfassung =`${p.vorname} ${p.nachname} (${p.alter})`
    let begruessung = `Hallo ${p.vorname} ${p.nachname}!`
    return name, zusammenfassung,begruessung
}
let name, zusammenfassung, begruessung = person_verarbeiten_v3(person)
console.log(name)
console.log(vorname)
console.log(begruessung)