"use strict";
function exibir(texto) {
    console.log(texto.nome);
}
var texto;
texto = "este é o texto";
exibir({ nome: "andre" });
var tupla = ["andre", 2, 2];
var lista = [["andre", 2, true], ["andree", 3, true], ["dre", 4, true], ["aaandre", 5, true]];
console.log(lista[1][0]);
for (let i of lista) {
    for (let x of i) {
        console.log(x);
    }
}
