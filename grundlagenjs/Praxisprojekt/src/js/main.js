"use strict"

let haushaltsbuch={
    gesammt_billanz:{
        billanz: 0,
        einamhmen: 0,
        ausgaben:0
    },
    eintraeg: [],
    
    eingaben(){
        this.eintraeg.push({
            titel:prompt("Titel", "z.b. einkauf"),
            type: prompt("eingabe", "z.b. Einahme/ausgabe"),
            betrag: parseInt(prompt("Betrag", "z.b. 10,42")),
            datum: prompt("Datum", "jjjj-mm-tt"),
        })
    },

    eintraeg_sotieren(){
        this.eintraeg.sort(function(eintrag_a, eintrag_b){
            if (eintrag_a.datum < eintrag_b.datum){
                return -1
            } else if (eintrag_a.datum > eintrag_b.datum){
                return 1
            } else{
                return 0
            }
        }
    )
    },

    eingabe_ergebnisse() {
    console.clear
    this.eintraeg.forEach(function(eintrag){
           console.log(`titel: ${eintrag.titel}\n`
                +`einahme oder ausgabe: ${eintrag.type}\n`
                +`Betrag: ${eintrag.betrag} €\n`
                +`Datum: ${eintrag.datum}`
) 
        })
        
},

    berechnen(){
        let einamhmen = 0
        let ausgaben = 0
        let billanz = 0
        this.eintraeg.forEach(function(eintrag){
        switch(eintrag.type){
            case "Einahme":
                einamhmen += eintrag.betrag
                break
            default:
                ausgaben -= eintrag.betrag
                break
        }
            billanz =  einamhmen - ausgaben
    })
    this.gesammt_billanz.einamhmen = einamhmen
    this.gesammt_billanz.ausgaben = ausgaben
    this.gesammt_billanz.billanz = billanz
},
    ergebnis_ausgabe(){
    console.log(`Gesammteinahmen: ${this.gesammt_billanz.einamhmen}  \n`
                +`Gesammtausgaben: ${this.gesammt_billanz.ausgaben}\n`
                +`Gesammtbillanz: ${this.gesammt_billanz.billanz}\n`
                +`Billanz ist Posetive: ${this.gesammt_billanz.billanz >=0}`)
    },
    eintrag_hinzufuegen(){
        let weitere_eintrag = true
        while(weitere_eintrag){
            this.eingaben()
            this.eintraeg_sotieren
            this.berechnen()
            this.eingabe_ergebnisse()
            this.ergebnis_ausgabe()
            weitere_eintrag = confirm("willst du ein weiteren eintrag machen?")
    }
}

}



haushaltsbuch.eintrag_hinzufuegen()
console.log(haushaltsbuch)