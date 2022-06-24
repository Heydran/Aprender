class Animal{
    private dna:string
    nome:string

    constructor(dna:string, nome:string){
        this.dna = dna
        this.nome = nome
    }
}
class Mamifero extends Animal{
    corPelo:string = ""
}