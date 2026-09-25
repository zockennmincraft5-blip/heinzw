"use strict";


let html_collegtion_1 =document.getElementsByClassName("jumbotron")
let html_collegtion_2 =document.getElementsByTagName("li")
console.log(html_collegtion_1)
console.log(html_collegtion_2)

for(let i = 0; i<html_collegtion_1.length; i++){
    console.log(html_collegtion_1[i])
}


for(let i = 0; i<html_collegtion_2.length; i++){
    console.log(html_collegtion_2[i])
}

for (let e of html_collegtion_1){
     console.log(e)
}
for (let e of html_collegtion_2){
     console.log(e)
}

//nodelist
let node_list_1 = document.querySelectorAll("p")
console.log(node_list_1)
for(let i = 0; i<node_list_1.length; i++){
    console.log(node_list_1[i])
}

for (let e of node_list_1){
     console.log(e)
}
node_list_1.forEach(function(element){
    console.log(element)
});