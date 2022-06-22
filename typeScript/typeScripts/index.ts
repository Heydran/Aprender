function exibir(texto:pessoa) {
    console.log(texto.nome);
    
}
var texto:string
texto = "este é o texto"

interface pessoa{
    nome:string
}
exibir({nome:"andre"})
 
var tupla:[string,number,number] = ["andre",2,2]
var lista:([string,number,boolean])[] = [["andre",2,true],["andree",3,true],["dre",4,true],["aaandre",5,true]]
console.log(lista[1][0])
for (let i of lista){
    for (let x of i){
        console.log(x);
        
    }
}

