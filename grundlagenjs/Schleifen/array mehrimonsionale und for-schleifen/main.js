"use strict"
let waren =[
    [
        "Äpfel",
        "Birnen",
        "Bananen"
    ],
    [
        "Möhren",
        "Sellerie",
        "Kohl"
    ],
    [
        "Graubrot",
        "Schwarzbrot",
        "Vollkornbrot"
    ]
]

for (let i=0; waren.length > i; i++){
    for (let i_1=0; waren[i].length > i_1; i_1++){
        console.log(`wir haben im angebot ${waren[i][i_1]}`)
    }
}
