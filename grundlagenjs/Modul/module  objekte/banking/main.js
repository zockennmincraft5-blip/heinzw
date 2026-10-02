import * as Helper from "./utils/helper.js"
import * as Konto from "./classes/Konto.js"
import * as Kinderkonto from "./classes/Kinderkonto.js"
import * as Settings from "./utils/settings.js"
import * as Person from "./classes/Person.js"

objekt_anzeigen(new Konto("DE6206752564419854", Settings.Person_1.name, Settings.Person_1.vermoegen))
objekt_anzeigen(new Kinderkonto("DE6206752564419740", Settings.Person_2.name, Settings.Person_2.vermoegen, 500))
    // <script src="./banking/utils/settings.js" defer></script>
    // <script src="./banking/utils/helper.js" defer></script>
    // <script src="./banking/classes/Konto.js" defer></script>
    // <script src="./banking/classes/Kinderkonto.js" defer></script>