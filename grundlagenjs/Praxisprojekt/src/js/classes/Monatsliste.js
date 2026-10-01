"use strict"

class Monatsliste {
    constructor(jahr, monat){
        this._jahr = jahr
        this._monat = monat
        this._eintraege  = []
        this._billanz = parseFloat(0)
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
        span_betrag.textContent = `${(this._billanz/100).toFixed(2).replace(".", ",")} €`
        monatsliste.insertAdjacentElement("afterbegin", listen_ueberschrift)
        
        let eintragsliste = document.createElement("ul")
        this._eintraege.forEach(eintrag => {
            eintragsliste.insertAdjacentElement("beforeend", eintrag.html()) 
        })
        monatsliste.insertAdjacentElement("beforeend", eintragsliste)
        return monatsliste

    }

    _eintraeg_sotieren(){
        this._eintraege.sort((eintrag_a, eintrag_b)=>{
            return eintrag_a.datum() > eintrag_b.datum() ? -1 :eintrag_a.datum()  < eintrag_b.datum()? 1 : eintrag_a.timstemp() > eintrag_b.timstemp() ? -1 : 1
        }
    )
}
    berechnen(eintraege){
        this._einahmen = 0
        this._ausgaben = 0
        this._billanz = 0        
        eintraege.forEach(eintrag =>{

            switch(eintrag.typ()){
                case "einnahme":
                    this._einahmen += eintrag.betrag() 
                    break
                default:
                    this._ausgaben += eintrag.betrag()
            }
        }
    )
    this._billanz = this._einahmen - this._ausgaben

}

    monatsliste_hinzufuegen(eintrag){
        this._billanz += eintrag.typ() === "einnahme" ? eintrag.betrag() : -eintrag.betrag()
        this._eintraege.push(eintrag)
        this._eintraeg_sotieren()
        
        this._hmtl = this._hmtl_generieren()
    }
}