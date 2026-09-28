"use strict"
    // <section id="eingabeformular-container">
 
    // </section>
const eingabefummular = {
    formulardaten_holen(e){
        let typ
        if(e.target.elements.ausgabe.cheked === true){
            typ = "ausgabe"
        } else{
            typ = "einahme"
        }
        return {
            titel: e.target.elements.titel.value,
            betrag: parseFloat(e.target.elements.betrag.value)*100,
            typ: typ,
            datum: e.target.elements.datum.valueAsDate
        }
    },

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


    absenden_event_hinzufuegen(eingabefomular){
        eingabefomular.querySelector("#eingabeformular").addEventListener("submit", e => {
            e.preventDefault()
            let formulardaten =this.formulardaten_holen(e)
            console.log(formulardaten)
            let formular_fehler = this.formulardaten_vearbeiten(formulardaten)
            console.log(formular_fehler)
            if(formular_fehler.length ===0){
                haushaltsbuch.eintrag_hinzufuegen(eingabefomular)

            }
    })
    },
    html_generiren(){

        let eingabeformular =document.createElement("section")
        eingabeformular.setAttribute("id", "eingabeformular-container")
        eingabeformular.innerHTML =`<form id="eingabeformular" action="#" method="get"></form>
        <div class="eingabeformular-zeile">
            <h1>Neue Einnahme / Ausgabe hinzufügen</h1>
        </div>
        <div class="eingabeformular-zeile">
            <div class="titel-typ-eingabe-gruppe">
                <label for="titel">Titel</label>
                <input type="text" id="titel" form="eingabeformular" name="titel" placeholder="z.B. Einkaufen" size="10" title="Titel des Eintrags" required>
                <input type="radio" id="einnahme" name="typ" value="einnahme" form="eingabeformular" title="Typ des Eintrags">
                <label for="einnahme" title="Typ des Eintrags">Einnahme</label>
                <input type="radio" id="ausgabe" name="typ" value="ausgabe" form="eingabeformular" title="Typ des Eintrags" checked>
                <label for="ausgabe" title="Typ des Eintrags">Ausgabe</label>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <div class="betrag-datum-eingabe-gruppe">
                <label for="betrag">Betrag</label>
                <input type="number" id="betrag" name="betrag" form="eingabeformular" placeholder="z.B. 10,42" size="10" step="0.01" title="Betrag des Eintrags (max. zwei Nachkommastellen, kein €-Zeichen)" required>
                <label for="datum">Datum</label>
                <input type="date" id="datum" name="datum" form="eingabeformular" placeholder="jjjj-mm-tt" size="10" title="Datum des Eintrags (Format: jjjj-mm-tt)" required>
            </div>
        </div>
        <div class="eingabeformular-zeile">
            <button class="standard" type="submit" form="eingabeformular">Hinzufügen</button>
        </div>`
        this.absenden_event_hinzufuegen(eingabeformular)
        return eingabeformular
    },
    anzeigen(){

        document.querySelector("#navigationsleiste").insertAdjacentElement("afterend", this.html_generiren())
    },

}
