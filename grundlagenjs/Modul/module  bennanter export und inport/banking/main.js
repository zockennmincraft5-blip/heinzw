import { Konto as K} from "./classes/Konto.js"
//bennanter export import
import { pusteblume } from "./classes/Kinderkonto.js"
import { objekt_anzeigen } from "./utils/helper.js"
import { max, sabrina} from "./utils/settings.js"

objekt_anzeigen(new K("DE6206752564419854", max.name, max.vermoegen))
objekt_anzeigen(new pusteblume("DE6206752564419740", sabrina.name, sabrina.vermoegen, 500))
    // <script src="./banking/utils/settings.js" defer></script>
    // <script src="./banking/utils/helper.js" defer></script>
    // <script src="./banking/classes/Konto.js" defer></script>
    // <script src="./banking/classes/Kinderkonto.js" defer></script>