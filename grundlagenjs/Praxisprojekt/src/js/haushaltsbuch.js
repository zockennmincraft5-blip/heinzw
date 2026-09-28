"use strict"
let haushaltsbuch={
    gesammt_billanz: new Map(),
    eintraege: [],

    eintraeg_sotieren(){
        this.eintraege.sort((eintrag_a, eintrag_b)=>{
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

    html_eintrag_generien(eintrag){
        let listenpunkt  = document.createElement("li")
        if (eintrag.get("type")=="einahme"){
            listenpunkt.setAttribute("class", "einnahme")
        } else {
            listenpunkt.setAttribute("class", "ausgabe")
        }
        listenpunkt.setAttribute("data-tomstemp", eintrag.get("timestemp"))
        let datum = document.createElement("span")
        datum.setAttribute("class", "datum")
        datum.textContent = eintrag.get("datum").toLocaleDateString("de-DE", {
            year: "numeric",
            month:"2-digit",
            day: "2-digit",
        })
        listenpunkt.insertAdjacentElement("afterbegin", datum)

        let titel = document.createElement("span")
        titel.setAttribute("class", "titel")
        titel.textContent = eintrag.get("titel")
        datum.insertAdjacentElement("afterend", titel)

        let betrag = document.createElement("span")
        betrag.setAttribute("class", "betrag")
        betrag.textContent = `${(eintrag.get("betrag")/100).toFixed(2).replace(/\./,".")} €`
        titel.insertAdjacentElement("afterend", betrag)

        let button = document.createElement("button")
        button.setAttribute("class", "entfernen-button")
        betrag.insertAdjacentElement("afterend", button)

        let icon =document.createElement("i")
        icon.setAttribute("class", "fas fa-trash")
        button.insertAdjacentElement("afterbegin", icon)

        return listenpunkt
    },
    
    eintraege_anzeigen(){
        document.querySelectorAll(".monatsliste ul").forEach(eintragsliste =>eintragsliste.remove())
        let einrasliste = document.createElement("ul")
        this.eintraege.forEach(eintrag =>einrasliste.insertAdjacentElement("beforeend", this.html_eintrag_generien(eintrag)))
        document.querySelector(".monatsliste").insertAdjacentElement("afterbegin", einrasliste)
    },

    berechnen(){
        let new_gesammt_billanz = new Map()
        new_gesammt_billanz.set("einamhmen", 0)
        new_gesammt_billanz.set("ausgaben", 0)
        new_gesammt_billanz.set("billanz", 0)
        this.eintraege.forEach(eintrag =>{
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
    
    html_gesamtbillant_gemerien(){
        let gesammtbillanz = document.createElement("aside")
        gesammtbillanz.setAttribute("id","gesamtbilanz")

        let uebschrift = document.createElement("h1")
        uebschrift.textContent ="Gesamtbilanz"
        gesammtbillanz.insertAdjacentElement("afterbegin", uebschrift)
        
        let einahemn_zeile =document.createElement("div")
        einahemn_zeile.setAttribute("class", "gesamtbilanz-zeile einnahmen")
        let einahemn_titel =document.createElement("span")
        einahemn_titel.textContent = "Einahmen:"
        einahemn_zeile.insertAdjacentElement("afterbegin", einahemn_titel)
        let einahemn_betrag =document.createElement("span")
        einahemn_betrag.textContent = `${(this.gesammt_billanz.get("einamhmen")/100).toFixed(2).replace(/\./,".")} €`
        einahemn_zeile.insertAdjacentElement("beforeend", einahemn_betrag)
        gesammtbillanz.insertAdjacentElement("beforeend", einahemn_zeile)

        let ausgaben_zeile =document.createElement("div")
        ausgaben_zeile.setAttribute("class", "gesamtbilanz-zeile ausgaben")
        let ausgaben_titel =document.createElement("span")
        ausgaben_titel.textContent = "Ausgaben:"
        ausgaben_zeile.insertAdjacentElement("afterbegin", ausgaben_titel)
        let ausgaben_betrag =document.createElement("span")
        ausgaben_betrag.textContent = `-${(this.gesammt_billanz.get("ausgaben")/100).toFixed(2).replace(/\./,".")} €`
        ausgaben_zeile.insertAdjacentElement("beforeend", ausgaben_betrag)
        gesammtbillanz.insertAdjacentElement("beforeend", ausgaben_zeile)

        let billanz_zeile =document.createElement("div")
        billanz_zeile.setAttribute("class", "gesamtbilanz-zeile bilanz")
        let billanz_titel =document.createElement("span")
        billanz_titel.textContent = "Bilanz:"
        billanz_zeile.insertAdjacentElement("afterbegin", billanz_titel)
        let billanz_betrag =document.createElement("span")
        if(this.gesammt_billanz.get("billanz")>=0){
            billanz_betrag.setAttribute("class", "positiv")
            
        } else if ((this.gesammt_billanz.get("billanz") < 0)){
            billanz_betrag.setAttribute("class", "negativ")
        }
        billanz_betrag.textContent = ` ${(this.gesammt_billanz.get("billanz")/100).toFixed(2).replace(/\./,".")} €`
        billanz_zeile.insertAdjacentElement("beforeend", billanz_betrag)
        gesammtbillanz.insertAdjacentElement("beforeend", billanz_zeile)
        return gesammtbillanz
    },
    
    gesamtbillanz_anzeigen(){
        document.querySelectorAll("gesamtbilanz").forEach(gesamtbillanz=> gesamtbillanz.remove())
        document.querySelector("body").insertAdjacentElement("beforeend", this.html_gesamtbillant_gemerien())
    },
    
    eintrag_hinzufuegen(formulardaten){
        let neuer_eintrag = new Map
        neuer_eintrag.set("titel", formulardaten.titel)
        neuer_eintrag.set("betrag", formulardaten.betrag)
        neuer_eintrag.set("typ", formulardaten.typ)
        neuer_eintrag.set("datum", formulardaten.datum)
        neuer_eintrag.set("timestamp", Date.now())
        this.eintraege.push(neuer_eintrag)
        this.eintraeg_sotieren()
        this.berechnen()
        this.eintraege_anzeigen()
        this.gesamtbillanz_anzeigen()

    }
}
