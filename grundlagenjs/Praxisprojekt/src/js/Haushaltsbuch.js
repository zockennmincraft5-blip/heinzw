import  Eintrag  from "./classes/Eintrag.js"
import  Eingabeformular from "./classes/Eingabeformular.js"
import  Navigationsleiste from "./classes/Navigationsleiste.js"
import  Monatslistensammlung from "./classes/Monatslistensammlung.js"
import  Gesammtbillanz from "./classes/Gesammtbillanz.js"
export default class Haushaltsbuch {
    constructor(){
        this._eintraege = []
        this._nav = new Navigationsleiste()
        this._eingabeformular = new Eingabeformular()
        this._monatslistensammlung = new Monatslistensammlung()
        this._gesammt_billanz = new Gesammtbillanz()
        this._laden()
    }

    eintraeg_entfernen(timstemp){
        let start_index
        for(let i = 0; i<this._eintraege.length; i++){
            if(this._eintraege[i].timstemp() === parseInt(timstemp)){
                start_index = i
                console.log("index gefunden: " + this._eintraege[i].timstemp())
                break
        }}
        this._eintraege.splice(start_index, 1)
        this._monatslistensammlung.aktualesieren(this._eintraege)
        this._gesammt_billanz.berechnen(this._eintraege)
        this._speichern()
    }
    
    eintrag_hinzufuegen(formulardaten){
        let neuer_eintrag = new Eintrag(formulardaten.titel, formulardaten.betrag, formulardaten.typ, formulardaten.datum)
        this._eintraege.push(neuer_eintrag)
        this._gesammt_billanz.berechnen(this._eintraege)
        this._monatslistensammlung.aktualesieren(this._eintraege)
        this._speichern()
    }

    _speichern(){
        localStorage.setItem("eintraege", JSON.stringify(this._eintraege))
    }

    _laden(){
        let eintraege = localStorage.getItem("eintraege")
        if(eintraege !== null){
            eintraege = JSON.parse(eintraege)
        }
        eintraege.forEach(eintrag => {
            this.eintrag_hinzufuegen({
                titel: eintrag._titel,
                betrag: eintrag._betrag,
                typ: eintrag._typ,
                datum: new Date(eintrag._datum)
            }
            )
        })
    }

    start(){
        this._nav.anzeigen()
        this._eingabeformular.anzeigen()
        this._monatslistensammlung.anzeigen()
        this._gesammt_billanz.anzeigen()
    }
}