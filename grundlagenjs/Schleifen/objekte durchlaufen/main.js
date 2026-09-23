"use strict"

let mein_objekt ={
    name: "Mustermann",
    vorname:"Max",
    alter: 26
}
// so nicht
// for (let eigenschaft in mein_objekt){
//     console.log(eigenschaft)
//     console.log(mein_objekt[eigenschaft])
// }



for (let paar of Object.entries(mein_objekt)){
    console.log(paar)
    for(let info of paar){
        console.log(info)
    }
}

for(let eigemschaft of Object.keys(mein_objekt)){
    console.log(eigemschaft)
}


for(let detail of Object.values(mein_objekt)){
    console.log(detail)
}