"use strict"

class Kinderkonto extends Konto {
    constructor(iban,inhaber, saldo, limit){
        super(iban, inhaber, saldo)
        this._limit = limit *-1
    }
    _salsopruefen(auszahlung){
        return this._saldo - auszahlung <this._limit ? false : true
        
    }
    abheben(auszahlung) {
        this._salsopruefen(auszahlung)? super.abheben(auszahlung): console.log("Auszahlung nicht möglich")
        
    }
}
