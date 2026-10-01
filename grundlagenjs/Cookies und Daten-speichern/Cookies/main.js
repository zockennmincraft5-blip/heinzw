"use strict"

console.log(document.cookie);

//syntax: 
// document.cookie = "name=value; max-age=seconds; path=path; domain=domain; secure";
document.cookie = "vorname=Max"
document.cookie = "nachname=Mustermann"
document.cookie = `${encodeURIComponent("ein key;Value")}=${encodeURIComponent("key=value")}`
document.cookie = "10s_cookie=; max-age=10"
setTimeout(() => {
    console.log(document.cookie)
}, 9000)
setTimeout(() => {
    console.log(document.cookie)
}, 11000)
document.cookie = `10s_cookie=; max-age=${60 * 60 * 24}`// 1 Tag
//cookies setzen
const set_cookie = (name, value, haltbarkeit) => {
    let cookie = `${encodeURIComponent(name)}=`;
    if (value !== null) {
        cookie += `${encodeURIComponent(value)}`
    }
    if (haltbarkeit !== null) {
        cookie += `; max-age=${haltbarkeit}`
    }
    document.cookie = cookie;
}
//cookie überschreiben
const uebschreibe_cookie = (name, value, haltbarkeit) => {
    let cookie = `${encodeURIComponent(name)}=`;
    if (value !== null) {
        cookie += `${encodeURIComponent(value)}`
    }
    if (haltbarkeit !== null) {
        cookie += `; max-age=${haltbarkeit}`
    }   
    document.cookie = cookie;
}

set_cookie("passwort", "&%4864$§", 60 * 60 * 2) // 2 Stunden
set_cookie("zahl", 676767, 60 * 60 * 24 * 7) // 1 Woche
//cookies löschen
const loesche_cookie = (name) => {
    document.cookie = `${encodeURIComponent(name)}=; max-age=0`
}
loesche_cookie("vorname")

//cookies auslesen
const auslesen_cookie = (name) => {
    let cookies = document.cookie.split("; ")
    console.log(cookies)
    for (let cookie of cookies) {
        let [cookie_name, cookie_value] = cookie.split("=")
        if (decodeURIComponent(cookie_name) === name) {
            return decodeURIComponent(cookie_value)
        }   
    }
}
//cookies prüfen
const pruefe_cookie = (name) => {
    let cookies = document.cookie.split("; ")
    for (let cookie of cookies) {
        let [cookie_name, cookie_value] = cookie.split("=")
        if (decodeURIComponent(cookie_name) === name) {
            return true
        }
    }
    return false
}
console.log(`nachname: ${auslesen_cookie("nachname")}`)
console.log(`Existiert vorname? ${pruefe_cookie("vorname")}`)
console.log(document.cookie)