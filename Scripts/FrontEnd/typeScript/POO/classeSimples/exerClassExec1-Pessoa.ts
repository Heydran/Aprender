import Pessoa from "./exerClassDef1-Pessoa"

var pessoas:Pessoa[] = []
pessoas.push(new Pessoa(1,"André","(12)34567890","email@gmail.com", 1.82, 130))
var p = pessoas[0].imprimir()
console.log(p.nomeP)
console.log(pessoas[0].nome);

console.log(pessoas[0].validarDados());
pessoas[0].salvar()
console.log(pessoas[0].calcularIMC());
