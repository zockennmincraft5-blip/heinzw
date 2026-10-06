import courses from "../courses.json" with {type: "json"}
import kurse from"../main.js"

export default class Suchleiste{
    constructor(){
        this._kurse = courses
        this._html_generien(this._kurse)
        this._events()
    }
    _html_generien(kurse){
        // <div class="filterbar">
            
        //     <select form="filterbar" name="format" class="filter" id="format">
        //         <option value="">Format</option>
        //         <option value=""></option>
        //         <option value=""></option>
        //         <option value=""></option>
        //     </select>
        //     <select name="filterbar" class="filter" id="thema">
        //         <option value="">Thema</option>
        //         <option value=""></option>
        //         <option value=""></option>
        //         <option value=""></option>
        //     </select>
        //     <select name="filterbar" class="filter" id="anbieter">
        //         <option value="">Anbieter</option>
        //         <option value=""></option>
        //         <option value=""></option>
        //         <option value=""></option>
        //     </select>
        //     <input type="date" id="datum" name="datum" form="filterbar" class="filter">
        //     <span></span>
        //     <input type="text" id="suche" name="suche" form="filterbar" class="suche" placeholder="Suchen">
        // </div>
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
        
        kurse.forEach(kurselement =>{
            let formatoption = document.createElement("option")
            let query_formularoption = document.querySelector(`#${kurselement.format}`)
            console.log(`#${kurselement.format}`)
            console.log(query_formularoption)
            console.log(query_formularoption !== kurselement.format)
            if(query_formularoption !== kurselement.format){
                formatoption.setAttribute("id", kurselement.format)
                formatoption.setAttribute("value", kurselement.format)
                formatoption.textContent= kurselement.format
                selekt_format.insertAdjacentElement("beforeend",formatoption)
        }})
        this._anzeigen(filterbar_div.insertAdjacentElement("beforeend", selekt_format))
    }
    
    _anzeigen(filterdaten){
        console.log("anzeigen")
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
        
        let such_input
        let regex
        let input = document.querySelector("input[type=text]")
            input.addEventListener("input", e => {
                such_input = e.srcElement.value       
                if (such_input !== ""){
                regex = new RegExp(`^${such_input}*`)
                this._kurs_reload(regex)}
            
            }
            );

    }
    _kurs_reload(regex){
        let kursliste =[]
        this._kurse.forEach(kurs =>  {
            let kurs_titel = kurs.titel
            if(kurs_titel.match(regex)){
                console.log(kurs_titel)
                kursliste.push(kurs_titel)
            }
        })
        kurse.start(kursliste)
    }
}