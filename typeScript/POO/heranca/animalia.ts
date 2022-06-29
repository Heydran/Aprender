class Animalia{
    private dna:string
    nome:string

    constructor(dna:string, nome:string){
        this.dna = dna
        this.nome = nome
    }
    getClasse():string{
        return "Animalia"
    }
    setDna(dna:string):boolean{
        if(dna.length == 20){
            this.dna = dna
            return true
        }else{
            return false
        }
    }
    getDna():string{
        return this.dna
    }
}


class Mammalia extends Animalia{
    corPelo:string
    numeroMamas:number

    constructor(corPelo:string, dna:string, nome:string, numeroMamas:number){
        super(dna,nome)
        this.corPelo = corPelo
        this.numeroMamas = numeroMamas
    }
    getClasse():string{
        return `Mammalia que herda de ${super.getClasse()}`
    }
}

interface Carnivoro{
    comida:string
    digestaoProteina():string
}

class Felidae extends Mammalia implements Carnivoro{
    comida:string
    constructor(corPelo:string, dna:string, nome:string, numeroMamas:number){
        super(corPelo, dna, nome, numeroMamas)
        this.comida = "carne"
    }
    getClasse():string{        
        return `Felidae que herda de ${super.getClasse()}`
    }
    
    digestaoProteina():string{
        return "proteina digerida"
    }
}

var gato = new Felidae("laranja", "01234567890123456789", "gato", 6)
console.log(gato.digestaoProteina())
console.log(gato.getDna())
console.log(gato.getClasse())
