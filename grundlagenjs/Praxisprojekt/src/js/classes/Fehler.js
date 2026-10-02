export default class Fehler {
    constructor(fehlertext, formular_fehler){
        this.fehlertext = fehlertext
        this._formular_fehler = formular_fehler
        this._html = this._html_generiren()
    }
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

    anzeigen(formularfehler){
        let eingabeformular_container =document.querySelector("eingabeformular-container")
        this._enfernen()
        if(eingabeformular_container !== null){
            eingabeformular_container.insertAdjacentElement("afterbegin", this._html(formularfehler))
    }}
    
    _enfernen(){
        let bestehnde_fehlerbox = document.querySelector(".fehlerbox")
        if (bestehnde_fehlerbox !== null){
            bestehnde_fehlerbox.remove
        }
    }
}