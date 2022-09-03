"use strict";
class Animal {
    constructor(dna, nome) {
        this.dna = dna;
        this.nome = nome;
    }
}
class Mamifero extends Animal {
    constructor() {
        super(...arguments);
        this.corPelo = "";
    }
}
