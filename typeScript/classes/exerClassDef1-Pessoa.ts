interface iPessoa{idP:number, nomeP:string, foneP:string, emailP:string}
class Pessoa{
    id:number
    nome:string
    fone:string
    email:string
    peso:number
    altura:number
    iPessoa:any
    
    

    constructor(id:number, nome:string, fone:string, email:string, peso:number, altura:number){
        this.id = id
        this.nome = nome
        this.fone = fone
        this.email = email
        this.peso = peso
        this.altura = altura
    }

    validarDados():boolean{
        if((this.id || this.id == 0) && this.nome && this.fone && this.email){
            return true
        }
        return false
    }

    salvar():void{
        if(this.validarDados()){
            //register(this.id, this.nome, this.fone, this.email)
            console.log("salvo com sucesso")
        }else{
            console.log("Dados Invalidos");
        }
    }

    imprimir():iPessoa{
        let P:iPessoa = {idP:this.id, nomeP:this.nome, foneP:this.fone, emailP:this.email}
        return P
    }
    calcularIMC():number{
        return this.peso/(this.altura**2)
    }

}
export default Pessoa