"use strict"
//Funktions Ausdrücke
const func_1 = function() {
    console.log("funktion 1")
}

func_1()
let func_2 = function() {
    console.log("funktion 2")
}

func_2()

func_2 = function(){
    console.log("Funktion 2 (neu)")
}
func_2()

func_2 = "Kann überschrieben werden"
console.log(func_2)

//Funktionsdeklarationen werden gehoistet
func_3()
function func_3(){
    console.log("Funktion 3")
}
