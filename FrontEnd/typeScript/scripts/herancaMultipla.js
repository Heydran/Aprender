"use strict";
class Offroad {
    constructor() {
        this.cor = "Dark Cyan";
        this.modelo = "renegate";
        this.marca = "geep";
    }
    ligar() {
        return true;
    }
    ativar() {
        return true;
    }
}
var carro = new Offroad;
console.log(carro.cor);
