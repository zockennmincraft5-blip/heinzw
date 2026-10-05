/**
 * Das module "eintrag" verarbeitet alle einträge, die im liquiPlanner erstellt werden.
 * @module classes/Eintrag
 */
import liquiPlanner from "../liquiPlanner.js" 

/**
 * Diese Klasse Eintrag stellt alle methoden, 
 * für neue Einträge zur Verfügung.
 */
export default class Eintrag {
    /**
     * Konstruktor der Klasse Eintrag.
     * Initialisiert die Eigenschaften des Eintrags.
     * @param {string} titel - Der Titel des Eintrags.
     * @param {number} betrag - Der Betrag des Eintrags in Cent.
     * @param {string} typ - Der Typ des Eintrags (Einnahme oder Ausgabe).
     * @param {Date} datum - Das Datum des Eintrags.
     */
    constructor(titel, betrag, typ, datum){
        this._titel = titel
        this._betrag = betrag
        this._typ = typ
        this._datum = datum
        this._timestamp = Date.now()
        this._html = this._html_eintrag_generien()
    }

    /**
     * Diese Methode generiert das HTML für den Eintrag.
     * @returns {Element} listenpunkt - Das HTML-Element des Eintrags.
     */
    _html_eintrag_generien(){
        let listenpunkt  = document.createElement("li")
        this._typ=="einnahme"? listenpunkt.setAttribute("class", "einnahme") : listenpunkt.setAttribute("class", "ausgabe")

        listenpunkt.setAttribute("data-timestamp", this._timestamp)
        
        let datum = document.createElement("span")
        datum.setAttribute("class", "datum")
        datum.textContent = this._datum.toLocaleString("de-DE", {
            year: "numeric",
            month:"2-digit",
            day: "2-digit",
        })
        listenpunkt.insertAdjacentElement("afterbegin", datum)

        let titel = document.createElement("span")
        titel.setAttribute("class", "titel")
        titel.textContent = this._titel
        datum.insertAdjacentElement("afterend", titel)

        let betrag = document.createElement("span")
        betrag.setAttribute("class", "betrag")
        betrag.textContent = `${(this._betrag/100).toFixed(2).replace(/\./,".")} €`
        titel.insertAdjacentElement("afterend", betrag)

        let button = document.createElement("button")
        button.setAttribute("class", "entfernen-button")
        betrag.insertAdjacentElement("afterend", button)

        let icon =document.createElement("i")
        icon.setAttribute("class", "fas fa-trash")
        button.insertAdjacentElement("afterbegin", icon)
        this._html_eintrag_entfernen_event_hinzufuegen(listenpunkt)
        return listenpunkt
    }
    
    /**
     * Diese Methode fügt dem Entfernen-Button des Eintrags ein Event hinzu, das beim Klicken ausgelöst wird.
     * @param {Element} listenpunkt - Das HTML-Element des Eintrags.
     */
 
    _html_eintrag_entfernen_event_hinzufuegen(listenpunkt){
        listenpunkt.querySelector(".entfernen-button").addEventListener("click", e => {
            let timestamp = e.target.parentElement.getAttribute("data-timestamp")
            liquiPlanner.eintraeg_entfernen(timestamp)
    
        })
    }
    /**
     * Diese Methode gibt das HTML-Element des Eintrags zurück.
     * @returns {Element} html - Das HTML-Element des Eintrags.
     */
    html(){
        return this._html
    }
    /**
     * Diese Methode gibt den Titel des Eintrags zurück.
     * @returns {string} titel - Der Titel des Eintrags.
     */
    titel(){
        return this._titel
    }
    /**
     * Diese Methode gibt den Betrag des Eintrags zurück.
     * @returns {number} betrag - Der Betrag des Eintrags in Cent.
     */
    betrag(){
        return this._betrag
    }
    /**
     * Diese Methode gibt den Typ des Eintrags zurück.
     * @returns {string} typ - Der Typ des Eintrags (Einnahme oder Ausgabe).
     */
    typ(){
        return this._typ
    }
    /**
     * Diese Methode gibt das Datum des Eintrags zurück.
     * @returns {Date} datum - Das Datum des Eintrags.
     */
    datum(){
        return this._datum
    }
    /**    
     * Diese Methode gibt den Timestamp des Eintrags zurück.
     * @returns {number} timestamp - Der Timestamp des Eintrags.
     */
   timestamp(){
        return this._timestamp
   }
}