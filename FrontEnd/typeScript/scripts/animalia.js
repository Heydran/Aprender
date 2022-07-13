"use strict";
class Animalia {
    constructor(dna, nome) {
        this.dna = dna;
        this.nome = nome;
    }
    getClasse() {
        return "Animalia";
    }
    setDna(dna) {
        if (dna.length == 20) {
            this.dna = dna;
            return true;
        }
        else {
            return false;
        }
    }
    getDna() {
        return this.dna;
    }
}
class Mammalia extends Animalia {
    constructor(corPelo, dna, nome, numeroMamas) {
        super(dna, nome);
        this.corPelo = corPelo;
        this.numeroMamas = numeroMamas;
    }
    getClasse() {
        return `Mammalia que herda de ${super.getClasse()}`;
    }
}
class Felidae extends Mammalia {
    constructor(corPelo, dna, nome, numeroMamas) {
        super(corPelo, dna, nome, numeroMamas);
        this.comida = "carne";
    }
    getClasse() {
        return `Felidae que herda de ${super.getClasse()}`;
    }
    digestaoProteina() {
        return "proteina digerida";
    }
}
var gato = new Felidae("laranja", "01234567890123456789", "gato", 6);
console.log(gato.digestaoProteina());
console.log(gato.getDna());
console.log(gato.getClasse());
