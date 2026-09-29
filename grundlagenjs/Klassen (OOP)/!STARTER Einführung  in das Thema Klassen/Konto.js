"use strict"
class Konto {
    constructor(iban,inhaber, saldo){
        this.iban = iban
        this.inhaber = [inhaber]
        this.saldo = saldo
        this.aktive = true
    }
}
