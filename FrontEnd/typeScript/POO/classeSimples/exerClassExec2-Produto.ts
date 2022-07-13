import {Produto} from "./exerClassDef2-produto"

var produtos:Produto[] = []

produtos.push(new Produto(1,"Placa de Video RTX3050TI", 15000.00, 1))
produtos.push(new Produto(2,"Memoria RAM HyperX 32GB", 1200.00, 2))
produtos.push(new Produto(3,"I9 9700x", 4500.00, 1))
produtos.push(new Produto(4,"Asus PX 560", 2500.00, 1))

for(let j of produtos){
    j.printAtributes()
}
