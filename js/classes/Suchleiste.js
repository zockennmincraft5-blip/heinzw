import courses from "../courses.json" with {type: "json"}
import kurse from"../main.js"

export default class Suchleiste{
    constructor(){
        this._kurse = courses
        this._html_generien(this._kurse)
        this._events()
    }
    _html_generien(kurse){

        let filterbar_div = document.createElement("div")
        filterbar_div.setAttribute("class", "filterbar")

        let selekt_format = document.createElement("select")
        selekt_format.setAttribute("form", "filterbar")
        selekt_format.setAttribute("name", "format")
        selekt_format.setAttribute("class", "filter")
        selekt_format.setAttribute("id", "format")

        let formatoption = document.createElement("option")
        formatoption.setAttribute("value", "")
        formatoption.textContent= "Format"
        selekt_format.insertAdjacentElement("beforeend",formatoption)

        let schon_im_filter =[]
        kurse.forEach(kurselement =>{
            if(!schon_im_filter.includes(kurselement.format)){
                let formatoption = document.createElement("option")
                schon_im_filter.push(kurselement.format)
                formatoption.setAttribute("value", kurselement.format)
                formatoption.textContent= kurselement.format
                selekt_format.insertAdjacentElement("beforeend",formatoption)
            }})
        filterbar_div.insertAdjacentElement("beforeend", selekt_format)

        let selekt_thema = document.createElement("select")
        selekt_thema.setAttribute("form", "filterbar")
        selekt_thema.setAttribute("name", "thema")
        selekt_thema.setAttribute("class", "filter")
        selekt_thema.setAttribute("id", "thema")

        let themaoption = document.createElement("option")
        themaoption.setAttribute("value", "")
        themaoption.textContent= "Thema"
        selekt_thema.insertAdjacentElement("beforeend",themaoption)

        schon_im_filter =[]
        kurse.forEach(kurselement =>{
            if(!schon_im_filter.includes(kurselement.thema)){
                let themaoption = document.createElement("option")
                schon_im_filter.push(kurselement.thema)
                themaoption.setAttribute("value", kurselement.thema)
                themaoption.textContent= kurselement.thema
                selekt_thema.insertAdjacentElement("beforeend",themaoption)
            }})
        filterbar_div.insertAdjacentElement("beforeend", selekt_thema)

        let selekt_anbieter = document.createElement("select")
        selekt_anbieter.setAttribute("form", "filterbar")
        selekt_anbieter.setAttribute("name", "anbieter")
        selekt_anbieter.setAttribute("class", "filter")
        selekt_anbieter.setAttribute("id", "anbieter")

        let anbieteroption = document.createElement("option")
        anbieteroption.setAttribute("value", "")
        anbieteroption.textContent= "Anbieter"
        selekt_anbieter.insertAdjacentElement("beforeend",anbieteroption)

        schon_im_filter =[]
        kurse.forEach(kurselement =>{
            if(!schon_im_filter.includes(kurselement.anbieter)){
                let anbieteroption = document.createElement("option")
                schon_im_filter.push(kurselement.anbieter)
                anbieteroption.setAttribute("value", kurselement.anbieter)
                anbieteroption.textContent= kurselement.anbieter
                selekt_anbieter.insertAdjacentElement("beforeend",anbieteroption)
            }})
        filterbar_div.insertAdjacentElement("beforeend", selekt_anbieter)
        
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
        inputtext.setAttribute("placeholder",  "   Suchen (min. 2 Buchstarben)")
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
        let filternnach = {
            titel: "",
            beginn: "",
            format: "",
            anbieter: ""
        }
        let regex
        let input_suche = document.querySelector("input[type=text]")
            input_suche.addEventListener("input", e => {
                let such_input = e.srcElement.value       
                if (such_input !== ""){
                    regex = new RegExp(`^${such_input.toLowerCase()}*`)
                    filternnach.titel = regex
                    this._kurs_reload(filternnach)
                }
            }
            )


        let input_format = document.querySelector("#format")
            input_format.addEventListener("input", e => {
                let format_input = e.srcElement.value
                filternnach.format = format_input
                this._kurs_reload(filternnach)
            })

        let input_thema = document.querySelector("#thema")
            input_thema.addEventListener("input", e => {
                let thema_input = e.srcElement.value
                filternnach.thema = thema_input
                this._kurs_reload(filternnach)
            })
        let input_anbieter = document.querySelector("#anbieter")
            input_anbieter.addEventListener("input", e => {
                let anbieter_input = e.srcElement.value
                filternnach.anbieter = anbieter_input
                this._kurs_reload(filternnach)
            })
        let input_datum = document.querySelector("input[type=date]")
            input_datum.addEventListener("input", e => {
            let datum_input    
                if(e.srcElement.value != ""){
                 datum_input = new Date(e.srcElement.value).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit"})  
                } else {
                    datum_input= ""
                }
                filternnach.beginn = datum_input
                this._kurs_reload(filternnach)
            })

    }
    _kurs_reload(fillterliste ){
        
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
                
            if((kurs_titel.match(fillterliste.titel)|| fillterliste.titel == "") && 
               (kurs_format.match(fillterliste.format)|| fillterliste.format == "") &&
               (kurs_beginn.match(fillterliste.beginn)|| fillterliste.beginn == "") &&
               (kurs_thema.match(fillterliste.thema)|| fillterliste.thema == "") && 
               (kurs_anbieter.match(fillterliste.anbieter)|| fillterliste.anbieter == "")) {
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