"use strict"

let haushaltsbuch={
    gesammt_billanz: new Map(),
    eintraege: [],
    fehler: [],
    eingaben(){
        this.fehler.clear
        let neuer_eintrag = new Map()
        neuer_eintrag.set("titel",this.titel_bearbeiten(prompt("Titel (z.b. einkauf)").trim()))
        neuer_eintrag.set("type", this.type_bearbeiten(prompt("eingabe (z.b. Einahme/ausgabe)").trim()))
        neuer_eintrag.set("betrag", this.betrag_bearbeiten(prompt("Betrag in euro")))
        neuer_eintrag.set("datum", this.datum_bearbeiten(prompt("Datum(jjjj-mm-tt)")))
        neuer_eintrag.set("timestemp", Date.now())
        if(this.fehler.length == 0){
            this.eintraege.push(neuer_eintrag)
        }else{
        return false
        }
    },
    titel_bearbeiten(titel){
        titel = titel.trim()
        if (titel !="" ){
            return titel 
        }
        else{
            this.fehler.push("Kein titel Angegeben.")
            return false
        }
    },

    type_bearbeiten(type){
        type = type.trim().toLowerCase()
        if (type !="" ){
            return type 
        }
        else{
            this.fehler.push("Kein type Angegeben.")
            return false
        }
    },

    betrag_bearbeiten(betrag){
        if (this.betrag_valedieren(betrag) == true){
            return parseFloat(betrag.replace(",", "."))*100
        }
        else{
            this.fehler.push(`Ungülltiger Betrag: ${betrag}€`)
            return false
        }
    },
    betrag_valedieren(betrag){
        betrag = betrag.trim()
        if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null){
            return true 
        }
        else{
            return false
        }
    },
    datum_bearbeiten(datum){
        datum = datum.trim()
        if (this.datum_valedieren(datum)){
            return new Date(datum)
        }
        else{
            this.fehler.push(`Ungülltiger Datumsformat: "${datum}"`)

        }
    },
    datum_valedieren(datum){
        if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null){
            return true
        }
        else{
            return false
        }
    },
    eintraeg_sotieren(){
        this.eintraege.sort(function(eintrag_a, eintrag_b){
            if (eintrag_a.get("datum") > eintrag_b.get("datum")){
                return -1
            } else if (eintrag_a.get("datum")  < eintrag_b.get("datum")){
                return 1
            } else{
                return 0
            }
        }
    )
    },

    eingabe_ergebnisse() { 
        console.clear()
        this.eintraege.forEach(function(eintrag){
            console.log(`titel: ${eintrag.get("titel") }\n`
                    +`einahme oder ausgabe: ${eintrag.get("type")}\n`
                    +`Betrag: ${(eintrag.get("betrag")/100).toFixed(2) } €\n`
                    +`Datum: ${eintrag.get("datum").toLocaleDateString("de-DE", {
        year: "numeric",
        month:"long",
        day: "2-digit",
        weekday: "long",
    }) }`
) 
        })
        
},

    berechnen(){
        let new_gesammt_billanz = new Map()
        new_gesammt_billanz.set("einamhmen", 0)
        new_gesammt_billanz.set("ausgaben", 0)
        new_gesammt_billanz.set("billanz", 0)
        this.eintraege.forEach(function(eintrag){
            switch(eintrag.get("type")){
                case "einahme":
                    new_gesammt_billanz.set("einamhmen", new_gesammt_billanz.get("einamhmen") + eintrag.get("betrag")) 
                    break
                default:
                    new_gesammt_billanz.set("ausgaben", new_gesammt_billanz.get("ausgaben") + eintrag.get("betrag"))
                    break
            }
        
    })
    new_gesammt_billanz.set("billanz", new_gesammt_billanz.get("einamhmen")-new_gesammt_billanz.get("ausgaben"))
    this.gesammt_billanz = new_gesammt_billanz
    },
    ergebnis_ausgabe(){
        console.log(`Gesammteinahmen: ${(this.gesammt_billanz.get("einamhmen")/100).toFixed(2)} €\n`
                    +`Gesammtausgaben: ${(this.gesammt_billanz.get("ausgaben")/100).toFixed(2)} €\n`
                    +`Gesammtbillanz: ${(this.gesammt_billanz.get("billanz")/100).toFixed(2)} €\n`
                    +`Billanz ist Posetive: ${this.gesammt_billanz.get("billanz") >=0}`)
    },
    eintrag_hinzufuegen(){
        let weitere_eintrag = true
        while(weitere_eintrag){
            this.eingaben()
            if(this.fehler.length == 0){
                this.eintraeg_sotieren()
                this.berechnen()
                this.eingabe_ergebnisse()
                this.ergebnis_ausgabe()
                weitere_eintrag = confirm("willst du ein weiteren eintrag machen?")
            }else{
                console.log("Folgende Hehler wurden Gefunden")
                this.fehler.forEach(function(feler_eintrag){
                    console.log(feler_eintrag)
                })
                
            }
            
    }
}
}

haushaltsbuch.eintrag_hinzufuegen()