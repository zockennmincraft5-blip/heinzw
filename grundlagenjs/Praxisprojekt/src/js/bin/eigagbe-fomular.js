"use strict"

const eingabefummular = {
    formulardaten_holen(e){
        return {
            titel: e.target.elements.titel.value.trim(),
            betrag: parseFloat(e.target.elements.betrag.value)*100,
            typ: e.target.elements.einnahme.checked === false ? "ausgabe" : "einnahme",
            datum: e.target.elements.datum.valueAsDate
    }},

    formulardaten_vearbeiten(formulardaten){
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
        },

    html_fehlerbox_generiren (formular_fehler){
        let fehler_box = document.createElement("div")
        fehler_box.setAttribute("class", "fehlerbox")

        let fehlertext = document.createElement("span")
        fehlertext.textContent = "Folgende Felder wurden nich korekt ausgefüllt"
        fehler_box.insertAdjacentElement("afterbegin", fehlertext)

        let fehlerliste = document.createElement("ul")
        formular_fehler.forEach(fehler => {
            let fehlerlistepunkt = document.createElement("li")
            fehlerlistepunkt.textContent = fehler
            fehlerliste.insertAdjacentElement("beforeend", fehlerlistepunkt)
        });
        fehler_box.insertAdjacentElement("beforeend", fehlerliste)
    },

    fehlerbox_anzeigen(formularfehler){
        let eingabeformular_container =document.querySelector("eingabeformular-container")
        if(eingabeformular_container !== null){
            eingabeformular_container.insertAdjacentElement("afterbegin", this.html_fehlerbox_generiren(formularfehler))
    }},
    
    fehlerbox_enfernen(){
        let bestehnde_fehlerbox = document.querySelector(".fehlerbox")
        if (bestehnde_fehlerbox !== null){
            bestehnde_fehlerbox.remove
        }},
    
    absenden_event_hinzufuegen(eingabefomular){
        eingabefomular.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault()

            let formulardaten =this.formulardaten_holen(e)
            let formular_fehler = this.formulardaten_vearbeiten(formulardaten)
            

            if(formular_fehler.length ===0){
                haushaltsbuch.eintrag_hinzufuegen(formulardaten)
                this.fehlerbox_enfernen()
                e.target.reset()
                this.datum_aktualesieren()
            } else{
                
                this.fehlerbox_enfernen()
                this.fehlerbox_anzeigen(formular_fehler)
            }
    })},

    datum_aktualesieren(){
        let datums_input = document.querySelector("#datum")
        if (datums_input !== null){
            datums_input.valueAsDate = new Date()
    }},

    html_generiren(){
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
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)">
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)">
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`

        this.absenden_event_hinzufuegen(eingabeformular);
        return eingabeformular;
    },
    
    anzeigen(){
        let navigationsleiste = document.querySelector("#navigationsleiste")
        if(navigationsleiste !== null){
                navigationsleiste.insertAdjacentElement("afterend", this.html_generiren())
                this.datum_aktualesieren()
}}}
