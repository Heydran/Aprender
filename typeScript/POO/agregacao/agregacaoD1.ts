class Produto{
    id:number
    descricao:string
    preco:number
    
    constructor(id:number, descricao:string, preco:number){
        this.id = id
        this.descricao = descricao
        this.preco = preco
    }
}

class ItemVenda{
    id:number
    produto:Produto
    qntd:number
    
    constructor(id:number,produto:Produto, qntd:number){
        this.id = id
        this.produto = produto
        this.qntd = qntd
    }
}

class Venda{
    id:number
    itensVenda:ItemVenda[] = []
    valorTotal:number = 0
    constructor(id:number){
        this.id = id
    }
}

var carrinho:Venda[]
carrinho.push(new Venda(1))
carrinho[0].itensVenda.push(new ItemVenda(1,new Produto(1,"placa de video",7.52),1))