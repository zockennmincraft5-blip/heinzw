"use strict"
let s = " Lorem ipsum dolor sit amet ipsum. "

console.log(s.length)
console.log(s.indexOf("ipsum"))
console.log(s.lastIndexOf("ipsum"))
console.log(s.includes("sit", 28))
console.log(s.toLowerCase())
console.log(s.toUpperCase())
console.log(s.trim())
console.log(s.repeat(100))

let regex =/i\w{4}/g

console.log(s.search(regex))
console.log(s.replace(regex, "opsum"))
console.log(s.match(regex))