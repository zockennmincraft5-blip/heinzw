"use strict"

let alter_user = parseInt(prompt("gib dein allter ein (du muss min. 18 sein)", ""))
const min_alter = 18
if (alter_user > min_alter){
    console.log("Du bist volljährig")
}else if (alter_user==18) {
  console.log("Du bist gerade erst volljährig")  
} else{
    console.log("Du bist nicht volljährig")
}

// if (5 == 5){
//     console.log("if wurde ausgeführt")
// }

