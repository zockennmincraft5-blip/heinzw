"use strict"

class Haushaltsbuch {
    constructor(){
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
        this._gesammt_billanz.berechnen(this._eintraege)
        this._eintraeg_sotieren()
        this._eintraege_anzeigen()
    }
    
    eintrag_hinzufuegen(formulardaten){
        let neuer_eintrag = new Eintrag(formulardaten.titel, formulardaten.betrag, formulardaten.typ, formulardaten.datum)
        this._eintraege.push(neuer_eintrag);
        this._gesammt_billanz.berechnen(this._eintraege)
        this._monatslistensammlung.eintrag_hinzufuegen(neuer_eintrag)

}
    anzeigen(){
        this._monatslistensammlung.anzeigen()
        this._gesammt_billanz.anzeigen()
    }
}