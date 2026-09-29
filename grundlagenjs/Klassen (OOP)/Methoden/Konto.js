"use strict"
class Konto {
    constructor(iban,inhaber, saldo){
        this.iban = iban
        this.inhaber = [inhaber]
        this.saldo = saldo
        this.aktive = true
    }
    einzahlen(einzahlung) {
        this.saldo += einzahlung;
    }
    abheben(auszahlung) {
        this.saldo -= auszahlung;
    }
    kontostand_abfragen() {
        return this.saldo;
    }
}
