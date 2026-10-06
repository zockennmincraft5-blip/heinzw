import courses from "../courses.json" with {type: "json"}
export default class Kurse {
    constructor(){
        this.start(courses)
        
    }

    start(courses){
        let  kurs = courses
        let container_div = document.createElement("div")
        container_div.setAttribute("class", "container")
        
        kurs.forEach(kurse => {
            container_div.insertAdjacentElement("beforeend", this.html_generien(kurse))
        })
        this._anzeigen(container_div)
    }

    _anzeigen(container_div){
        let filltabar = document.querySelector(".filterbar")
        let kurs_container = document.querySelector(".container")
        if (filltabar !== null){
            if(kurs_container !== null){
                kurs_container.remove()
            }

        filltabar.insertAdjacentElement("afterend",container_div)
    }}
    html_generien(kurs_info){
        let dauerMinuten = kurs_info.dauerMinuten
        let datum_zusammfassung =""
        if(dauerMinuten === null){
            
            let beginn = new Date(kurs_info.beginn).toLocaleDateString("de-DE", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"})
            let ende =  new Date(kurs_info.ende).toLocaleDateString("de-DE",{
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"})
            let datum=beginn
            if(beginn !== ende){
                
                datum = new Date(kurs_info.beginn).toLocaleDateString("de-DE", {
                                day: "2-digit"}) +"-"+ende}
                
            dauerMinuten = new Date(kurs_info.beginn).toLocaleTimeString("de-DE", {
                            hour: "2-digit",
                            minute: "2-digit"}) + "-" +new Date(kurs_info.ende).toLocaleTimeString("de-DE",{
                            hour: "2-digit",
                            minute: "2-digit"})
            datum_zusammfassung = `<img src="icons/calendar.svg" alt="Calender" class="icons"><span class="textpos"> ${datum}</span>`
        } else {
            dauerMinuten +="m"
        }

        
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
                            ${datum_zusammfassung}
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
                     
                        <div class="platzhaltercolorbar"></div>
                        <div class="colorbar ${kurs_info.format}"></div>`

        return haupt_div

}
}