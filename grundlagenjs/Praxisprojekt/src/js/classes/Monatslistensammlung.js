"use strict"

class Monatslistensammlung {
    constructor(){
        this._monastlisten = []
        this._hmtl = this._hmtl_generieren()
    }

    _eintrag_hinzufuegen(eintrag){
        let eintagsmonat = eintrag.datum().toLocaleString("de-DE",{month: "numeric"})
        let eintragsjahr = eintrag.datum().toLocaleString("de-DE",{year: "numeric"})
        let monatsliste_vorhanden = false
        this._monastlisten.forEach (monatslisten=> {
            if(eintagsmonat === monatslisten.monat() && eintragsjahr === monatslisten.jahr()){
                monatslisten.monatsliste_hinzufuegen(eintrag)
                monatsliste_vorhanden = true
            } 
        })
        if(!monatsliste_vorhanden){
            this._monatsliste_hinzufuegen(eintagsmonat, eintragsjahr, eintrag)
        }
    }
    _monatsliste_hinzufuegen(monat, jahr, eintrag){
        let neue_monatsliste = new Monatsliste(jahr, monat)
        neue_monatsliste.monatsliste_hinzufuegen(eintrag)
        this._monastlisten.push(neue_monatsliste)
    }

     _monatslisten_sotieren(){
        this._monastlisten.sort((monatsliste_a, monatsliste_b)=>{
            if(monatsliste_a.jahr() > monatsliste_b.jahr()){
                return -1
            } else if(monatsliste_a.jahr() < monatsliste_b.jahr()){
                return 1
            } else {
                if(monatsliste_a.monat() > monatsliste_b.monat()){
                    return -1
                } else if (monatsliste_a.monat() < monatsliste_b.monat()){
                    return 1
                }
     }})
    }

    _hmtl_generieren(){
        let monatslisten = document.createElement("section")
        monatslisten.setAttribute("id", "monatslisten")
        this._monastlisten.forEach(monatsliste => {
            monatslisten.insertAdjacentElement("beforeend",monatsliste.html())
        })
        return monatslisten
    }
    aktualesieren(eintraege){
        this._monastlisten = []
        eintraege.forEach(eintrag => {
            this._eintrag_hinzufuegen(eintrag)
        });
        this._monatslisten_sotieren()
        this._hmtl = this._hmtl_generieren()
        this.anzeigen()
    }
    anzeigen(){
        let eingameformular_container = document.querySelector("#eingabeformular-container")
        let monatslistensammlungen = document.querySelector("#monatslisten")
        if (eingameformular_container !== null){
            if(monatslistensammlungen !== null){
                monatslistensammlungen.remove()
            }
            eingameformular_container.insertAdjacentElement("afterend",this._hmtl)
    }}
}