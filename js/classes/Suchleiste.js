import courses from "../courses.json" with {type: "json"}
import kurse from"../main.js"

export default class Suchleiste{
        constructor(){
            this._kurse = courses
            this._html_generien(this._kurse)
            this._events()
            this.filternnach = {
            titel: "",
            beginn: "",
            format: "",
            anbieter: ""
        }
        }
        _html_generien(kurse){

            let filterbar_div = document.createElement("div")
            filterbar_div.setAttribute("class", "filterbar")

            let select_format = document.createElement("select")
            select_format.setAttribute("form", "filterbar")
            select_format.setAttribute("name", "format")
            select_format.setAttribute("class", "filter")
            select_format.setAttribute("id", "format")
            
            let select_button_format = document.createElement("button")
            select_button_format.setAttribute("class", "button_filter")
            select_button_format.setAttribute("id", "formatbutton")
            select_button_format.innerHTML = `
                                              <img src="../icons/format.svg" alt="Format Icon" class="filter_icons"> 
                                              Format 
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
            filterbar_div.insertAdjacentElement("beforeend", select_button_format)

            let formatoption = document.createElement("option")
            formatoption.setAttribute("value", "")
            formatoption.textContent = "format"
            select_format.insertAdjacentElement("beforeend", formatoption)

            let schon_im_filter = []
            kurse.forEach(kurselement => {
                if (kurselement.format && !schon_im_filter.includes(kurselement.format)) {
                    let formatoption = document.createElement("option")
                    schon_im_filter.push(kurselement.format)
                    formatoption.setAttribute("value", kurselement.format)
                    formatoption.textContent = kurselement.format
                    select_format.insertAdjacentElement("beforeend", formatoption)
                }
            })

            filterbar_div.insertAdjacentElement("beforeend", select_format)
        let select_thema = document.createElement("select")
        select_thema.setAttribute("form", "filterbar")
        select_thema.setAttribute("name", "thema")
        select_thema.setAttribute("class", "filter")
        select_thema.setAttribute("id", "thema")
        let select_button_thema = document.createElement("button")
        select_button_thema.setAttribute("class", "button_filter")
        select_button_thema.setAttribute("id", "themabutton")
        select_button_thema.innerHTML = `
                                          <img src="../icons/globe.svg" alt="Format Icon" class="filter_icons"> 
                                          Thema
                                          <div class="platzhaltebuttons"></div>
                                          <img src="../icons/chevron-down.svg" alt=" Icon" class="filter_icons">`
        filterbar_div.insertAdjacentElement("beforeend", select_button_thema)
        
        let themaoption = document.createElement("option")
        themaoption.setAttribute("value", "")
        themaoption.textContent= "Thema"
        select_thema.insertAdjacentElement("beforeend",themaoption)
        
        schon_im_filter =[]
        kurse.forEach(kurselement =>{
            if(!schon_im_filter.includes(kurselement.thema)){
                let themaoption = document.createElement("option")
                schon_im_filter.push(kurselement.thema)
                themaoption.setAttribute("value", kurselement.thema)
                themaoption.textContent= kurselement.thema
                select_thema.insertAdjacentElement("beforeend",themaoption)
            }})
        filterbar_div.insertAdjacentElement("beforeend", select_thema)

        let select_anbieter = document.createElement("select")
        select_anbieter.setAttribute("form", "filterbar")
        select_anbieter.setAttribute("name", "anbieter")
        select_anbieter.setAttribute("class", "filter")
        select_anbieter.setAttribute("id", "anbieter")

        let select_button_anbieter = document.createElement("button")
        select_button_anbieter.setAttribute("class", "button_filter")
        select_button_anbieter.setAttribute("id", "anbieterbutton")
        select_button_anbieter.innerHTML = `
                                          <img src="../icons/building.svg" alt="Format Icon" class="filter_icons"> 
                                          Anbieter 
                                          <div class="platzhaltebuttons"></div>
                                          <img src="../icons/chevron-down.svg" alt=" Icon" class="filter_icons">`
        filterbar_div.insertAdjacentElement("beforeend", select_button_anbieter)

        let anbieteroption = document.createElement("option")
        anbieteroption.setAttribute("value", "")
        anbieteroption.textContent= "Anbieter"
        select_anbieter.insertAdjacentElement("beforeend",anbieteroption)

        schon_im_filter =[]
        kurse.forEach(kurselement =>{
            if(!schon_im_filter.includes(kurselement.anbieter)){
                let anbieteroption = document.createElement("option")
                schon_im_filter.push(kurselement.anbieter)
                anbieteroption.setAttribute("value", kurselement.anbieter)
                anbieteroption.textContent= kurselement.anbieter
                select_anbieter.insertAdjacentElement("beforeend",anbieteroption)
            }})
        filterbar_div.insertAdjacentElement("beforeend", select_anbieter)
        
        let inputdate_button = document.createElement("button")
        inputdate_button.setAttribute("class", "filter")
        inputdate_button.setAttribute("class", "button_filter")
        inputdate_button.setAttribute("id", "datumsbutton")
        inputdate_button.innerHTML = ` 
                                          Datum 
                                          <div class="platzhaltebuttons"></div>
                                          <img src="../icons/calendar.svg" alt=" Icon" class="filter_icons">`
        filterbar_div.insertAdjacentElement("beforeend", inputdate_button)
        let inputdate = document.createElement("input")
        inputdate.setAttribute("type", "date")
        inputdate.setAttribute("id", "datum")
        inputdate.setAttribute("name", "datum")
        inputdate.setAttribute("form", "filterbar")
        inputdate.setAttribute("class", "filter")
        filterbar_div.insertAdjacentElement("beforeend", inputdate)

        let placeholder_div = document.createElement("div")
        placeholder_div.setAttribute("class", "platzhalterfilterbar")
        filterbar_div.insertAdjacentElement("beforeend", placeholder_div)

        let inputtext = document.createElement("input")
        inputtext.setAttribute("type", "text")
        inputtext.setAttribute("id", "suche")
        inputtext.setAttribute("name", "suche")
        inputtext.setAttribute("form", "filterbar")
        inputtext.setAttribute("class", "suche")
        inputtext.setAttribute("placeholder",  "   Suchen ")
        filterbar_div.insertAdjacentElement("beforeend", inputtext)

        this._anzeigen(filterbar_div)
    }


    _anzeigen(filterdaten){
        let filltabar = document.querySelector("#filtarbar")
        let filterleiste = document.querySelector(".filterbar")
        if (filltabar !== null){
            if(filterleiste !== null){
                filterleiste.remove()
    }
        filltabar.insertAdjacentElement("afterend",filterdaten)
}
    
}
    _events(){
        let format_input_button = document.querySelector("#formatbutton")
        let format_input  = document.querySelector("#format")
        format_input_button.addEventListener("click", ()=>{
            format_input.showPicker()
        })

        let thema_input_button = document.querySelector("#themabutton")
        let thema_input  = document.querySelector("#thema")
        thema_input_button.addEventListener("click", ()=>{
            thema_input.showPicker()
        })

        let anbieter_input_button = document.querySelector("#anbieterbutton")
        let anbieter_input  = document.querySelector("#anbieter")
        anbieter_input_button.addEventListener("click", ()=>{
            anbieter_input.showPicker()
        })


        let datum_input_button = document.querySelector("#datumsbutton")
        let datum_input = document.querySelector("#datum")
        datum_input_button.addEventListener("click", () => {
        datum_input.showPicker()
        });

        let regex
        let input_suche = document.querySelector("input[type=text]")
            input_suche.addEventListener("input", e => {
                let such_input = e.srcElement.value       
                if (such_input !== ""){
                    regex = new RegExp(`^${such_input.toLowerCase()}*`)
                    this.filternnach.titel = regex
                    this._kurs_reload(this.filternnach)
                }
            }
            )


        let input_format = document.querySelector("#format")
            input_format.addEventListener("input", e => {
                let format_input = e.srcElement.value
                if(format_input != ""){
                    format_input_button.style.border = "none"
                    format_input_button.style.backgroundColor  ="#edeef1"   
                    format_input_button.innerHTML = `
                                              <img src="../icons/format.svg" alt="Format Icon" class="filter_icons"> 
                                              ${format_input} 
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
                }else{
                    format_input_button.style.border = "1px solid #232323" 
                    format_input_button.style.backgroundColor  ="white"  
                    format_input_button.innerHTML = `
                                              <img src="../icons/format.svg" alt="Format Icon" class="filter_icons"> 
                                              Format
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
                }
                this.filternnach.format = format_input
                this._kurs_reload(this.filternnach)
            })

        let input_thema = document.querySelector("#thema")
            input_thema.addEventListener("input", e => {
                let thema_input = e.srcElement.value
                if(thema_input != ""){
                    thema_input_button.style.border = "none"
                    thema_input_button.style.backgroundColor  ="#edeef1"   
                    thema_input_button.innerHTML = `
                                              <img src="../icons/globe.svg" alt="Format Icon" class="filter_icons"> 
                                              ${thema_input} 
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
                }else{
                    thema_input_button.style.border = "1px solid #232323"
                    thema_input_button.style.backgroundColor  ="white"   
                    thema_input_button.innerHTML = `
                                              <img src="../icons/globe.svg" alt="Format Icon" class="filter_icons"> 
                                              Thema
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
                }
                this.filternnach.thema = thema_input
                this._kurs_reload(this.filternnach)
            })
        let input_anbieter = document.querySelector("#anbieter")
            input_anbieter.addEventListener("input", e => {
                let anbieter_input = e.srcElement.value
                this.filternnach.anbieter = anbieter_input
                this._kurs_reload(this.filternnach)
                if(anbieter_input != ""){
                    anbieter_input_button.style.border = "none"
                    anbieter_input_button.style.backgroundColor  ="#edeef1"   
                    anbieter_input_button.innerHTML = `
                                              <img src="../icons/globe.svg" alt="Format Icon" class="filter_icons"> 
                                              ${anbieter_input} 
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
                }else{
                    anbieter_input_button.style.border = "1px solid #232323"
                    anbieter_input_button.style.backgroundColor  ="white"   
                    anbieter_input_button.innerHTML = `
                                              <img src="../icons/globe.svg" alt="Format Icon" class="filter_icons"> 
                                              Anbieter
                                              <div class="platzhaltebuttons"></div>
                                              <img src="../icons/chevron-down.svg" alt=" Icon" class="dropdown_icons">`
                }
            })

        let input_datum = document.querySelector("input[type=date]")
            input_datum.addEventListener("input", e => {
            let datum_input    
                if(e.srcElement.value != ""){
                 datum_input = new Date(e.srcElement.value).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"})  
                datum_input_button.style.border = "none"
                datum_input_button.style.backgroundColor  ="#edeef1"
                datum_input_button.innerHTML = ` 
                                          ${datum_input} 
                                          <div class="platzhaltebuttons"></div>
                                          <img src="../icons/calendar.svg" alt=" Icon" class="filter_icons">`
                } else {
                    datum_input= ""
                    datum_input_button.style.border = "1px solid #232323"
                    datum_input_button.style.backgroundColor ="white"
                    datum_input_button.innerHTML = ` 
                                          Datum 
                                          <div class="platzhaltebuttons"></div>
                                          <img src="../icons/calendar.svg" alt=" Icon" class="filter_icons">`
                }
                this.filternnach.beginn = datum_input
                this._kurs_reload(this.filternnach)
            })

    }
_filter_wigets() {
    let fillterbar = document.querySelector(".filterbar");
    let filterbox_inhalt = document.querySelector(".filterbox");

    if (fillterbar !== null) {
        if (filterbox_inhalt !== null) {
            filterbox_inhalt.remove();
        }

        let filterbox = document.createElement("div");
        filterbox.setAttribute("class", "filterbox");
        
        let hat_aktive_filter = false;

        // Wir gehen alle Filter-Schlüssel dynamisch durch
        for (let key in this.filternnach) {
            let filter_wert = this.filternnach[key];

            // Nur ein Widget erstellen, wenn der Filter nicht leer ist
            if (filter_wert !== "") {
                hat_aktive_filter = true;

                let filter_item = document.createElement("div");
                filter_item.setAttribute("class", "filterinfo");
                filter_item.innerHTML = `
                    <span>${filter_wert}</span> 
                    <button class="filterentfernen" id="${key}filter_entfernen"> x </button>
                `;

                // Button im erstellten Element finden
                let format_filter_item = filter_item.querySelector(".filterentfernen");
                
                // Event-Listener für das Löschen des jeweiligen Filters
                format_filter_item.addEventListener("click", e => {
                    this.filternnach[key] = ""; // Setzt exakt den angeklickten Filter zurück (z.B. format, titel, etc.)
                    this._filter_wigets();
                    this._kurs_reload();
                });

                filterbox.insertAdjacentElement("beforeend", filter_item);
            }
        }

        // Die Filterbox wird nur ins DOM gehängt, wenn mindestens ein Filter aktiv ist
        if (hat_aktive_filter) {
            fillterbar.insertAdjacentElement("afterend", filterbox);
        }
    } 
}




    _kurs_reload(){
        console.log(this.filternnach)
        this._filter_wigets(this.filternnach)
        let kursliste =[]
        this._kurse.forEach(kurs =>  {
            let kurs_titel = kurs.titel.toLowerCase()
            let kurs_format = kurs.format
            let kurs_beginn = kurs.beginn
            kurs_beginn = new Date(kurs.beginn).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"}) 
            let kurs_thema = kurs.thema
            let kurs_anbieter = kurs.anbieter    
                
            if((kurs_titel.match(this.filternnach.titel)|| this.filternnach.titel == "") && 
               (kurs_format.match(this.filternnach.format)|| this.filternnach.format == "") &&
               (kurs_beginn.match(this.filternnach.beginn)|| this.filternnach.beginn == "") &&
               (kurs_thema.match(this.filternnach.thema)|| this.filternnach.thema == "") && 
               (kurs_anbieter.match(this.filternnach.anbieter)|| this.filternnach.anbieter == "")) {
                    kursliste.push(kurs)
            }
        })
        if (kursliste.length == 0){
            kurse.start(kursliste)
        }else{
            kurse.start(kursliste)
        }        
    }
}