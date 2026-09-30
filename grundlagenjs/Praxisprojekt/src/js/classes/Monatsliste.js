"use strict"

class Monatsliste {
    constructor(jahr, monat){
        this._jahr = jahr
        this._monat = monat
        this._eintraege  = []
        this._billanz = 0
        this._hmtl = this._hmtl_generieren()
    }
    monat(){
        return this._monat
    }
    jahr(){
        return this._jahr
    }

    html(){
        return this._hmtl
    }

    _hmtl_generieren(){
        let monatsliste = document.createElement("article")
        monatsliste.setAttribute("class", "monatsliste")
        let listen_ueberschrift = document.createElement("h2")
        
        let span_monat_jahr = document.createElement("span")
        span_monat_jahr.setAttribute("class", "monat-jahr")
        span_monat_jahr.textContent = (`${new Date(this._jahr, this._monat - 1).toLocaleString("de-DE",{
            month: "long",
            year: "numeric"
        })}`)
        listen_ueberschrift.insertAdjacentElement("afterbegin", span_monat_jahr)
    
        let span_betrag = document.createElement("span")
        span_betrag.setAttribute("class", `monatsbilanz ${this._billanz >= 0 ?"positiv": "negativ"}`)
        listen_ueberschrift.insertAdjacentElement("beforeend", span_betrag)
        monatsliste.insertAdjacentElement("afterbegin", listen_ueberschrift)
        
        let eintragsliste = document.createElement("ul")
        this._eintraege.forEach(eintrag => eintragsliste.insertAdjacentElement("beforeend", eintrag.html()))
        document.querySelector(".monatsliste").insertAdjacentElement("beforeend", eintragsliste)
        return monatsliste
    }

    // _eintraeg_sotieren(){
    //     this._eintraege.sort((eintrag_a, eintrag_b)=>{
    //         return eintrag_a.datum() > eintrag_b.datum() ? -1 :eintrag_a.datum()  < eintrag_b.datum()? 1 : 0 
    // })}

    _monatsliste_hinzufuegen(eintrag){
        this._eintraege.push(eintrag)
    }
}