"use strict"
class Konto {
    constructor(iban,inhaber, saldo){
        this._iban = iban
        this._inhaber = [inhaber]
        this._saldo = saldo
        this._aktive = true
    }
    einzahlen(einzahlung) {
        this._saldo += einzahlung;
    }
    abheben(auszahlung) {
        this._saldo -= auszahlung;
    }
    kontostand_abfragen() {
        return this._saldo;
    }
}
