function operationX(operacao) {
    var operations = [];
    for (var i = 0; i < operacao.length; i++) {
        if (operacao[i] in ["+", "-", "*", "/"]) {
            operations.push(operacao[i + 1]);
        }
    }
    var numbers = operacao.split(/[+,--,/,*]+/);
    var resultado = parseInt(numbers[0]);
    console.log(operations);
    for (var i in operations) {
        if (operations[i] == "+") {
            resultado + parseInt(numbers[parseInt(i + 1)]);
        } else if (operations[i] == "-") {
            resultado - parseInt(numbers[parseInt(i + 1)]);
        } else if (operations[i] == "*") {
            resultado * parseInt(numbers[parseInt(i + 1)]);
        } else if (operations[i] == "/") {
            resultado / parseInt(numbers[parseInt(i + 1)]);
        }
    }
    return resultado;
}
console.log(operationX("1/2*3-4+5"));
console.log("casa" [0]);