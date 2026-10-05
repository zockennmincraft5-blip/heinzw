/** 
 * Das modul "Eingabeformular" ist für die Erstellung und Verwaltung des Eingabeformulars für neue Einträge zuständig.
 * @module classes/Eingabeformular
 * das module "liquiPlanner" ist für die eintraege verwaltung zuständig
 * @module ../main.js
 */
import Fehlerbox from "./Fehlerbox.js"
import haushaltbuch from "../liquiPlanner.js"
/**
 * Diese Klasse Eingabeformular stellt alle methoden, 
 * für neue Einträge zur Verfügung.
 */
export default class Eingabeformular {
    /**
     * Konstruktor der Klasse Eingabeformular.
     * Initialisiert die HTML-Elemente des Eingabeformulars.
     * @property {Element} _html - Das HTML-Element des Eingabeformulars.
     */
    constructor(){
        this._html = this._html_generiren()
    }
    /**
     *  Diese Methode holt die Daten aus dem Formular und gibt sie als Objekt zurück.
     * @param {Event} submit_event - Das Event, das beim Absenden des Formulars ausgelöst wird.
     * @returns {Object} formulardaten - Ein Objekt, das die Daten des Formulars enthält.
     */
    _formulardaten_holen(submit_event){
        return {
            titel: submit_event.target.elements.titel.value.trim(),
            betrag: parseFloat(submit_event.target.elements.betrag.value)*100,
            typ: submit_event.target.elements.einnahme.checked === false ? "ausgabe" : "einnahme",
            datum: submit_event.target.elements.datum.valueAsDate
        }
    }

    /**
     *  Diese Methode überprüft die Formulardaten auf Gültigkeit.
     * @param {Object} formulardaten - Ein Objekt, das die Daten des Formulars enthält.
     * @returns {Array} fehler - Ein Array mit den Namen der fehlerhaften Felder.
     */
    _formulardaten_vearbeiten(formulardaten){
        let fehler =[]
        if (formulardaten.titel === ""){
            fehler.push("Titel")
        }
        if (formulardaten.datum === null){
            fehler.push("Datum")
        }
        if (isNaN(formulardaten.betrag)){
            fehler.push("Betrag")
        }
        return fehler
    }

    /**
     *  Diese Methode fügt dem Formular ein Event hinzu, das beim Absenden des Formulars ausgelöst wird.
     * @param {Element} eingabefomular - Das HTML-Element des Eingabeformulars.
     */

    _absenden_event_hinzufuegen(eingabefomular){
        eingabefomular.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault()

            let formulardaten =this._formulardaten_holen(e)
            let formular_fehler = this._formulardaten_vearbeiten(formulardaten)
 
            if(formular_fehler.length ===0){
                haushaltbuch.eintrag_hinzufuegen(formulardaten)
                let bestehnde_fehlerbox = document.querySelector(".fehlerbox")
                if (bestehnde_fehlerbox !== null){
                    bestehnde_fehlerbox.remove()
                }
                e.target.reset()
                this._datum_aktualesieren()
            } else{
                let fehler = new Fehlerbox("folgende felder wurde nicht korrekt ausgefüllt: ", formular_fehler)
                fehler.anzeigen()
            }
        })
    }

    /**
     *  Diese Methode aktualisiert das Datum im Formular auf das aktuelle Datum.
     */

    _datum_aktualesieren(){
        let datums_input = document.querySelector("#datum")
        if (datums_input !== null){
            datums_input.valueAsDate = new Date()
    }
}
    /**
     *  Diese Methode generiert das HTML für das Eingabeformular.
     * @returns {Element} eingabeformular - Das HTML-Element des Eingabeformulars.
     */
    _html_generiren(){
        let eingabeformular =document.createElement("section")
        eingabeformular.setAttribute("id", "eingabeformular-container")
        eingabeformular.innerHTML = `<form id="eingabeformular" action="#" method="get"></form>
        <div class="eingabeformular-zeile">
            <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div class="eingabeformular-zeile">
            <div class="titel-typ-eingabe-gruppe">
                <label for="titel">Titel</label>
                <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags">
                <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
                <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
                <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
                <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <div class="betrag-datum-eingabe-gruppe">
                <label for="betrag">Betrag</label>
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)" min="0.01">
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" size="10" title="Datum des Eintrags">
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`

        this._absenden_event_hinzufuegen(eingabeformular);
        return eingabeformular;
    }
    /**
     *  Diese Methode zeigt das Eingabeformular an.
     */
    anzeigen(){
        let navigationsleiste = document.querySelector("#navigationsleiste")
        if(navigationsleiste !== null){
                navigationsleiste.insertAdjacentElement("afterend", this._html)
                this._datum_aktualesieren()
        }
    }
}