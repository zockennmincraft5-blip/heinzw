"use strict"
let d = new Date()

d.setFullYear(1967)
d.setMonth(0)
d.setDate(1)
d.setHours(0)
d.setMinutes(0)
d.setSeconds(0)
d.setMilliseconds(0)
console.log(d)

let e = new Date()
console.log(e.getFullYear() +"\n"+
e.getMonth()+"\n"+
e.getDate()+"\n"+
e.getDay()+"\n"+
e.getHours()+"\n"+
e.getMinutes()+"\n"+
e.getSeconds()+"\n"+
e.getMilliseconds())
console.log("in UTC")
let d_utc = new Date()
d_utc.setUTCFullYear(1967)
d_utc.setUTCMonth(0)
d_utc.setUTCDate(1)
d_utc.setUTCHours(0)
d_utc.setUTCMinutes(0)
d_utc.setUTCSeconds(0)
d_utc.setUTCMilliseconds(0)
console.log(d_utc)

let e_utc = new Date()
console.log(e_utc.getUTCFullYear() +"\n"+
e_utc.getUTCMonth()+"\n"+
e_utc.getUTCDate()+"\n"+
e_utc.getUTCDay()+"\n"+
e_utc.getUTCHours()+"\n"+
e_utc.getUTCMinutes()+"\n"+
e_utc.getUTCSeconds()+"\n"+
e_utc.getUTCMilliseconds())

let d_unix = new Date()
d_unix.setTime(156855700000)
console.log(d_unix)
console.log(e_utc.getTime())