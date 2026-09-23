"use strict"
let auto_1 ={
    marke: "BMW",
    model: "i8"
}
let auto_2 ={
    marke: "Tesla",
    model: "Model x"
}
let auto_3 ={
    marke: "Tesla",
    model: "Model x"
}

console.log("Auto 1 == Auto 2")
console.log(auto_1 == auto_2)

console.log("Auto 2 == Auto 3")
console.log(auto_2 == auto_3)

console.log("Auto 3 == Auto 3")
console.log(auto_3 == auto_3)

console.log("{} == {}")
console.log({} == {})

console.log("Auto 1 === Auto 2")
console.log(auto_1 === auto_2)

console.log("Auto 2 === Auto 3")
console.log(auto_2 === auto_3)

console.log("Auto 3 === Auto 3")
console.log(auto_3 === auto_3)




const auto_vergleich = function(auto_1, auto_2=auto_1){
    console.log(auto_1.marke == auto_2.marke && auto_1.model == auto_2.model)
}

auto_vergleich(auto_3, auto_2)