"use strict"


//logische und &&
//logische oer ||
//logische nicht !
console.log("Logisches und &&")
console.log(1 > 0 && 4 < 6)
console.log(1 > 0 && 4 > 6)

console.log("Logisches oder ||")
console.log(1 > 0 || 4 < 6)
console.log(1 > 0 || 4 > 6)

console.log("Logisches nicht !")
console.log(1 > 0 && (4 < 6))
console.log(1 > 0 && !(4 < 6))
console.log(1 > 0 && !(4 > 6))

console.log("viele beddignungen")
console.log(1 > 0 && 4 < 6 && 10<20)
console.log(1 > 0 && 4 < 6 && 10>20)
console.log(1 > 0 && 4 < 6 || 10>20)
console.log(1 > 0 && 4 > 6 || 10<20)

console.log(1 < 0 &&  10<20 || 4 < 6 )
console.log(1 < 0 &&  (10<20 || 4 < 6) )