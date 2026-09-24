"use strict"

//setTimeout(calbbackfunktion, zeitspanne,[parameter 1, ... PaarameterN])
console.log("Lets Go")
setTimeout(function(){
    console.log("Finish")
}, 2000)
console.log("Lets Go")
//setTImeout (codestring, zeitspanne)
console.log(setTimeout("console.log(\"Finish\")", 2000))

clearTimeout(1)

//setInterval(calbbackfunktion, zeitspanne,[parameter 1, ... PaarameterN])
console.log("Lets Go")
setInterval(function(){
    console.log("1 sekunde später")
}, 1000)
console.log("Lets Go")
//setTImeout (codestring, zeitspanne)
console.log(setInterval("console.log(\"5 sekunde später\")", 5000))

clearInterval(2)