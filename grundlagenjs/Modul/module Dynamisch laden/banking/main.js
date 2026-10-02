import { Konto } from "./classes/Konto.js"
import { Kinderkonto } from "./classes/Kinderkonto.js"
import { person_1, person_2} from "./utils/settings.js"

document.querySelector("button").addEventListener("click", () => {
    import("./utils/helper.js").then(({ objekt_anzeigen }) => {
        objekt_anzeigen(new Konto("DE6206752564419854", person_1.name, person_1.vermoegen))
        objekt_anzeigen(new Kinderkonto("DE6206752564419740", person_2.name, person_2.vermoegen, 500))
    })
}) 