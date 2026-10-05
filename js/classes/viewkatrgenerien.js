import courses from "../courses.json" with {type: "json"}

export default class Kurse {
    constructor(){
        this.start
    }
    start(){
        let kurs = courses
        this._html_generien(kurs)
        
    }
    _html_generien(kurs_info){
 /*

        let badge_format =document.createElement("span")
        badge_format.setAttribute("class", "badge")
        badge_format.textContent =  kurs_info.format
        badge_sammlung.insertAdjacentElement("beforeend", badge_format)

        let badge_thema =document.createElement("span")
        badge_thema.setAttribute("class", "badge")
        badge_thema.textContent =  kurs_info.thema
        badge_sammlung.insertAdjacentElement("beforeend", badge_thema)
        kurs_info_div.insertAdjacentElement("beforeend", badge_sammlung)

        let allgemin_daten = document.createElement("div")
        allgemin_daten.setAttribute("class", "karteninfo")
        haupt_div.insertAdjacentElement("beforeend", kurs_info_div)

        let dates = document.createElement("div")
        dates.setAttribute("class", "dates")
        dates.innerHTML =``
        allgemin_daten.insertAdjacentElement("beforeend",dates)
        haupt_div.insertAdjacentElement("beforeend",  allgemin_daten)
*/ 
        
        let beginn = new Date(kurs_info.beginn).toLocaleDateString("de-DE", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"})
        let ende =  new Date(kurs_info.ende).toLocaleDateString("de-DE",{
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"})
        let datum=beginn
        let dauerMinuten = kurs_info.dauerMinuten
        if(beginn !== ende){
            
            datum = beginn +" - "+ende}
        
        if(dauerMinuten === null){
            dauerMinuten = new Date(kurs_info.beginn).toLocaleDateString("de-DE", {
                            hour: "2-digit",
                            minute: "2-digit"}) + " - " +new Date(kurs_info.ende).toLocaleDateString("de-DE",{
                            hour: "2-digit",
                            minute: "2-digit"})
        }

        let container_div = document.createElement("div")
        container_div.setAttribute("class", "container")
        let haupt_div = document.createElement("div")

        haupt_div.setAttribute("class", `col-4`)
        haupt_div.setAttribute("id", kurs_info.id)
        haupt_div.innerHTML =`
            <div class="positions">
                            <img src="${kurs_info.bild}" alt="" class="vorshow">
                            <div class="textInBild">
                                <span class="badge">${kurs_info.format}</span>
                                <span class="badge">${kurs_info.thema}</span>
                            </div>
                        </div>
                        <div class="karteninfo">
                            <div class="dates">
                            <img src="icons/calendar.svg" alt="Calender" class="icons"><span class="textpos"> ${datum}</span>
                            <img src="icons/clock.svg" alt="Clockr" class="icons"><span class="textpos">${dauerMinuten} </span> 
                            <img src="icons/location.svg" alt="Location" class="icons"><span class="textpos">${kurs_info.ort}</span>
                        </div>
                        <div class="karteninfo">
                            <h2 class="kartentitel">${kurs_info.titel}</h2>
                            <p>${kurs_info.beschreibung}</p>
                        </div>
                        <div class="avatar">
                            <div>
                                <div class="avatar1 ">
                                
                                </div>
                                <div class="avatar2 ">

                                </div>
                            </div>
                            <div class="platzhaltercard">

                            </div>
                            <button class="cardbutton"><img src="icons/arrow-right.svg" alt="arrow right"></button>
                        </div>
                    </div> 
                     
                        
                        <div class="colorbar"></div>`

        container_div.insertAdjacentElement("beforeend", haupt_div)
        let filltabar = document.querySelector(".filterbar")
        let kurs_container = document.querySelector(".container")
        if (filltabar !== null){
            if(kurs_container !== null){
                kurs_container.remove()
            }
        filltabar.insertAdjacentElement("afterend",container_div)
    }
}
}