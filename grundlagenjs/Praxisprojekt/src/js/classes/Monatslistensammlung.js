/**
 * Dass module "monatsliste" ist für die einzellne monatsliste zuständig
 * @module classes/Monatsliste
 */
import Monatsliste  from "../classes/Monatsliste.js"
/**
 * Die klasse Monatslistensammlung ist für die verwaltund der monatslisten zuständig
 */
export default class Monatslistensammlung {
        /**
     * Konstruktor der Klasse Monatslistensammlung.
     * ist für die monatslisten un denn html part zuständig
     * @property {array} _monastlisten -  ist das array deru nterlisten
     * @property {Element} _html - Das HTML-Element des Eingabeformulars.
     */
    constructor(){
        this._monastlisten = []
        this._hmtl = this._hmtl_generieren()
    }

    /**
     * Das module ist zum überprüfen der monatslisten zuständig und fürs sotieren
     * @param {object} eintrag - ist  der eintraeg der hinzugefügt werden muss 
     */
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

    /**
     * Das module ist für generien einer monatsliste zuständig
     * @param {number} monat - monat des eintrages / id fürs sotieren der hauptlisten 
     * @param {number} jahr - jahr des eintrages / id fürs sotieren der hauptlisten
     * @param {object} eintrag - ist  der eintraeg der hinzugefügt werden muss
     */
    _monatsliste_hinzufuegen(monat, jahr, eintrag){
        let neue_monatsliste = new Monatsliste(jahr, monat)
        neue_monatsliste.monatsliste_hinzufuegen(eintrag)
        this._monastlisten.push(neue_monatsliste)
    }

    /**
     * Das module sotiert die monatslisten anhand des monats und jahres
     */
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

    /**
     * Das module Generiet das html der monatslisten elemente
     * @returns {Array} - return das monatslisten html
     */
    _hmtl_generieren(){
        let monatslisten = document.createElement("section")
        monatslisten.setAttribute("id", "monatslisten")
        this._monastlisten.forEach(monatsliste => {
            monatslisten.insertAdjacentElement("beforeend",monatsliste.html())
        })
        return monatslisten
    }
    /**
     * Das module aktualsiert die monatslisten bei einem neuen eintrag
     * @param {object} eintraege - ist  der eintraeg der hinzugefügt werden muss
     */
    aktualesieren(eintraege){
        this._monastlisten = []
        eintraege.forEach(eintrag => {
            this._eintrag_hinzufuegen(eintrag)
        });
        this._monatslisten_sotieren()
        this._hmtl = this._hmtl_generieren()
        this.anzeigen()
    }
    /**
     * Das module sorgt dafür dass, die anzeige der elemente
     */
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