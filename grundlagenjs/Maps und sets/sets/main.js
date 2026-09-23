"use strict"

let mein_set = new Set()
mein_set.add("Test")
mein_set.add(13)
mein_set.add({})
mein_set.add([])
mein_set.add(function(){})
mein_set.add("Test")
mein_set.add(13)
mein_set.add({})
mein_set.add([])
mein_set.add(function(){})
console.log(mein_set.has("Test")+"\n"+
mein_set.has("beispiel")+"\n"+
mein_set.has(13)+"\n"+
mein_set.has(7+6)+"\n"+
mein_set.has({})+"\n"+
mein_set.has([])+"\n"+
mein_set.has(function() {}))
mein_set.delete("Test")
//mein_set.clear()
console.log(mein_set.size)
console.log(mein_set)