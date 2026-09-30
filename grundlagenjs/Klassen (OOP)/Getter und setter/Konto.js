"use strict"
class Konto {
    constructor(iban,inhaber, saldo){
        this.iban = iban
        this.inhaber = [inhaber]
        this.saldo = saldo
        this.aktive = true
    }
    set einzahlen(einzahlung) {
        this.saldo += einzahlung;
    }
    set abheben(auszahlung) {
        this.saldo -= auszahlung;
    }
    get kontostand_abfragen() {
        return this.saldo;
    }
}
