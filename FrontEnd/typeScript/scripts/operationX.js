"use strict";
function operationX(operacao) {
    var operations = [];
    for (let i = 0; i < operacao.length; i++) {
        if (["+", "-", "*", "/"].includes(operacao[i])) {
            operations.push(operacao[i]);
        }
    }
    var numbers = operacao.split(/[+,--,/,*]+/);
    var resultado = parseInt(numbers[0]);
    console.log(numbers);
    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "+") {
            resultado = resultado + parseInt(numbers[i + 1]);
        }
        else if (operations[i] == "-") {
            resultado = resultado - parseInt(numbers[i + 1]);
        }
        else if (operations[i] == "*") {
            resultado = resultado * parseInt(numbers[i + 1]);
        }
        else if (operations[i] == "/") {
            resultado = resultado / parseInt(numbers[i + 1]);
        }
    }
    return resultado;
}
console.log(operationX("5+5/5+2"));
