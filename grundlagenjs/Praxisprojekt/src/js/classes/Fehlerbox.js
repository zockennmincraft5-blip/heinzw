/**
 * Diese Klasse repräsentiert einen Fehler, der in einem Formular auftreten kann.
 * Sie enthält den Fehlertext, eine Liste von Formularfehlern und generiert das entsprechende HTML-Element zur Anzeige des Fehlers.
 */
export default class Fehlerbox {
    /**
     * Konstruktor der Klasse Fehler.
     * Initialisiert den Fehlertext und die Liste der Formularfehler.
     * @param {string} fehlertext - Der Text, der den Fehler beschreibt.
     * @param {Array} formular_fehler - Eine Liste von Formularfehlern.
     * @param {Element} _html - Das HTML-Element, das den Fehler darstellt.
     */
    constructor(fehlertext, formular_fehler){
        this.fehlertext = fehlertext
        this._formular_fehler = formular_fehler
        this._html = this._html_generiren()
    }
    /**
     * Diese Methode generiert das HTML-Element, das den Fehler darstellt.
     * @returns {Element} fehler_box - Das HTML-Element, das den Fehler darstellt.
     */
    _html_generiren (formular_fehler){
        let fehler_box = document.createElement("div")
        fehler_box.setAttribute("class", "fehlerbox")

        let fehlertext = document.createElement("span")
        fehlertext.textContent = this.fehlertext
        fehler_box.insertAdjacentElement("afterbegin", fehlertext)

        let fehlerliste = document.createElement("ul")
        this._formular_fehler.forEach(fehler => {
            let fehlerlistepunkt = document.createElement("li")
            fehlerlistepunkt.textContent = fehler
            fehlerliste.insertAdjacentElement("beforeend", fehlerlistepunkt)
        });
        fehler_box.insertAdjacentElement("beforeend", fehlerliste)
        return fehler_box
    }
    /**
     * Diese Methode gibt das HTML-Element zurück, das den Fehler darstellt.
     */
    anzeigen(formularfehler){
        let eingabeformular_container =document.querySelector("eingabeformular-container")
        this._enfernen()
        if(eingabeformular_container !== null){
            eingabeformular_container.insertAdjacentElement("afterbegin", this._html(formularfehler))
    }}
    /**
     * Diese Methode entfernt das HTML-Element, das den Fehler darstellt, aus dem DOM.
     */
    _enfernen(){
        let bestehnde_fehlerbox = document.querySelector(".fehlerbox")
        if (bestehnde_fehlerbox !== null){
            bestehnde_fehlerbox.remove
        }
    }
}