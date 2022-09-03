class Produto {
    id:number
    descricao:string
    valorUnitario:number
    qtEstoque:number
        constructor(id:number,descricao:string,valorUnitario:number,qtEstoque:number) {
        this.id = id
        this.descricao = descricao
        this.valorUnitario = valorUnitario
        this.qtEstoque = qtEstoque
    }
    getEstoque():number{
        return this.qtEstoque
    }
    calcDesconto(desconto:number):number{
        return this.valorUnitario*desconto/100
    }
    calcAcrecimo(acrecimo:number):number{
        return this.valorUnitario*acrecimo/100
    }
    printAtributes():void{
        console.log(this.id)
        console.log(this.descricao)
        console.log(this.valorUnitario)
        console.log(this.qtEstoque)        
    }
}
export {Produto}
