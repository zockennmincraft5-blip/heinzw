"use strict"

class Eingabeformular {
    constructor(){
        this._html = this._html_generiren()
    }
    _formulardaten_holen(e){
        return {
            titel: e.target.elements.titel.value.trim(),
            betrag: parseFloat(e.target.elements.betrag.value)*100,
            typ: e.target.elements.einnahme.checked === false ? "ausgabe" : "einnahme",
            datum: e.target.elements.datum.valueAsDate
        }
    }

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

    
    _absenden_event_hinzufuegen(eingabefomular){
        eingabefomular.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault()

            let formulardaten =this._formulardaten_holen(e)
            let formular_fehler = this._formulardaten_vearbeiten(formulardaten)
 
            if(formular_fehler.length ===0){
                haushaltbuch.eintrag_hinzufuegen(formulardaten)
                let bestehnde_fehlerbox = document.querySelector(".fehlerbox")
                if (bestehnde_fehlerbox !== null){
                    bestehnde_fehlerbox.remove
                }
                e.target.reset()
                this._datum_aktualesieren()
            } else{
                let fehler = new Fehler("folgende felder wurde nicht korrekt ausgefüllt: ", formular_fehler)
                fehler.anzeigen()
            }
        })
    }

    _datum_aktualesieren(){
        let datums_input = document.querySelector("#datum")
        if (datums_input !== null){
            datums_input.valueAsDate = new Date()
    }
}

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
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)">
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)">
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`

        this._absenden_event_hinzufuegen(eingabeformular);
        return eingabeformular;
    }

    anzeigen(){
        let navigationsleiste = document.querySelector("body")
        if(navigationsleiste !== null){
                navigationsleiste.insertAdjacentElement("afterbegin", this._html)
                this._datum_aktualesieren()
        }
    }
}