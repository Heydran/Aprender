interface carrinhoCompras{
    codigoCompra:number
    produtos:produtos[]
    endereco:string

}
interface produtos {
    nome:string
    descricao:string
    custo:number
    quantidade:number
}

var compra:carrinhoCompras = {codigoCompra: 1,produtos: [], endereco: "rua dos bobos. Numero 0"}
var produto1:produtos = {nome:"Placa de Video",descricao:"RTX 3080 TI", custo:25000, quantidade:1}
compra.produtos.push(produto1)
var produto2:produtos = {nome:"Memoria RAM",descricao:"Flash Memory Card 64 GB", custo:1200, quantidade:2}
compra.produtos.push(produto2)
console.log("separar ----------------------------------------------------------------------")
console.log(compra)
console.log("separar ----------------------------------------------------------------------")
console.log(compra.codigoCompra)
console.log("separar ----------------------------------------------------------------------")
console.log(compra.produtos)
console.log("separar ----------------------------------------------------------------------")
console.log(compra.produtos[0])
console.log("separar ----------------------------------------------------------------------")
console.log(compra.produtos[0].nome)
console.log("separar ----------------------------------------------------------------------")


