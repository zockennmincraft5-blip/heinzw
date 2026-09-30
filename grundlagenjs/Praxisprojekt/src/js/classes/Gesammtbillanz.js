"use strict"

class Gesammtbillanz {
    constructor(){
        this._einahmen = 0
        this._ausgaben = 0
        this._billanz = 0
        this.html = this._html_gemerien()
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
    }})
    this._billanz = this._einahmen - this._ausgaben
    this.html = this._html_gemerien()
    this.anzeigen()    
}

    _html_gemerien(){
        let gesammtbillanz = document.createElement("aside")
        gesammtbillanz.setAttribute("id","gesamtbilanz")

        let uebschrift = document.createElement("h1")
        uebschrift.textContent ="Gesamtbilanz"
        gesammtbillanz.insertAdjacentElement("afterbegin", uebschrift)
        
        let einahemn_zeile =document.createElement("div")
        einahemn_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen")
        let einahemn_titel =document.createElement("span")
        einahemn_titel.textContent = "Einahmen:"
        einahemn_zeile.insertAdjacentElement("afterbegin", einahemn_titel)
        let einahemn_betrag =document.createElement("span")
        einahemn_betrag.textContent = `${(this._einahmen/100).toFixed(2).replace(/\./,".")} €`
        einahemn_zeile.insertAdjacentElement("beforeend", einahemn_betrag)
        gesammtbillanz.insertAdjacentElement("beforeend", einahemn_zeile)

        let ausgaben_zeile =document.createElement("div")
        ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben")
        let ausgaben_titel =document.createElement("span")
        ausgaben_titel.textContent = "Ausgaben:"
        ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel)
        let ausgaben_betrag =document.createElement("span")
        ausgaben_betrag.textContent = `-${(this._ausgaben/100).toFixed(2).replace(/\./,".")} €`
        ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag)
        gesammtbillanz.insertAdjacentElement("beforeend", ausgaben_zeile)

        let billanz_zeile =document.createElement("div")
        billanz_zeile.setAttribute("class", "gesamtbilanz-zeile bilanz")
        let billanz_titel =document.createElement("span")
        billanz_titel.textContent = "Bilanz:"
        billanz_zeile.insertAdjacentElement("afterbegin", billanz_titel)
        let billanz_betrag =document.createElement("span")
        this._billanz>=0 ? billanz_betrag.setAttribute("class", "positiv"): billanz_betrag.setAttribute("class", "negativ")
        
        billanz_betrag.textContent = ` ${(this._billanz/100).toFixed(2).replace(/\./,".")} €`
        billanz_zeile.insertAdjacentElement("beforeend", billanz_betrag)
        gesammtbillanz.insertAdjacentElement("beforeend", billanz_zeile)
        return gesammtbillanz
    }
    
    anzeigen(){
        let gesammtbillanz = document.querySelectorAll("gesamtbilanz")
        if (gesammtbillanz!== null){
        document.querySelector("body").insertAdjacentElement("beforeend", this._html_gemerien())
    }}
}