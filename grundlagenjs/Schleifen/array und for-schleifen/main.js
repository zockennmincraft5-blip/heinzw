"use strict"
let waren =[

        "Äpfel",
        "Birnen",
        "Bananen",
        "Möhren",
        "Sellerie",
        "Kohl",
        "Möhren",
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot",


]

for (let i=0; waren.length > i; i++){
    console.log(`wir haben im angebot ${waren[i]}`)
}

for (let i= waren.length-1;i>=0; i--){
    console.log(`wir haben nicht mehr im angebot ${waren[i]}`)
}