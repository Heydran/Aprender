
function operationX(operacao:string): number{
    var operations:string[] = []    
    for(let i:number = 0; i < operacao.length; i++){   
          
        if (["+", "-", "*", "/"].includes(operacao[i])){
            operations.push(operacao[i])
        }
    }
    var numbers = operacao.split(/[+,--,/,*]+/)
    
    var resultado:number = parseInt(numbers[0])
    console.log(numbers);
    
    for(let i:number = 0; i < operations.length; i++){          
        if (operations[i] == "+"){
            resultado = resultado + parseInt(numbers[i+1])
        }else if (operations[i] == "-"){
            resultado = resultado - parseInt(numbers[i+1])
        }else if (operations[i] == "*"){
            resultado = resultado * parseInt(numbers[i+1])
        }else if (operations[i] == "/"){
            resultado = resultado / parseInt(numbers[i+1])
        }
    }
    return resultado
}
console.log(operationX("5+5/5+2"))
