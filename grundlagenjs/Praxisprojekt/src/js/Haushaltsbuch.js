/** 
 * Das module "eintag" verwaltet die eintraege
 * @module classes/Eintrag 
 * Das modul "Eingabeformular" ist für die Erstellung und Verwaltung des Eingabeformulars für neue Einträge zuständig.
 * @module classes/Eingabeformular
 * Das module "Navigationsleiste" verwaltet die navigationsleiste
 * @module classes/Navigationsleiste
 * Das Modul "Monatslistensammlung" verwaltet die monatslisten
 * @module classes/Monatslistensammlung
 * Das Modul "Gesammtbillanz" verwaltet die Gesammtbillanz
 * @module classes/Gesammtbillanz
 */
import  Eintrag  from "./classes/Eintrag.js"
import  Eingabeformular from "./classes/Eingabeformular.js"
import  Navigationsleiste from "./classes/Navigationsleiste.js"
import  Monatslistensammlung from "./classes/Monatslistensammlung.js"
import  Gesammtbillanz from "./classes/Gesammtbillanz.js"
export default class liquiPlanner {
    /**
     * Konstruktor der Klasse liquiPlanner.
     * Initialisiert dias setup und desing
     * @property {Array} _eintraege - umfasst alle eintraege
     * @property {Methode} _nav - generiert die Navigationsleiste
     * @property {Methode} _eingabeformular - generiert das Eingabeformular
     * @property {Methode} _monatslistensammlung - generiert die Monatslistensammlung
     * @property {Methode} _gesammt_billanz - generiert die Gesammtbillanz
     */
    constructor(){
        this._eintraege = []
        this._nav = new Navigationsleiste()
        this._eingabeformular = new Eingabeformular()
        this._monatslistensammlung = new Monatslistensammlung()
        this._gesammt_billanz = new Gesammtbillanz()
        this._laden()
    }
    /**
     * Entfern denn eintrage anhand des timestempes
     * @param {Date} timstemp 
     */
    eintraeg_entfernen(timestamp){
       let start_index
        for (let i = 0; i < this._eintraege.length; i++) {
            if (this._eintraege[i].timestamp() === parseInt(timestamp)) {
                start_index = i
                break
            }
        }
        this._eintraege.splice(start_index, 1)
        this._monatslistensammlung.aktualesieren(this._eintraege)
        this._gesammt_billanz.berechnen(this._eintraege)
        this._speichern()    
    }
    /**
     * Diese methode generiet ein eintrag
     * @param {Objekt} formulardaten 
     */
    eintrag_hinzufuegen(formulardaten){
        let neuer_eintrag = new Eintrag(formulardaten.titel, formulardaten.betrag, formulardaten.typ, formulardaten.datum)
        this._eintraege.push(neuer_eintrag)
        this._gesammt_billanz.berechnen(this._eintraege)
        this._monatslistensammlung.aktualesieren(this._eintraege)
        this._speichern()
    }
    /**
     * Diese methode speichert allee eintraege
     */
    _speichern(){
        localStorage.setItem("eintraege", JSON.stringify(this._eintraege))
    }
    /**
     * laed alle Eintraege aus denn locaL STORAGE
     */
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