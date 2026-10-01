"use strict"

class Haushaltsbuch {
    constructor(){
        this._nav = new Navigationsleiste()
        this._eingabeformular = new Eingabeformular()
        this._eintraege = []
        this._monatslistensammlung = new Monatslistensammlung()
        this._gesammt_billanz = new Gesammtbillanz()
    }

    eintraeg_entfernen(timstemp){
        let start_index
        for(let i = 0; i<this._eintraege.length; i++){
            if(this._eintraege[i].timstemp() == timstemp){
                start_index = i
                break
        }}
        this._eintraege.splice(start_index, 1)
        this._monatslistensammlung.aktualesieren(this._eintraege)
        this._gesammt_billanz.berechnen(this._eintraege)
        
    }
    
    eintrag_hinzufuegen(formulardaten){
        let neuer_eintrag = new Eintrag(formulardaten.titel, formulardaten.betrag, formulardaten.typ, formulardaten.datum)
        this._eintraege.push(neuer_eintrag);
        this._gesammt_billanz.berechnen(this._eintraege)
        this._monatslistensammlung.aktualesieren(this._eintraege)
    }
    start(){
        this._nav.anzeigen()
        this._eingabeformular.anzeigen()
        this._monatslistensammlung.anzeigen()
        this._gesammt_billanz.anzeigen()
    }
}