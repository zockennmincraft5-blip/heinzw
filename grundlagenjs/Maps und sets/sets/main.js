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
console.log(mein_set)